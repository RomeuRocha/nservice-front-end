import  React from "react";
import { List, Datagrid, TextField,DeleteButton } from 'react-admin';
import EditButton from '../Util/EditButton'
import ShowButton from '../Util/ShowButton'
import ListActions from '../Util/MyActions'

import {Filter,TextInput} from 'react-admin';


const AssuntoFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Procurar" source="description" alwaysOn />
    </Filter>
);

export const AssuntoList = props => (
    <List {...props} actions={<ListActions/>} filters={<AssuntoFilterSeach />} title="Assuntos">
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="description" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);