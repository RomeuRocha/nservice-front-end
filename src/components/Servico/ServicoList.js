import  React from "react";
import { List, Datagrid, TextField,NumberField,EditButton,ShowButton } from 'react-admin';

import {Filter,TextInput} from 'react-admin';


const ServicoFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Procurar" source="description" alwaysOn />
    </Filter>
);

export const ServicoList = props => (
    <List {...props} title="Serviços" filters={<ServicoFilterSeach />} >
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="description" />
            <NumberField source="value" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);