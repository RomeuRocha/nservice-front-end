import React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    DateInput,
    ArrayInput,
    SimpleFormIterator,
    ReferenceInput,
    SelectInput,
    TabbedForm,
    FormTab,
    required 
} from 'react-admin';

export const OrdemServicoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput label="Cliente" source="cliente.id" reference="cliente" validate={[required()]}>
                <SelectInput optionText="nome" />
            </ReferenceInput>

            <ReferenceInput label="Assunto" source="assunto.id" reference="assunto" validate={[required()]}>
                <SelectInput optionText="description" />
            </ReferenceInput>

            <ReferenceInput label="Funcionario responsável" source="funcionario.id" reference="funcionario" validate={[required()]}>
                <SelectInput optionText="nome" />
            </ReferenceInput>
           
            
            <DateInput source="saveMoment" />
            <DateInput source="dateSchedule" />
            <DateInput source="attendance" label="Data de atendimento"/>
            <TextInput source="situation" />
            <ArrayInput source="servicos"><SimpleFormIterator><TextInput source="id" />
            <TextInput source="description" />
            <NumberInput source="value" /></SimpleFormIterator></ArrayInput>
        </SimpleForm>
    </Edit>
);