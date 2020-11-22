import  React from "react";
import { List, Datagrid, TextField,EditButton,EmailField,ShowButton, DateField, DeleteButton } from 'react-admin';

import {Filter,TextInput} from 'react-admin';

const CancelamentoFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Procurar" source="description" alwaysOn />
    </Filter>
);

export const CancelamentoList = props => (
    <List {...props} filters={<CancelamentoFilterSeach/>}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="motivo" />
            <DateField label="Data do Cancelamento" source="data"/>
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);