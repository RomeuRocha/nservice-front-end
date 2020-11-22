import  React from "react";
import { Create, DateInput, SimpleForm, TextInput } from 'react-admin';

export const CancelamentoCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="motivo" />
            <DateInput label="Data do Cancelamento" source="data" />
            
        </SimpleForm>
    </Create>
);