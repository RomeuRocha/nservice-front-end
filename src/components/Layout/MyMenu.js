import * as React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { MenuItemLink, getResources } from 'react-admin';
import DefaultIcon from '@material-ui/icons/ViewList';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';

import ListAltIcon from '@material-ui/icons/ListAlt';
import StorageIcon from '@material-ui/icons/Storage';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import ListIcon from '@material-ui/icons/List';
import WorkIcon from '@material-ui/icons/Work';
import SubjectIcon from '@material-ui/icons/Subject';
import NoSimIcon from '@material-ui/icons/NoSim';
import EventNoteIcon from '@material-ui/icons/EventNote';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PostAddIcon from '@material-ui/icons/PostAdd';

import Agenda from '../Scheduler/Agenda'

import MenuItem from '@material-ui/core/MenuItem';
import Scheduler from '../Scheduler/Scheduler'

const useStyles = makeStyles((theme) => ({
    button: {
        border: "none",
        marginLeft: 5,
        backgroundColor: "red",
        paddingLeft: 10,
    },
    listInterna: {
        backgroundColor: "transparent",
        marginLeft: 20,
    },

}));

const Menu = ({ onMenuClick, logout }) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));

    const resources = useSelector(getResources);

    const [open, setOpen] = React.useState(true);
    const [open1, setOpen1] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);
    const [open3, setOpen3] = React.useState(true);

    const classes = useStyles();


    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick1 = () => {
        setOpen1(!open1);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    const handleClick3 = () => {
        setOpen3(!open3);
    };

    return (
        <div>
            {/*  {resources.map(resource => (
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
            ))} */}

            <List component="nav" >

                <ListItem button onClick={handleClick1} >
                    <PostAddIcon />
                    <MenuItem>Adesao</MenuItem>
                    {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding className={classes.listInterna}>
                        <MenuItemLink to="/adesao/create" primaryText="Nova Adesão" leftIcon={<ControlPointIcon />} />
                        <MenuItemLink to="/adesao" primaryText="Lista de Adesões" leftIcon={<ListIcon />} />
                        <MenuItemLink to="/plano" primaryText="Planos" leftIcon={<EventNoteIcon />} />
                        <MenuItemLink to="/cancelamento" primaryText="Cancelamentos" leftIcon={<NoSimIcon />} />
                    </List>
                </Collapse>

                <ListItem button onClick={handleClick} >
                    <AssignmentIcon />
                    <MenuItem>Ordem de Serviços</MenuItem>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding className={classes.listInterna}>
                        <MenuItemLink to="/ordemservico/create" primaryText="Nova" leftIcon={<ControlPointIcon />} />
                        <MenuItemLink to="/ordemservico" primaryText="Lista se OS" leftIcon={<ListIcon />} />
                        <MenuItemLink to="/servico" primaryText="Serviços" leftIcon={<WorkIcon />} />
                        <MenuItemLink to="/assunto" primaryText="Assuntos" leftIcon={<SubjectIcon />} />
                    </List>
                </Collapse>

                <ListItem button onClick={handleClick2} >
                    <GroupIcon/>
                    <MenuItem>Cliente</MenuItem>
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding className={classes.listInterna}>
                        <MenuItemLink to="/cliente/create" primaryText="Novo" leftIcon={<ControlPointIcon />} />
                        <MenuItemLink to="/cliente" primaryText="Lista de Clientes" leftIcon={<ListIcon />} />
                        
                    </List>
                </Collapse>

                <ListItem button onClick={handleClick3} >
                    <GroupIcon/>
                    <MenuItem>Administração</MenuItem>
                    {open3 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding className={classes.listInterna}>
                        <MenuItemLink to={"15"} primaryText="Calender" leftIcon={<AssignmentIndIcon />} />
                        <MenuItemLink to="/" primaryText="Dashboard" leftIcon={<ControlPointIcon />} />
                        
                        
                    </List>
                </Collapse>
                



            </List>

            {isXSmall && logout}
        </div>
    );
};

export default Menu;