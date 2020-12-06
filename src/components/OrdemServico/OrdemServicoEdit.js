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

import { makeStyles } from '@material-ui/core/styles';

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
    
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const OrdemEditActions = ({ basePath, data, resource }) => (
        <TopToolbar>
            <ShowButton basePath={basePath} record={data} />
            <Button label="Finalizar" >
                <CheckBoxIcon />
            </Button>
            <Button label="Agendar" onClick={handleClickOpen} >
                <EventIcon />
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
                
                <Agendar info={props} handleclose={handleClose} open={open} />
            </SimpleForm>
        </Edit>
    );
}

