import { DocumentScanner, Visibility } from '@mui/icons-material';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ColorizeIcon from '@mui/icons-material/Colorize';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SpeedIcon from '@mui/icons-material/Speed';
import Star from '@mui/icons-material/Star';
import { Box } from "@mui/material";
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
        destination: 'Opening'
    },
    {
        name: 'Bối cảnh',
        icon: (<QuestionMarkIcon />),
        destination: 'Context'
    },
    {
        name: 'Khó khăn',
        icon: (<SpeedIcon />),
        destination: 'Difficulties'
    },
    {
        name: 'Chiến lược',
        icon: (<LightbulbIcon />),
        destination: 'Strategy'
    },
    {
        name: 'Hậu cần',
        icon: (<AirportShuttleIcon />),
        destination: 'Logistics'
    },
    {
        name: 'Diễn biến',
        icon: (<ColorizeIcon />),
        destination: 'Advancement'
    },
    {
        name: 'Kết quả',
        icon: (<Visibility />),
        destination: 'Result'
    },
    {
        name: 'Anh hùng',
        icon: (<HealthAndSafetyIcon />),
        destination: 'Heroes'
    },
    {
        name: 'Tư liệu',
        icon: (<DocumentScanner />),
        destination: 'Documentaries'
    }
]
const goToSection = (destination: string) => {
    document.getElementById(destination)?.scrollIntoView({ behavior: 'smooth' });
}
export const DrawerList = (
    <Box sx={{
        width: 250, backgroundColor: DARKER_BLACK, height: '100%', overflow: 'auto',
        msOverflowStyle: 'none', scrollbarWidth: 'none'
    }} role="presentation" >
        <div id='drawer-title'>
            Mục lục
        </div>

        <List>
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

