
import React, { useEffect, useState } from "react";
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CategoryIcon from "@mui/icons-material/Category";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ServicesListTable from "./componets/ServicesList/ServicesListTable";
import MyDialog from "./componets/ServicesList/MyDialog";
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const drawerWidth = 240;

const ServicesList = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get("http://localhost/projects/services_view.php");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching services:", error);
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
        { label: "User List", icon: <AccountBoxIcon />, link: "/user-list" },
        { label: "Product List", icon: <CategoryIcon />, link: "/product-list" },
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
                    active: true,
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
            <h1 >Admin side</h1>
            <Divider />
            <List>
                {sidebarList.map((item) => (
                    <ListItem key={item.label} disablePadding style={{ backgroundColor: item.active ? "#00000033" : "transparent" }} onClick={() => navigate(item.link)}>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Services List
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    sx={{ display: { xs: "block", sm: "none" }, '& .MuiDrawer-paper': { boxSizing: "border-box", width: drawerWidth } }}
                    slotProps={{ root: { keepMounted: true } }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{ display: { xs: "none", sm: "block" }, '& .MuiDrawer-paper': { boxSizing: "border-box", width: drawerWidth } }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <div style={{ display: "flex", justifyContent: "end", marginBottom: "15px" }}>
                    <Button variant="contained" startIcon={<AddIcon />} onClick={() => setOpenDialog(true)}>
                        Add Service
                    </Button>
                </div>
                <ServicesListTable dataArray={data} fetchApi={fetchServices} />
                <MyDialog open={openDialog} setOpen={setOpenDialog} fetchApi={fetchServices} />
            </Box>
        </Box>
    );
};

export default ServicesList;