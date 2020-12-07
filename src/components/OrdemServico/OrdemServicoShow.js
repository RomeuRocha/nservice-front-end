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

const OrdemShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <MyListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data} />
        
    </TopToolbar>
);

export const OrdemServicoShow = props => (
    <Show {...props} actions={<OrdemShowActions/>}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="cliente.nome" label="Cliente" />
            <TextField source="assunto.description" label="Assunto"/>
            <TextField source="situation" label="Situação"/>

            
            <DateField source="saveMoment" label="Data de inicio" />
            <DateField source="dateSchedule" label="Data de agendamento"/>
            <DateField source="attendance" label="Data de atendimento"/>
            
            <TextField source="funcionario.nome" label="Funcionário" />
            <ArrayField source="servicos">
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="description" />
                    <NumberField source="value" />
                </Datagrid>
            </ArrayField>

        </SimpleShowLayout>
    </Show>
);