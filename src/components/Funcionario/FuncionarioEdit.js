import  React from "react";
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const FuncionarioEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="descricao" />
            <TextInput source="valorMensal" />
            <TextInput source="nome" />
        </SimpleForm>
    </Edit>
);