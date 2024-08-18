import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ColorizeIcon from '@mui/icons-material/Colorize';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Star from '@mui/icons-material/Star';
import { Box } from "@mui/material";

import { DocumentScanner, Visibility } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ReactNode } from 'react';
import { DARKER_BLACK } from '../constants/colors';
import '../styles/drawer.css';
type DrawerItem = {
    name: string,
    icon: ReactNode,
    destination: string,
}

const DrawerItems: DrawerItem[] = [
    {
        name: 'Giới thiệu',
        icon: (<Star />),
        destination: 'section1'
    },
    {
        name: 'Chiến lược',
        icon: (<LightbulbIcon />),
        destination: 'section2'
    },
    {
        name: 'Hậu cần',
        icon: (<AirportShuttleIcon />),
        destination: 'section3'
    },
    {
        name: 'Tiến công',
        icon: (<ColorizeIcon />),
        destination: 'section4'
    },
    {
        name: 'Tầm vóc',
        icon: (<Visibility />),
        destination: 'section5'
    },
    {
        name: 'Tư liệu',
        icon: (<DocumentScanner />),
        destination: 'section6'
    }
]
const goToSection = (destination: string) => {
    (document as any).getElementById(destination).scrollIntoView({ behavior: 'smooth' });
}
export const DrawerList = (
    <Box sx={{ width: 250, backgroundColor: DARKER_BLACK, height: '100%' }} role="presentation" >
        <div id='drawer-title'>
            Mục lục
        </div>

        <List >
            {DrawerItems.map((item, index) => (
                <ListItem key={index} disablePadding onClick={() => goToSection(item.destination)}
                    sx={{ marginTop: '0.5rem' }}>
                    <ListItemButton>
                        <ListItemIcon sx={{ color: 'white' }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText sx={{ color: 'white', fontFamily: 'UTMSwiss' }} primary={item.name} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
);

