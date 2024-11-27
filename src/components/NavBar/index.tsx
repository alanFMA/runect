import * as React from 'react';
import { useMediaQuery } from '@mui/material';
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
import { Link } from 'react-router-dom';
import Logo from './styles';
import logoRunect from '../../assets/logo-runect.svg';

const pages = ['HOME', 'INFO', 'POLÍTICAS'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isSmallScreen = useMediaQuery('(max-width:991px)');

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: 'rgba(244, 221, 25, 0.5)', boxShadow: 'none' }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
            }}
          >
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
                vertical: 'top',
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
              {pages.map(page => (
                <MenuItem
                  key={page}
                  component={Link}
                  to={
                    page === 'POLÍTICAS'
                      ? 'politicas-de-privacidade'
                      : `/${page.toLocaleLowerCase()}`
                  }
                  target={page === 'POLÍTICAS' ? '_blank' : ''}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Logo src={logoRunect}></Logo>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Sora',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              ml: '30px',
            }}
          ></Typography>
          <Box
            sx={{
              justifyContent: 'space-between',
              display: {
                width: '600px',
                xs: 'none',
                md: 'flex',
              },
            }}
          >
            {pages.map(page => (
              <Button
                key={page}
                component={Link}
                to={
                  page === 'POLÍTICAS'
                    ? 'politicas-de-privacidade'
                    : `/${page.toLocaleLowerCase()}`
                }
                target={
                  page === 'POLÍTICAS' || page === 'INFO' ? '_blank' : '_self'
                }
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  paddingTop: '3px',
                  height: '27px',
                  minWidth: '125px',
                  textAlign: 'center',
                  display: 'block',
                  borderRadius: '8px',
                  background: '#0F3C19',
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    background: '#0F3C19',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
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
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
