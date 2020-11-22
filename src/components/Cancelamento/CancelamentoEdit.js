import  React from "react";
import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const CancelamentoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="motivo" />
            <DateInput label="Data do Cancelamento" source="data" />
                        
        </SimpleForm>
    </Edit>
);