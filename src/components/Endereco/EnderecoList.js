import React from "react";
import { ShowButton, List, Datagrid, TextField, EditButton, NumberField, DateField, SelectInput, DateInput, DateTimeInput } from 'react-admin';

import { Filter, TextInput } from 'react-admin';


const EnderecoFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Pesquisar cliente" source="rua" alwaysOn />       
    </Filter>
);


export const EnderecoList = props => (
    <List {...props} filters={<EnderecoFilterSeach />} title="Endereço">
        <Datagrid rowClick="show">
            <TextField source="rua" label="Rua" />
            <TextField source="numero" label="Numero" />
            <TextField source="bairro" label="Bairro" />
            <TextField source="cep" label="Cep" />
        </Datagrid>
    </List>
    );