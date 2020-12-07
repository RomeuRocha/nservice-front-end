import React from "react";
import { Edit, SimpleForm, TextInput } from 'react-admin';
import Actions from '../Util/MyActions'

export const PlanoEdit = props => {
   

    return (
        <Edit {...props} >
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="nome" />
                <TextInput source="descricao" />
                <TextInput source="valorMensal" />
            </SimpleForm>
        </Edit>
    );
}