// src/components/Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  IconButton,
  CssBaseline,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" sx={{ top: 0, backgroundColor: '#210340' }}>
        <Container sx={{ backgroundColor: '#210340' }}>
          <Toolbar sx={{ backgroundColor: '#210340' }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Safra
            </Typography>
            <Button color="inherit" component={Link} to="/dashboard">
              Dashboard
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

    
      <div className='divider'></div>

      <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <List>
          <ListItem button onClick={() => toggleDrawer(false)}>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          </ListItem>
          {/* Add other list items for navigation */}
          <ListItem button onClick={() => toggleDrawer(false)}>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </ListItem>
          <ListItem button onClick={() => toggleDrawer(false)}>
            <Button color="inherit" component={Link} to="/forgot-password">
              Forgot Password
            </Button>
          </ListItem>
          <ListItem button onClick={() => toggleDrawer(false)}>
            <Button color="inherit" component={Link} to="/explore">
              Explore
            </Button>
          </ListItem>
          <ListItem button onClick={() => toggleDrawer(false)}>
            <Button color="inherit" component={Link} to="/safra-page">
              safra
            </Button>
          </ListItem>
          <ListItem button onClick={() => toggleDrawer(false)}>
            <Button color="inherit" component={Link} to="/logout">
              Logout
            </Button>
          </ListItem>
          <ListItem button onClick={() => toggleDrawer(false)}>
            <Button color="inherit" component={Link} to="/feed">
              Feed
            </Button>
          </ListItem>
        </List>
      </Drawer>

    </>
  );
};

export default Navigation;
