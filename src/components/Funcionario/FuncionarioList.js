import  React from "react";
import { List, Datagrid, TextField} from 'react-admin';
import EditButton from '../Util/EditButton'
import EmailField from '../Util/EmailField'
import ShowButton from '../Util/ShowButton'
import ListActions from '../Util/MyActions'
import {Filter,TextInput} from 'react-admin';

const FuncionarioFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Procurar" source="description" alwaysOn />
    </Filter>
);

export const FuncionarioList = props => (
    <List {...props} actions={<ListActions/>} filters={<FuncionarioFilterSeach />}>
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