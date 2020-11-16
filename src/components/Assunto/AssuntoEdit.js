import  React from "react";
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const AssuntoEdit = props => (
    <Edit {...props} title="Editar Assunto">
        <SimpleForm>
            <TextInput source="id"  disabled/>
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);