

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CategoryIcon from '@mui/icons-material/Category';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import FnqListTable from './componets/FnqList/FnqListTable';
import MyDialog from './componets/FnqList/MyDialog';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const FnqList = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();
    const drawerWidth = 240;

    React.useEffect(() => {
        fetchGetApi();
    }, []);

    const fetchGetApi = async () => {
        try {
            const response = await axios.get('http://localhost/projects/fnq_view.php');
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const sidebarList = [
        { label: 'User List', icon: <AccountBoxIcon />, active: false, link: '/user-list' },
        { label: 'Product List', icon: <CategoryIcon />, active: false, link: '/product-list' },
        { label: "Order List", icon: <WarehouseIcon />, link: "/order-list" },
        {
            label: 'Banner List',
            icon: <ViewCarouselIcon/>,
            active: false,
            link: '/banner-list'

        },
        {
                    label: 'Services List',
                    icon: <VideoSettingsIcon/>,
                    active: false,
                    link: '/services-list'
        
                },
                 {
                            label: 'FnqList List',
                            icon: <HelpOutlineIcon/>,
                            active:true,
                            link: '/fnq-list' // Ensure the link is consistent with your routing
                        },
    ];

    const drawer = (
        <div>
<h1 >Admin side</h1>
            <Divider />
            <List>
                {sidebarList.map((item) => (
                    <ListItem key={item.label} disablePadding onClick={() => navigate(item.link)}>
                        <ListItemButton style={{ backgroundColor: item.active ? '#00000033' : 'transparent' }}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            FAQ List
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onTransitionEnd={handleDrawerTransitionEnd}
                        onClose={handleDrawerClose}
                        sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { width: drawerWidth } }}
                        ModalProps={{ keepMounted: true }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { width: drawerWidth } }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <div style={{ display: "flex", justifyContent: "end", marginBottom: "15px" }}>
                        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setOpenDialog(true)}>
                            Add FAQ
                        </Button>
                    </div>
                    <FnqListTable 
                        dataArray={data} 
                        fetchApi={fetchGetApi} 
                    />
                    <MyDialog open={openDialog} setOpen={setOpenDialog} fetchApi={fetchGetApi} />
                </Box>
            </Box>
        </>
    );
}

export default FnqList;
