import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './App.css';
// import Logo from './logo.png';


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#131313" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              <MenuItem >
                <Typography textAlign="center"><span><a id='link' href='https://github.com/cesardeltoroc'>Github</a></span></Typography>
              </MenuItem>
              <MenuItem >
                <Typography textAlign="center"><span><a id='link' href='https://www.linkedin.com/in/cesardeltoroc/'>LinkedIn</a></span></Typography>
              </MenuItem>
              <MenuItem >
                <Typography textAlign="center" ><span><a id='link' href='https://www.dropbox.com/s/7v3uwkxc70hkvxx/CesarDeltoroResume.pdf?dl=0'>Resume</a></span></Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, color: 'black', display: 'block'}} >
            <span><a id='drop' href='https://www.linkedin.com/in/cesardeltoroc/'>LinkedIn</a></span>
            </Button>
            <Button sx={{ my: 2, color: 'black', display: 'block' }} >
            <span><a id='drop' href='https://github.com/cesardeltoroc'>Github</a></span>
            </Button>
            <Button sx={{ my: 2, color: 'black', display: 'block' }} >
            <span><a id='drop' href='https://www.dropbox.com/s/7v3uwkxc70hkvxx/CesarDeltoroResume.pdf?dl=0'>Resume</a></span>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

