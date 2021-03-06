import  React from "react";
import { List, Datagrid, TextField,DeleteButton } from 'react-admin';
import EditButton from '../Util/EditButton'
import ShowButton from '../Util/ShowButton'
import ListActions from '../Util/MyActions'
import {Filter,TextInput} from 'react-admin';


const PlanoFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Procurar" source="textinput" alwaysOn />
    </Filter>
);

export const PlanoList = props => (
    <List {...props} actions={<ListActions/>} filters={<PlanoFilterSeach />} title="Planos">
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="descricao" />
            <TextField source="valorMensal" />
            
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);