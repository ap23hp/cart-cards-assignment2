import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const pages = ['Home', 'About', 'Shop'];
const settings = ['All Products', 'Popular Items', 'New Arrivals'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
    <AppBar position="static" style={{backgroundColor:"white",color:"black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            START BOOSTRAP
          </Typography>

          <Box sx={{ flexGrow: 1,display: { xs: 'flex', md: 'none' } }}>
          
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
             color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
           
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }, 
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 ,border:1}}>
            <Tooltip title="Open settings">
          <IconButton
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            onClick={handleOpenUserMenu}
          >
            Shop
          </IconButton >

          </Tooltip>
          <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            > 
               {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 ,border:1}}>
           
              <IconButton  sx={{ p: 0 }}>
             < ShoppingCartIcon />
             Cart {0}
              </IconButton>
        
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            > 
               {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    

    </AppBar>
    <Typography mt={0} style={{backgroundColor:"black",lineHeight:1.5,color:"white", textAlign:"center",top:100,height:290}}>
      <h1 style={{marginTop:0,paddingTop:90,marginBottom:0}}>
      Shop in Style </h1>
      <h4  style={{marginTop:0}}>with this shop homepage template </h4>
      </Typography>
     
      <Grid container spacing={1}>

        <Grid item xs={3}>
      <Card sx={{ width: 235 ,mt:5,ml:6}}>
      <CardMedia
        component="img"
        height="140"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."

      />
      <CardContent sx={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
        Fancy Product
        </Typography>
        <Typography variant="body2" color="black">
        $40.00 - $80.00
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
       
        <Button sx={{color:"black", border:1 }} size="small">View Options</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item  xs={3}>
    <Card  sx={{ width: 235 ,mt:5,ml:6}}>
      <CardMedia
        component="img"
        height="140"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."

      />
      <CardContent sx={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
        Fancy Product
        </Typography>
        <Typography variant="body2" color="black">
        $40.00 - $80.00
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
       
        <Button sx={{color:"black", border:1 }} size="small">View Options</Button>
      </CardActions>
    </Card>
</Grid>
    <Grid item  xs={3}>
    <Card sx={{ width: 235 ,mt:5,ml:6}}>
      <CardMedia
        component="img"
        height="140"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."

      />
      <CardContent sx={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
        Fancy Product
        </Typography>
        <Typography variant="body2" color="black">
        $40.00 - $80.00
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
       
        <Button sx={{color:"black", border:1 }} size="small">View Options</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item  xs={3}>
    <Card sx={{ width: 235 ,mt:5,ml:6}}>
      <CardMedia
        component="img"
        height="140"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."

      />
      <CardContent sx={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
        Fancy Product
        </Typography>
        <Typography variant="body2" color="black">
        $40.00 - $80.00
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
       
        <Button sx={{color:"black", border:1 }} size="small">View Options</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item  xs={3}>
    <Card sx={{ width: 235 ,mt:5,ml:6}}>
      <CardMedia
        component="img"
        height="140"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."

      />
      <CardContent sx={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
        Fancy Product
        </Typography>
        <Typography variant="body2" color="black">
        $40.00 - $80.00
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
       
        <Button sx={{color:"black", border:1 }} size="small">View Options</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item  xs={3}>
    <Card sx={{ width: 235 ,mt:5,ml:6}}>
      <CardMedia
        component="img"
        height="140"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."

      />
      <CardContent sx={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
        Fancy Product
        </Typography>
        <Typography variant="body2" color="black">
        $40.00 - $80.00
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
       
        <Button sx={{color:"black", border:1 }} size="small">View Options</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item  xs={3}>
    <Card sx={{ width: 235 ,mt:5,ml:6}}>
      <CardMedia
        component="img"
        height="140"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."

      />
      <CardContent sx={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
        Fancy Product
        </Typography>
        <Typography variant="body2" color="black">
        $40.00 - $80.00
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
       
        <Button sx={{color:"black", border:1 }} size="small">View Options</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item  xs={3}>
    <Card sx={{ width: 235 ,mt:5,ml:6}}>
      <CardMedia
        component="img"
        height="140"
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."

      />
      <CardContent sx={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
        Fancy Product
        </Typography>
        <Typography variant="body2" color="black">
        $40.00 - $80.00
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
       
        <Button sx={{color:"black", border:1 }} size="small">View Options</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    <Typography sx={{backgroundColor:"black", textAlign:"center", color:"white",height:20,padding:5,mt:10}}>
    Copyright © Your Website 2021
      </Typography>
</div>
    
  );

 
};



export default ResponsiveAppBar;
