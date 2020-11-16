import  React from "react";
import { Create, SimpleForm, TextInput } from 'react-admin';

export const FuncionarioCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="email" />
            <TextInput source="whatsApp" />
            <TextInput source="cargo" />
            <TextInput source="departamento" />
            <TextInput source="login" />
            <TextInput source="senha" />
        </SimpleForm>
    </Create>
);