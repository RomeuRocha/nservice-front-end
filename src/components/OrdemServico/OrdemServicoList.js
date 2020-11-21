import React from "react";
import { ShowButton, List, Datagrid, TextField, EditButton, NumberField, DateField, SelectInput, DateInput, DateTimeInput } from 'react-admin';

import { Filter, TextInput } from 'react-admin';


const OrdemServicoFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Pesquisar cliente" source="cliente" alwaysOn />
        <TextInput label="Pesquisar Assunto" source="assunto" />
        <SelectInput source="situacao" label="Pesquisar Situação" choices={[
            { id: '1', name: 'Agendado' },
            { id: '2', name: 'Concluído' },
            { id: '3', name: 'Cancelado' },
        ]} />
        
        <DateInput source="dataInicial" label="Pesquisar Data Inicial"/>
        <DateInput source="dataFinal" label="Pesquisar Data Final"/>
       
    </Filter>
);


export const OrdemservicoList = props => (
    <List {...props} filters={<OrdemServicoFilterSeach />} title="Ordem de Serviço">
        <Datagrid rowClick="show">
            <TextField source="id" label="id" />
            <NumberField source="cliente.nome" label="Cliente" />
            <NumberField source="assunto.description" label="Assunto" />
            <DateField source="saveMoment" label="Data de inicio" />
            <DateField source="attendance" label="Data de atendimento" />
            <TextField source="situation" label="Situação" />

            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);