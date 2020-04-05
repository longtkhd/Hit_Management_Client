import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

export function MainListItems() {


  return (
  
    <MenuList>
    
    <MenuItem component={NavLink} to="/dashboard" 
      activeStyle={{
        
          color:"white",
          borderRadius:"4px",
          boxShadow: "0 0 10px 1px rgba(115, 103, 240, 0.7)" ,
          background: "linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7))"
        
        
      
  }}> 
        <ListItemIcon  >
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />   
    </MenuItem> 
    
        {/* ================= */}      
   
    <MenuItem component={NavLink} to="/user" 
      activeStyle={{
        color: "white",
        borderRadius: "4px",
        boxShadow: "0 0 10px 1px rgba(115, 103, 240, 0.7)",
        background: "linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7))"
      }}> 
    
        
        <ListItemIcon >
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      
      </MenuItem>
   
  



   
    {/* 2 */}
    {/* <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}
    </MenuList>
);
}

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
