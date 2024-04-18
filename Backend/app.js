const mysql = require("mysql");

const express = require("express");
const bodyParser = require("body-parser");
const cors =require('cors');
const multer=require('multer');
const fs = require("fs");
// const cors = require("cors");


// const saltRounds = 10;

const app = express();
app.use(cors());

// route included
// app.use("/payment", require("./payment"));

app.use(bodyParser.urlencoded({ extended: true }));

// const io = new WebSocket.Server({ noServer: true });
// global.io = new WebSocket.Server({ noServer: true });
//static files rin public folder
app.use(express.static("public"));
// app.use(cors());
app.use(express.json());

// var db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "drushti",
//     database: "bruno",
    
// });

var db = mysql.createConnection({
    host: "bruno.czm0cm226twp.eu-north-1.rds.amazonaws.com",
    user: "root",
    password: "8105585637",
    database: "bruno"
});


var flag1 = 0;
var flag2 = 0;
var flag3 = 0;
var flag4 = 0;

db.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected!");
        db.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = 'bruno';`,(err,tables)=>{
            for(var i=0;i<tables.length;i++){
                if(tables[i].TABLE_NAME == "users") flag1 = 1;
            }

            if(!flag1){
                var sql = "CREATE TABLE users ( id INT AUTO_INCREMENT PRIMARY KEY, name varchar(30),email varchar(50),passwd text);"
                db.query(sql,function(err,result){
                    if(err) console.log(err);
                    else{
                        console.log("users created");
                    }
                });
            }     
            
            for(var i=0;i<tables.length;i++){
                if(tables[i].TABLE_NAME == "cartitems") flag2 = 1;
            }

            if(!flag2){
                var sql = "CREATE TABLE cartitems(carty VARCHAR(200),item INT PRIMARY KEY AUTO_INCREMENT,item_no INT UNIQUE);"
                db.query(sql,function(err,result){
                    if(err) console.log(err);
                    else{
                        console.log("cartitems created");
                    }
                });
            }

            for(var i=0;i<tables.length;i++){
                if(tables[i].TABLE_NAME=="prodinfo") flag3=1;
            }
            if(!flag3){
                var sql="CREATE TABLE prodinfo(key1 INT PRIMARY KEY,prodname VARCHAR(200),price VARCHAR(200),descr VARCHAR(200),category VARCHAR(200),image MEDIUMBLOB NOT NULL);";
                db.query(sql,function(err,result){
                    if(err) console.log(err);
                    else{
                        console.log("product info created");
                    }
                })
            }

            for(var i=0;i<tables.length;i++){
                if(tables[i].TABLE_NAME=="likeditems") flag4=1;
            }
            if(!flag4){
                var sql="CREATE TABLE likeditems(carty VARCHAR(200),item INT PRIMARY KEY AUTO_INCREMENT,item_no INT UNIQUE);";
                db.query(sql,function(err,result){
                    if(err) console.log(err);
                    else{
                        console.log("likeditems created");
                    }
                })
            }

        });   
    }
});

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadPath = 'Uploads'; // Specify the directory where you want to store the uploaded files
      fs.mkdirSync(uploadPath, { recursive: true }); // Create the directory if it doesn't exist
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use the original file name for storing
    },
  });
  
  const upload = multer({ storage: storage });
  var variable = false;
  
 

  app.post("/signup", upload.single("photo"), (req, res) => {
    const username=req.body.username;
    const useremail=req.body.useremail;
    const pswd=req.body.pswd;
    console.log(username , useremail,pswd);
    const chkquery="SELECT COUNT(*) AS count FROM users WHERE email = ?;";
    db.query(chkquery,[useremail],(error,result)=>{
        if(error){
            console.log(error);
            return res.status(500).json({ message: "Error checking email existence" });
        }
        if(result[0].count>0){
            return res.json({message:"Already exists, redirect to signin"});
                       
        }
        const sql="INSERT INTO users (name ,email,passwd) VALUES(?,?,?);";
        db.query(sql,[username,useremail,pswd],(err,resu)=>{
            if(err){
                console.log(err);
                return res.status(500).json({ message: "Error uploading form" });
            }
            variable = true;
            console.log("Successfully inserted data into database!");
            res.status(200).json({ message: "Signed up successfully" });
        })
    })
})


// Handling user signin
app.post("/signin", upload.single("photo"), (req, res) => {
    const { email, password } = req.body;
    const checkCredentialsQuery = "SELECT * FROM users WHERE email = ?";
    db.query(checkCredentialsQuery, [email], (checkCredErr, checkCredResult) => {
      if (checkCredErr) {
        console.error("Error checking credentials:", checkCredErr);
        return res.json({ message: "Error checking credentials" });
      }
  
      if (checkCredResult.length === 0) {
        // Email doesn't exist, send appropriate message
        return res.json({ message: "Email not found, redirecting to sign up..." });
      }
  
      const user = checkCredResult[0];
      if (user.passwd !== password) {
        // Password doesn't match, send appropriate message
        return res.json({ message: "Incorrect password" });
      }
  
      // Email and password match, send success message or perform further actions
      variable = true;
      res.json({ message: "Signin successful" });
    });
  });

app.post("/cart",(req,res)=>{
    const cartItem = req.body;
    console.log('Received cart item:', cartItem);
    for (const key in cartItem) {
        var a=key;
        var b=cartItem[key];
    }
    console.log(a,b); 
     const sql="INSERT INTO cartitems (carty,item_no) VALUES(?,?);";
     db.query(sql,[a,b],(err,result)=>{
        if(err){
            console.log(err.sqlMessage);
        }
        else{
            console.log("successfuly added into db");
        }
     })
})


app.post("/like",(req,res)=>{
    const likeItem = req.body;
    console.log('Received like item:', likeItem);
    for (const key in likeItem) {
        var a=key;
        var b=likeItem[key];
    }
    console.log(a,b); 
     const sql="INSERT INTO likeditems (carty,item_no) VALUES(?,?);";
     db.query(sql,[a,b],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("successfuly added into db");
        }
     })
})

// app.post("/cartitems",upload.single("photo"),(req,res)=>{
//     const sql="SELECT item_no FROM cartitems;";
//     db.query(sql,(err,result1)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             db.query("SELECT * FROM prodinfo;", (err, result11) => {
//                 if (err) console.log(err);
//                 else {
//                     console.log(result1);
//                     res.json({message: result11});
//                 }
//             })
//         }
//     })
// })


app.post("/cartitems", upload.single("photo"), (req, res) => {
    const sql = "SELECT * FROM cartitems INNER JOIN prodinfo ON cartitems.item_no = prodinfo.key1;";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            const items = result.map(item => ({
                item_no: item.item_no,
                // Include other properties you need from cartitems table
                // Assuming the image is stored in the 'image' column of the 'prodinfo' table
                prodname: item.prodname,
                price: item.price,
                descr: item.descr,
                category: item.category,
                // Convert image to base64
                imagex: item.image.toString('base64')
            }));
            res.json({ message: items });
        }
    });
});



app.post("/likeditems",upload.single("photo"),(req,res)=>{
    const sql = "SELECT * FROM likeditems INNER JOIN prodinfo ON likeditems.item_no = prodinfo.key1;";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            const items = result.map(item => ({
                item_no: item.item_no,
                // Include other properties you need from cartitems table
                // Assuming the image is stored in the 'image' column of the 'prodinfo' table
                prodname: item.prodname,
                price: item.price,
                descr: item.descr,
                category: item.category,
                // Convert image to base64
                imagex: item.image.toString('base64')
            }));
            res.json({ message: items });
        }
    });
})

app.post("/addproductcard",upload.single("prodimg"),(req,res)=>{
    const { key,prodname,price,descr,category } = req.body;
    const imageFile = req.file;
  
    if (!imageFile) {
      return res.status(400).json({ message: "No image uploaded" });
    }
  
    const imageContent = fs.readFileSync(imageFile.path);
  
    const query = "INSERT INTO prodinfo (key1,prodname,price,descr,category,image) VALUES (?,?,?,?,?,?)";
    db.query(query, [key,prodname,price,descr,category,imageContent], (err, result) => {
      if (err) {
        console.error("Error inserting image into database:", err);
        return res.status(500).json({ message: "Error uploading image" });
      }
      console.log("Successfully inserted image into database!");
      res.status(200).json({ message: "product info uploaded successfully" });
    });
})
require('dotenv').config();

app.post("/admin123", upload.single("photo"), (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "ROOT" && password === "123") {
        res.json({ message: "admin login successful" });
    } else {
        res.json({ message: "Wrong username or password" });
    }
});


app.post("/userdetails",upload.single("photo"),(req,res)=>{
    const sql="SELECT name,email FROM users;";
    db.query(sql,(err,result1)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result1);
            res.json({message: result1});
        }
    })
})

var imagearray = []

app.post("/",upload.single('photo'),(req,res)=>{
    const sql="SELECT * FROM prodinfo;";
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            for(let i = 0; i < result.length; i++) {
                var imageBuffer = result[i].image;
                imagearray.push(Buffer.from(imageBuffer).toString("base64"));
            }
            res.json({message:result, images: imagearray})
        }
    })
})




app.get("/getimages", (req, res) => {
    const sql = "SELECT * FROM prodinfo";
    db.query(sql, (err, results) => {
      if(err) {
        console.error("Error fetching images:", err);
        return res.status(500).json({ message: "Error fetching images" });
      } 
      const images = results.map(result => ({
        imageData: result.image.toString('base64'),
        prodname: result.prodname,
        price: result.price,
        descr: result.descr,
        category: result.category,
        item_no:result.key1,
      }));
      res.json(images);
    });
  });

  app.get("/getimagesm", (req, res) => {
    const sql = "SELECT * FROM prodinfo WHERE category=?;";
    db.query(sql,["men"], (err, results) => {
      if(err) {
        console.error("Error fetching images:", err);
        return res.status(500).json({ message: "Error fetching images" });
      } 
      const images = results.map(result => ({
        imageData: result.image.toString('base64'),
        prodname: result.prodname,
        price: result.price,
        descr: result.descr,
        category: result.category,
        item_no:result.key1,
      }));
      res.json(images);
    });
  });

  app.get("/getimagesw", (req, res) => {
    const sql = "SELECT * FROM prodinfo WHERE category=?;";
    db.query(sql,["women"], (err, results) => {
      if(err) {
        console.error("Error fetching images:", err);
        return res.status(500).json({ message: "Error fetching images" });
      } 
      const images = results.map(result => ({
        imageData: result.image.toString('base64'),
        prodname: result.prodname,
        price: result.price,
        descr: result.descr,
        category: result.category,
        item_no:result.key1,
      }));
      res.json(images);
    });
  });


  app.get("/getimagesk", (req, res) => {
    const sql = "SELECT * FROM prodinfo WHERE category=?;";
    db.query(sql,["kids"], (err, results) => {
      if(err) {
        console.error("Error fetching images:", err);
        return res.status(500).json({ message: "Error fetching images" });
      } 
      const images = results.map(result => ({
        imageData: result.image.toString('base64'),
        prodname: result.prodname,
        price: result.price,
        descr: result.descr,
        category: result.category,
        item_no:result.key1,
      }));
      res.json(images);
    });
  });
// const RAZORPAY_SECRET=RGTlLfQdGOHNQuA2Rfu1HDYv;
// const RAZORPAY_KEY_ID=rzp_test_eUJY5DO1rH7Fzh;






app.listen(8000,function(){
    console.log('server started on port 8000');
})
