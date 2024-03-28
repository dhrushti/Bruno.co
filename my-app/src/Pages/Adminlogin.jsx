import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Bruno co.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>)
  }


let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5F8670', // Violet color
    },
    secondary: {
      main: '#5F8670', // Violet color
    },
  },
  typography: {
    fontSize: 20,
  },
});

// Enable responsive font sizes for the dark theme
darkTheme = responsiveFontSizes(darkTheme);

export default function Adminlogin() {
  
  const [username, setUsername] = useState("");
  const [password, setPwd] = useState("");
  const [signinMessage, setSigninMessage] = useState("");

  const history = useNavigate();

  const setUsernameHandler = (e) => {
      setUsername(e.target.value);
  }

  const setPwdHandler = (e) => {
      setPwd(e.target.value);
  }

  async function addSignInData(e) {
    e.preventDefault();

    // Retrieve form data
    const formData = new FormData();
    formData.append("username", username); 
    formData.append("password", password);
 


    const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };

    try {
        // Make POST request
        const res = await axios.post("/admin123",formData, config);
        if (res.status === 200) {
            console.log("Form submitted successfully!");
            
            // Redirect user if needed
            setSigninMessage(res.data.message);
            setTimeout(() => {
              if(signinMessage==="admin login successful")
                history("/")
              else
                history('/adminpage')
            }, 2000);
        } else {
            console.log("Error:", res.data);
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container component="main" sx={{ height: '100vh' ,display:'contents'}}>
        <CssBaseline />
       
        
          <Box
            sx={{
              my: 20,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Admin Login
            </Typography>
            <Box component="form" noValidate onSubmit={addSignInData} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
              
                autoFocus
                onChange={setUsernameHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={setPwdHandler}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <div style={{ color: 'red' }}>{signinMessage}</div>
             
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      
    </ThemeProvider>
  );
}
