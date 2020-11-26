import React, { useState, useEffect } from "react";


import ListClient from '../cliente/ListClient'
import ListAssunto from '../Assunto/ListAssunto'

import ApiService from '../../service/ApiService'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { DataGrid } from '@material-ui/data-grid';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import GroupIcon from '@material-ui/icons/Group';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { AutocompleteInput, Create, SimpleForm } from "react-admin";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export const OrdemServicoCreate = props => {
    const [open, setOpen] = useState(false);
    const [clientSelec, setClientSelect] = useState("");
    const classes = useStyles();

    const [ChoicesClient, setChoicesClient] = useState([]);
    const [ChoicesAssunto, setChoicesAssunto] = useState([]);

    useEffect(() => {
        retrieveChoicesClient();
        retrieveChoicesAssuntot();
    }, []);

    const retrieveChoicesClient = () => {
        ApiService.getAll("cliente")
            .then(response => {
                setChoicesClient(response.data.content);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const retrieveChoicesAssuntot = () => {
        ApiService.getAll("assunto")
            .then(response => {
                setChoicesAssunto(response.data.content);
            })
            .catch(e => {
                console.log(e);
            });
    };


    const selectClient = (event) => {
        setClientSelect(event.data)
        setOpen(false)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const OptionRendererAssunto = choice => {
        return(
            <List>
                 <ListItem key={choice.record.id} role={undefined} dense button >
                 <IconButton edge="end" aria-label="comments">
                     <AssignmentIndIcon />
                </IconButton>
                    <ListItemText id={choice.record.id} primary={`${choice.record.description}`} />
                 </ListItem>
            </List>
        )
    }

    const inputTextAssunto = choice => `${choice.description}`;

    const optionMatchAssunto = (filter, choice) => {
        if(choice.description.match(filter)){
            return true
        }   
    };

    const OptionRendererClient = choice => {
        return(
            <List>
                 <ListItem key={choice.record.id} role={undefined} dense button >
                 <IconButton edge="end" aria-label="comments">
                     <AssignmentIndIcon />
                </IconButton>
                    <ListItemText id={choice.record.id} primary={`${choice.record.nome}`} />
                 </ListItem>
            </List>
        )
    }
    
    const inputTextClient = choice => `${choice.nome}`;

    const optionMatchClient = (filter, choice) => {
        if(choice.nome.match(filter)){
            return true
        }   
    };

    return (
            <Create {...props} >
                <SimpleForm>
                    <AutocompleteInput 
                    source="cliente.id" 
                    choices={ChoicesClient} 
                    optionText={<OptionRendererClient choice={ChoicesClient}/>}
                    inputText={inputTextClient} 
                    matchSuggestion={optionMatchClient} 
                    label="Cliente"/>

                    <AutocompleteInput 
                    source="assunto.id" 
                    choices={ChoicesAssunto} 
                    optionText={<OptionRendererAssunto choice={ChoicesClient}/>}
                    inputText={inputTextAssunto} 
                    matchSuggestion={optionMatchAssunto} 
                    label="Assunto"/>  

                </SimpleForm>
            </Create>
    );
} 