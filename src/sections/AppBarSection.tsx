import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Container, Drawer, IconButton, Toolbar, Typography } from "@mui/material";

import { useState } from 'react';
import { DrawerList } from '../components/drawer';
import { DARK_BLACK } from '../constants/colors';

export default function AppBarSection() {
    const [open, setOpen] = useState(false)

    const toggleDrawer = (value: boolean) => {
        setOpen(value)
    }
    return (
        <AppBar position="sticky" sx={{ bgcolor: DARK_BLACK, zIndex: '2' }}>
            <Container maxWidth="xl">
                <Drawer open={open} onClose={() => toggleDrawer(false)} >
                    {DrawerList}
                </Drawer>
                <Toolbar disableGutters>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Vintage',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        VNR202 - Chiến dịch Điện Biên Phủ
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

