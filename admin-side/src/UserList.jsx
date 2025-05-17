import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Product_add from './product/product_add';
import { useLocation, useNavigate } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CategoryIcon from '@mui/icons-material/Category';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import UserListTable from './componets/UserList/UserListTable';
import MyDialog from './componets/UserList/MyDialog';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const UserList = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [opneDailog, setOpenDailog] = React.useState(false);
    const [data, setData] = React.useState([])
    const navigate = useNavigate()
    const drawerWidth = 240;

    React.useEffect(() => {
        fetchGetApi()
    }, [])

    const fetchGetApi = async () => {
        const response = await axios.get('http://localhost/projects/api/get-api.php')
        setData(response.data);
    }

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


    const sidbarList = [
        {
            label: 'User List',
            icon: <AccountBoxIcon />,
            active: true,
            link: '/user-list'
        },
        {
            label: 'Product List',
            icon: <CategoryIcon />,
            active: false,
            link: '/product-list'
        },
        {
            label: 'Order List',
            icon: <WarehouseIcon />,
            active: false,
            link: '/order-list'

        },
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
        
    ]

    const drawer = (
        <div>
            <div>
                <h1>Admin side</h1>
            </div>
            <Divider />
            <List>
                {sidbarList?.map((text, index) => (
                    <ListItem key={text.label} disablePadding style={{ backgroundColor: text.active ? '#00000033' : 'transparent' }} onClick={() => navigate(text.link)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {text.icon}
                            </ListItemIcon>
                            <ListItemText primary={text.label} />
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
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            User List
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onTransitionEnd={handleDrawerTransitionEnd}
                        onClose={handleDrawerClose}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        slotProps={{
                            root: {
                                keepMounted: true, // Better open performance on mobile.
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="div"
                >
                    <Toolbar />
                    <div style={{ display: "flex", justifyContent: "end", marginBottom: "15px" }}>
                        <Button variant="contained" startIcon={<AddIcon />} onClick={()=> setOpenDailog(true)}>
                            Add User
                        </Button>

                    </div>
                    <UserListTable dataArray={data} fetchApi={fetchGetApi}/>
                    <MyDialog open={opneDailog} setOpen={setOpenDailog} fetchApi={fetchGetApi}/>

                </Box>
            </Box>


        </>
    );
}

export default UserList;