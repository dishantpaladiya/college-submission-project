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
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CategoryIcon from '@mui/icons-material/Category';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OrderListTable from './componets/OrderList/OrderListTable';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const drawerWidth = 240;

const OrderList = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost/projects/order_view.php');
            if (Array.isArray(response.data)) {
                setData(response.data);
            } else {
                console.error("Invalid response format for orders:", response.data);
                setData([]);
            }
        } catch (error) {
            console.error("Error fetching order data:", error);
            setData([]);
        }
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const sidebarList = [
        { label: 'User  List', icon: <AccountBoxIcon />, link: '/user-list' },
        { label: 'Product List', icon: <CategoryIcon />, link: '/product-list' },
        { label: 'Order List', icon: <WarehouseIcon />, link: '/order-list', active: true },
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
                            active:false,
                            link: '/fnq-list' // Ensure the link is consistent with your routing
                        },
    ];

    const drawer = (
        <div>
            <Typography variant="h6" sx={{ p: 2 }}>Admin side</Typography>
            <Divider />
            <List>
                {sidebarList.map((item) => (
                    <ListItem key={item.label} disablePadding onClick={() => navigate(item.link)}>
                        <ListItemButton selected={item.active}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}
            >
                <Toolbar>
                    <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>Order List</Typography>
                </Toolbar>
            </AppBar>
            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                <Drawer variant="temporary" open={mobileOpen} onClose={() => setMobileOpen(false)}
                    sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { width: drawerWidth } }}
                >
                    {drawer}
                </Drawer>
                <Drawer variant="permanent" sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { width: drawerWidth } }}>
                    {drawer}
                </Drawer>
            </Box>
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <OrderListTable dataArray={data} />
            </Box>
        </Box>
    );
};

export default OrderList;