import  React from "react";
import { List, Datagrid, TextField,EditButton,ShowButton,DeleteButton } from 'react-admin';

import {Filter,TextInput} from 'react-admin';


const PlanoFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Procurar" source="description" alwaysOn />
    </Filter>
);

export const PlanoList = props => (
    <List {...props} filters={<PlanoFilterSeach />} title="Planos">
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="descricao" />
            <TextField source="valorMensal" />
            <TextField source="nome" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);