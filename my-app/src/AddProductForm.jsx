
import React,{useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Bruno Co.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();


function AddProductForm(){
    const [key ,setKey]=useState("");
  const [prodname ,setProdname]=useState("");
  const [price ,setPrice]=useState("");
  const [category,setCategory]=useState("");
  const [descr ,setDescr]=useState("");
  const [msg,setMsg]=useState("");
  const [file,setFile]=useState("");

  const history = useNavigate();

  const handlekey=(e)=>{
    setKey(e.target.value);
  }
  const handleProdname=(e)=>{
    setProdname(e.target.value);
  }
  const handlePrice=(e)=>{
    setPrice(e.target.value);
  }
  const handleCategory=(e)=>{
    setCategory(e.target.value);
  }
  const handleDescr=(e)=>{
    setDescr(e.target.value);
  }
  const handleImage = (e) => {
    setFile(e.target.files[0]);
}
  async function addSignindata(e) {
    e.preventDefault();
    const formdata =new FormData();
    formdata.append("key",key);//key is username kelage  and value is melgade
    formdata.append("prodname",prodname);
    formdata.append("descr",descr);
    formdata.append("price",price);
    formdata.append("category",category);
    formdata.append("prodimg",file);
     
    const config = {
      headers: {
          "Content-Type": "multipart/form-data"
      }
  };

 
    try{
      const res= await axios.post("/addproductcard",formdata,config);
      if(res.status===200)
      {
        console.log("succesfuly submitted");
        setMsg(res.data.message);
        setTimeout(()=>{
          history("/");
        },2000);
      }
      else{
        console.log("error");
      }
    }
    catch(error) {
      console.log("error",error);
    }
  }
    return(
        <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          
          <Typography component="h1" variant="h5">
            Add Product Info
          </Typography>
          <Box component="form" noValidate onSubmit={addSignindata} sx={{ mt: 1,color:'#5F8670' }}>
        
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="key"
              label="Key"
              type="number"
              name="key1"
              autoFocus
              onChange={handlekey}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="prodname"
              label="Product Name"
              name="prodname"
             
              onChange={handleProdname}
            /> 
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
        
              id="price"
            
              onChange={handlePrice}
            />
               <TextField
              margin="normal"
              required
              fullWidth
              name="descr"
              label="Description"
              
              id="descr"
           
              onChange={handleDescr}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="category"
              label="Category"
              
              id="category"
           
              onChange={handleCategory}
            />
          <Form.Group className="mb-3" controlId="formBasicPassword" style={{ marginBottom: "2rem" }}>
                      <Form.Label>Select Your Image</Form.Label>
                      <Form.Control type="file" name='prodimg' onChange={handleImage} />
                  </Form.Group>
            
            
            <Button
              type="submit"
              fullWidth
              variant="contained"

              sx={{ mt: 3, mb: 2 }}
              
            > 
              Add Product
            </Button>
            <div>{msg}</div>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
       
      </Container>
    </ThemeProvider>

    );

}
export default AddProductForm;