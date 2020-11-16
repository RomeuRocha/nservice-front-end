import  React from "react";
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const ClienteEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="nome" />
            <TextInput source="email" />
            <TextInput source="whatsApp" />
            <TextInput source="cpf" />
        </SimpleForm>
    </Edit>
);