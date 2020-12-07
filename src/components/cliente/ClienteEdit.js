import  React from "react";
import { Edit, SimpleForm, TextInput, ShowButton, ListButton, TopToolbar } from 'react-admin';
import MyListButton from '../Util/ListButton';

export const ClienteEdit = props => {
    
    const ClienteEditActions = ({ basePath, data, resource }) => (
        <TopToolbar>
            <MyListButton basePath={basePath} />
            <ShowButton basePath={basePath} record={data} />
        </TopToolbar>
    )
    return(
    <Edit {...props} actions={<ClienteEditActions/>}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="nome" />
            <TextInput source="email" />
            <TextInput source="whatsApp" />
            <TextInput source="cpf" />
        </SimpleForm>
    </Edit>
    );
    }