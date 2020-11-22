import React from "react";
import { ShowButton, List, Datagrid, TextField, EditButton, NumberField, DateField, SelectInput, DateInput, DateTimeInput } from 'react-admin';

import { Filter, TextInput } from 'react-admin';


const AdesaoFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Pesquisar Adesao" source="cliente" alwaysOn />        
    </Filter>
);


export const AdesaoList = props => (
    <List {...props} filters={<AdesaoFilterSeach />} title="Ordem de Serviço">
        <Datagrid rowClick="show">
            <TextField source="id" />
            <NumberField source="cliente.nome" label="Nome"/>
            <NumberField source="plano.nome" label="Plano"/>
            <NumberField source="valor" />
            <DateField source="data" />
             <EditButton/>      
        </Datagrid>
    </List>

);