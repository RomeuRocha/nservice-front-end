import  React from "react";
import { Create, SimpleForm, TextInput } from 'react-admin';

export const PlanoCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="descricao" />
            <TextInput source="valorMensal" />
        </SimpleForm>
    </Create>
);