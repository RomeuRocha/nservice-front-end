import  React from "react";
import { ShowButton,List, Datagrid, TextField,EditButton,NumberField,DateField,ArrayField,SingleFieldList,ChipField } from 'react-admin';

import {Filter,TextInput} from 'react-admin';

const OrdemServicoFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Procurar" source="description" alwaysOn />
    </Filter>
);


export const OrdemservicoList = props => (
    <List {...props} filters={<OrdemServicoFilterSeach />} title="Ordem de Serviço">
        <Datagrid rowClick="show">
            <TextField source="id" />
            <NumberField source="cliente.nome"/>
            <NumberField source="funcionario.nome" />
            <NumberField source="assunto.description"  />
            <DateField source="saveMoment" />
            <DateField source="dateSchedule" />
            <DateField source="attendance" />
            <TextField source="situation" />
            <ArrayField source="servicos"><SingleFieldList><ChipField source="description" /></SingleFieldList></ArrayField>
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);