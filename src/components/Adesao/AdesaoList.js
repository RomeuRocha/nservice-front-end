import React from "react";
import { List, Datagrid, TextField, NumberField, DateField, SelectInput, DateInput, DateTimeInput } from 'react-admin';
import EditButton from '../Util/EditButton'
import ShowButton from '../Util/ShowButton'
import ListActions from '../Util/MyActions'
import { Filter, TextInput } from 'react-admin';


const AdesaoFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Pesquisar Adesao" source="textinput" alwaysOn />        
    </Filter>
);


export const AdesaoList = props => (
    
    <List {...props} actions={<ListActions/>} filters={<AdesaoFilterSeach />} >
        <Datagrid rowClick="show">
            <TextField source="id" />
            <NumberField source="cliente.nome" label="Nome"/>
            <NumberField source="plano.nome" label="Plano"/>
            <NumberField source="valor" />
            <DateField source="data" />
             <EditButton/>
             <ShowButton/>      
        </Datagrid>
    </List>

);