import React from "react";
import { Edit, SimpleForm, TextInput, ShowButton, ListButton,TopToolbar } from 'react-admin';
import MyListButton from '../Util/ListButton';

export const AssuntoEdit = props => {
    const AssuntoEditActions = ({ basePath, data, resource }) => (
        <TopToolbar>
            <MyListButton basePath={basePath} />
            <ShowButton basePath={basePath} record={data} />
        </TopToolbar>
    )
    return (

        <Edit {...props} actions={<AssuntoEditActions/>} title="Editar Assunto">
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="description" />
            </SimpleForm>
        </Edit>
    );
}