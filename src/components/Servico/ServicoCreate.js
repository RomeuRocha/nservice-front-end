import  React from "react";
import { SimpleForm, TextInput,Create } from 'react-admin';

export const ServicoCreate = props => (
    <Create {...props} title="Cadastrar Serviço">
        <SimpleForm>
            <TextInput source="description" />
            <TextInput source="value" />
        </SimpleForm>
    </Create>
);