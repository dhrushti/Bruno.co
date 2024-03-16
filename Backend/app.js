const mysql = require("mysql");

const express = require("express");
const bodyParser = require("body-parser");
const cors =require('cors');
const multer=require('multer');
// const cors = require("cors");


// const saltRounds = 10;

const app = express();
app.use(cors());



app.use(bodyParser.urlencoded({ extended: true }));

// const io = new WebSocket.Server({ noServer: true });
// global.io = new WebSocket.Server({ noServer: true });
//static files rin public folder
app.use(express.static("public"));
// app.use(cors());
app.use(express.json());

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "drushti",
    database: "bruno",
    
});

// var db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "@Akash2002",
//     database: "sculptica"
// });


var flag1 = 0;
var flag2 = 0;
  
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
                var sql = "CREATE TABLE cartitems(carty VARCHAR(200),item INT PRIMARY KEY AUTO_INCREMENT,item_no INT);"
                db.query(sql,function(err,result){
                    if(err) console.log(err);
                    else{
                        console.log("cartitems created");
                    }
                });
            }
        });   
    }
});

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadPath = 'uploads'; // Specify the directory where you want to store the uploaded files
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
    var a="";
    var b=0;
    console.log('Received cart item:', cartItem);
    for (const key in cartItem) {
        a=key;
        b=cartItem[key];
    }
    console.log(a,b); 
     const sql="INSERT INTO cartitems (carty,item_no) VALUES(?,?);";
     db.query(sql,[a,b],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("successfuly added into db");
        }
     })
})

app.post("/cartitems",upload.single("photo"),(req,res)=>{
    const sql="SELECT item_no FROM cartitems";
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

app.listen(8000,function(){
    console.log('server started on port 8000');
})
