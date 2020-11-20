import React from "react";
import { ShowButton, List, Datagrid, TextField, EditButton, NumberField, DateField, SelectInput } from 'react-admin';

import { Filter, TextInput } from 'react-admin';

const OrdemServicoFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Pesquisar por cliente" source="cliente" alwaysOn />
        <TextInput label="Pesquisar por Assunto" source="assunto" />
        <SelectInput source="situacao" label="Situação" choices={[
            { id: '1', name: 'Agendado' },
            { id: '2', name: 'Concluído' },
            { id: '3', name: 'Cancelado' },
        ]} />
       
    </Filter>
);


export const OrdemservicoList = props => (
    <List {...props} filters={<OrdemServicoFilterSeach />} title="Ordem de Serviço">
        <Datagrid rowClick="show">
            <TextField source="id" label="id" />
            <NumberField source="cliente.nome" label="Cliente" />
            <NumberField source="assunto.description" label="Assunto" />
            <DateField source="saveMoment" label="Data de inicio" />
            <DateField source="dateSchedule" label="Data de agendamento" />
            <DateField source="attendance" label="Data de atendimento" />
            <TextField source="situation" label="Situação" />

            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);