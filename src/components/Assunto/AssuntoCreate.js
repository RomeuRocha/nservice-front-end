import React from "react";
import { Create, SimpleForm, TextInput } from 'react-admin';

export const AssuntoCreate = props => (
    <Create {...props} title="Cadastrar Assunto">
        <SimpleForm>
            
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);