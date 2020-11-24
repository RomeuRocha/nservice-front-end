import * as React from 'react';
import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { MenuItemLink, getResources } from 'react-admin';
import DefaultIcon from '@material-ui/icons/ViewList';
import LabelIcon from '@material-ui/icons/Label';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ListAltIcon from '@material-ui/icons/ListAlt';

const useStyles = makeStyles((theme) => ({
    button: {
        border: "none",
        marginLeft: 5,
        backgroundColor: "red",
        
    },
   
}));

const Menu = ({ onMenuClick, logout }) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));

    const resources = useSelector(getResources);

    const [open, setOpen] = React.useState(true);

    const classes = useStyles();


    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            {resources.map(resource => (
                <MenuItemLink
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={
                        (resource.options && resource.options.label) ||
                        resource.name
                    }
                    leftIcon={
                        resource.icon ? <resource.icon /> : <DefaultIcon />
                    }
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                />
            ))}

            <List component="nav" >
                <ListItem button onClick={handleClick} className={classes.button}>
                    <ListAltIcon/>
                    <Button>Adesao</Button>    
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <MenuItemLink to="/adesao" primaryText="API-ENDPOINT-1" />
                        <MenuItemLink to="/your-api-endpoint-2" primaryText="API-ENDPOINT-2" />
                        <MenuItemLink to="/your-api-endpoint-3" primaryText="API-ENDPOINT-3" />
                    </List>
                </Collapse>
            </List>

            {isXSmall && logout}
        </div>
    );
};

export default Menu;