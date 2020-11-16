import  React from "react";
import { List, Datagrid, TextField,EditButton,EmailField,ShowButton } from 'react-admin';

import {Filter,TextInput} from 'react-admin';

const ClienteFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Procurar" source="description" alwaysOn />
    </Filter>
);

export const ClienteList = props => (
    <List {...props} filters={<ClienteFilterSeach />}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="nome" />
            <EmailField source="email" />
            <TextField source="whatsApp" />
            <TextField source="cpf" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);