import  React from "react";
import { Create, SimpleForm, TextInput } from 'react-admin';

export const ClienteCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="email" />
            <TextInput source="whatsApp" />
            <TextInput source="cpf" />
        </SimpleForm>
    </Create>
);