import React from 'react';

import {
    Show,
    SimpleShowLayout,
    NumberField,
    TextField,
    DateField,
    ArrayField,
    Datagrid,
    TopToolbar,
    EditButton,
} from 'react-admin';

import MyListButton from '../Util/ListButton';

import Divider from '@material-ui/core/Divider';


const OrdemShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <MyListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data} />

    </TopToolbar>
);

export const OrdemServicoShow = props => (
    <Show {...props} actions={<OrdemShowActions />}>
        <SimpleShowLayout>

            <TextField source="id" />
            <TextField source="cliente.nome" label="Cliente" />
            <TextField source="cliente.cpf" label="CPF" />
            <Divider />
            <TextField source="assunto.description" label="Assunto" />
            <TextField source="situation" label="Situação" />
            <Divider />

            <DateField source="saveMoment" label="Data de inicio" />
            <DateField source="dateSchedule" label="Data de agendamento" />
            <DateField source="attendance" label="Data de atendimento" />

            <Divider />


            
            <ArrayField source="servicos" label="Serviços">
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="description" />
                    <NumberField source="value" />
                </Datagrid>
            </ArrayField>
            <Divider />

            <TextField source="funcionario.nome" label="Funcionário" />

        </SimpleShowLayout>
    </Show>
);