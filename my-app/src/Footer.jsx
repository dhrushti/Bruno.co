import React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Replace these with your own social media URLs
const socialMediaLinks = {
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/i/flow/login',
  instagram: 'https://www.instagram.com/',
};

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#5F8670',
        color: '#FAEED1',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            {/* <Typography variant="h6" color="#FAEED1" gutterBottom>
            Bruno
            </Typography> */}
            <img src="../assets/logo/png/logo-no-background.png" alt='logo' style={{width:'18rem', paddingTop:'2rem'}} />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="#FAEED1" gutterBottom>
              SHOP
            </Typography>
            <Link href="#" color="inherit" display="block">Ladies</Link>
            <Link href="#" color="inherit" display="block">Men</Link>
            <Link href="#" color="inherit" display="block">Baby</Link>
            <Link href="#" color="inherit" display="block">Sport</Link>
            
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="#FAEED1" gutterBottom>
              COMPANY
            </Typography>
            <Link href="#" color="inherit" display="block">About Us</Link>
            <Link href="#" color="inherit" display="block">Careers</Link>
            <Link href="#" color="inherit" display="block">Privacy Policy</Link>
            <Link href="#" color="inherit" display="block">Terms of Service</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="#FAEED1" gutterBottom>
              DEVELOPERS
            </Typography>
            <Link href="#" color="inherit" display="block">Public API</Link>
            <Link href="#" color="inherit" display="block">Documentation</Link>
            <Link href="#" color="inherit" display="block">Guides</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="#FAEED1" gutterBottom>
              SOCIAL MEDIA
            </Typography>
            <IconButton aria-label="Facebook" color="inherit" component="a" href={socialMediaLinks.facebook}>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" color="inherit" component="a" href={socialMediaLinks.twitter}>
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="Instagram" color="inherit" component="a" href={socialMediaLinks.instagram}>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" color="#FAEED1" align="center" sx={{ pt: 4 }}>
          © 2024 Bruno Co. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
