import React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    DateInput,
    ArrayInput,
    SimpleFormIterator,
    ReferenceInput,
    SelectInput,
    TabbedForm,
    FormTab,
    required,
    TopToolbar,
    ShowButton,
    Button,
    DateTimeInput
} from 'react-admin';

import CheckBoxIcon from '@material-ui/icons/CheckBox';
import EventIcon from '@material-ui/icons/Event';

import Agendar from './Agendar'

<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/styles';
=======
import Finalizar from './Finalizar'
>>>>>>> 9ff6d500c8ad65c5bde20097c0b71a35a701b1f2

const useStyles = makeStyles({
    button: {
        
        fontWeight: 'bold',
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        '& svg': { color: 'yellow' },
        '&:hover': {
            color: '#33c4ff'
        },
        color : '#3dc915',
    },
});


export const OrdemServicoEdit = props => {
    

    const [openAgenda, setOpenAgenda] = React.useState(false);
    
    const [openFinalizar, setOpenFinlizar] = React.useState(false);

    
    const handleClickOpenFinalizar = () => {
        setOpenFinlizar(true);
    };
    const handleCloseFinalizar = () => {
        setOpenFinlizar(false);
    };


    const handleClickOpen = () => {
        setOpenAgenda(true);
    };
    const handleClose = () => {
        setOpenAgenda(false);
    };

    const OrdemEditActions = ({ basePath, data, resource }) => (
        <TopToolbar>
            <ShowButton basePath={basePath} record={data} />
<<<<<<< HEAD
            <Button label="Finalizar" >
                <CheckBoxIcon />
            </Button>
            <Button label="Agendar" onClick={handleClickOpen} >
=======
            <Button label="Agendar" onClick={handleClickOpen}>
>>>>>>> 9ff6d500c8ad65c5bde20097c0b71a35a701b1f2
                <EventIcon />
            </Button>
            <Button label="Finalizar" onClick={handleClickOpenFinalizar}>
                <CheckBoxIcon />

            </Button>
        </TopToolbar>
    );

    return(
        <Edit actions={<OrdemEditActions />} {...props}>
            <SimpleForm>
                <TextInput source="id" disabled />
                <ReferenceInput label="Cliente" source="cliente.id" reference="cliente" validate={[required()]}>
                    <SelectInput optionText="nome" />
                </ReferenceInput>
    
                <ReferenceInput label="Assunto" source="assunto.id" reference="assunto" validate={[required()]}>
                    <SelectInput optionText="description" />
                </ReferenceInput>
                
                <Agendar info={props} handleclose={handleClose} open={openAgenda} />
                <Finalizar info={props} handleclose={handleCloseFinalizar} open={openFinalizar}/>
            </SimpleForm>
        </Edit>
    );
}

