import  React from "react";
import { List, Datagrid, TextField} from 'react-admin';
import EditButton from '../Util/EditButton'
import ShowButton from '../Util/ShowButton'
import ListActions from '../Util/MyActions'
import {Filter,TextInput,DeleteButton} from 'react-admin';

const FuncionarioFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Procurar" source="textinput" alwaysOn />
    </Filter>
);

export const FuncionarioList = props => (
    <List {...props} actions={<ListActions/>} filters={<FuncionarioFilterSeach />}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="cargo" />
            <TextField source="departamento" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);