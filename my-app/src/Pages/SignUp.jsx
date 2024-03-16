import React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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

export default function SignUp() {

  const [name ,setName]=useState("");
  const [email ,setEmail]=useState("");
  const [pwd ,setPwd]=useState("");
  const [msg,setMsg]=useState("welcom");


  const history = useNavigate();

  const handleName=(e)=>{
    setName(e.target.value);
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handlePassword=(e)=>{
    setPwd(e.target.value);
  }
  async function addSignindata(e) {
    e.preventDefault();
    const formdata =new FormData();
    formdata.append("username",name);//key is username kelage  and value is melgade
    formdata.append("useremail",email);
    formdata.append("pswd",pwd);
     
    const config = {
      headers: {
          "Content-Type": "multipart/form-data"
      }
  };


    try{
      const res= await axios.post("/signup",formdata,config);
      if(res.status===200)
      {
        console.log("succesfuly submitted");
        setMsg(res.data.message);
        setTimeout(()=>{
          history("/");
        },5000);
      }
      else{
        console.log("error");
      }
    }
    catch(error) {
      console.log("error",error);
    }
  }

  return (
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
          <Avatar sx={{ m: 1, bgcolor: '#5F8670' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={addSignindata} sx={{ mt: 1,color:'#5F8670' }}>
        
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="username"
              autoFocus
              onChange={handleName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="useremail"
              autoComplete="email"
              onChange={handleEmail}
            /> 
            <TextField
              margin="normal"
              required
              fullWidth
              name="pswd"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePassword}
            />
               <TextField
              margin="normal"
              required
              fullWidth
              name="pswd1"
              label="Confirm Password"
              type="password"
              id="password1"
           
              onChange={handlePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"

              sx={{ mt: 3, mb: 2 }}
              
            > 
              Sign Up
            </Button>
            <div>{msg}</div>
         
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signin" variant="body2">
                  {"Already have an account?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
       
      </Container>
    </ThemeProvider>
  );
}