import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from '../Header';
import Link from '@mui/material/Link';


export default function AdminPage() {
  return (
    <div style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
    }}>
        <Header />
        <Card sx={{ maxWidth: 345 }}  >
        <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            User Details
            </Typography>
            <Typography variant="body2" color="text.secondary">
            name, email
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small"><Link href="/userdetails">

                Take Me There
            </Link>
                </Button>
            
        </CardActions>
        </Card>



        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Add Product
            </Typography>
            <Typography variant="body2" color="text.secondary">
            key, descr
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">
                <Link href="/addproductcard">
                Take Me There
                </Link>
            </Button>
            
        </CardActions>
        </Card>


      
    </div>
  );
}