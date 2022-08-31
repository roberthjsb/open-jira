import NextLink from 'next/link'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar, IconButton, Toolbar, Typography, Link } from '@mui/material'
import { UIContext } from '../../context/ui/UIContext';
import { useContext } from 'react';

export const Navbar = () => {
  const { openSidemenu } = useContext(UIContext)
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton size='large' edge='start' onClick={() => openSidemenu()}>
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href="/" passHref>
          <Link underline='none' color='white'>
            <Typography variant="h6" >OpenJira</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}
