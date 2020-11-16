import  React from "react";
import { List, Datagrid, TextField,EditButton,EmailField } from 'react-admin';

import {Filter,TextInput,ShowButton} from 'react-admin';

const FuncionarioFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Procurar" source="description" alwaysOn />
    </Filter>
);

export const FuncionarioList = props => (
    <List {...props} filters={<FuncionarioFilterSeach />}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="nome" />
            <EmailField source="email" />
            <TextField source="whatsApp" />
            <TextField source="cargo" />
            <TextField source="departamento" />
            <TextField source="login" />
            <TextField source="senha" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);