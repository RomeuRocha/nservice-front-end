import  React from "react";
import { Edit, SimpleForm, TextInput,NumberInput,DateInput,ArrayInput,SimpleFormIterator } from 'react-admin';

export const OrdemServicoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <NumberInput source="cliente.id" />
            <NumberInput source="funcionario.id" />
            <NumberInput source="assunto.id" />
            <DateInput source="saveMoment" />
            <DateInput source="dateSchedule" />
            <DateInput source="attendance" />
            <TextInput source="situation" />
            <ArrayInput source="servicos">
                <SimpleFormIterator>
                    <TextInput source="id" />
                    <TextInput source="description" />
                     <NumberInput source="value" />
                </SimpleFormIterator></ArrayInput>
        </SimpleForm>
    </Edit>
);