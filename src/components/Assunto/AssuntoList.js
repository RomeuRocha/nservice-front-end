import  React from "react";
import { List, Datagrid, TextField,EditButton,ShowButton } from 'react-admin';

import {Filter,TextInput} from 'react-admin';


const AssuntoFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Procurar" source="description" alwaysOn />
    </Filter>
);

export const AssuntoList = props => (
    <List {...props} filters={<AssuntoFilterSeach />} title="Assuntos">
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="description" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);