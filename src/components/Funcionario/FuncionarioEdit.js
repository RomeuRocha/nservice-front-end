import  React from "react";
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const FuncionarioEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="nome" />
            <TextInput source="email" />
            <TextInput source="whatsApp" />
            <TextInput source="cargo" />
            <TextInput source="departamento" />
            <TextInput source="login" />
            <TextInput source="senha" />
        </SimpleForm>
    </Edit>
);