import React, { useState, useEffect } from "react";

import ApiService from '../../service/ApiService'
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';


import { AutocompleteInput, Create, SimpleForm } from "react-admin";


export const OrdemServicoCreate = props => {

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

    const OrdemTitle = ({ record }) => {
        return <span>Nova Ordem de serviço</span>;
    };

    return (
            <Create title={<OrdemTitle />} {...props} >
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