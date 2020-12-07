import  React from "react";
import { List, Datagrid, TextField,NumberField} from 'react-admin';
import EditButton from '../Util/EditButton'
import ShowButton from '../Util/ShowButton'
import ListActions from '../Util/MyActions'
import {Filter,TextInput,DeleteButton} from 'react-admin';


const ServicoFilterSeach = (props) => (
    <Filter {...props}>
        <TextInput label="Procurar" source="textinput" alwaysOn />
    </Filter>
);

export const ServicoList = props => (
    <List {...props} actions={<ListActions/>} title="Serviços" filters={<ServicoFilterSeach />} >
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="description" />
            <NumberField source="value" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);