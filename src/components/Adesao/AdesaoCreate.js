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
    NumberField,
    Create
} from 'react-admin';

export const AdesaoCreate = props => (
    <Create {...props}>
        <SimpleForm>
            
            <DateInput source="data" />
            <NumberInput source="valor" />

            <ReferenceInput label="Plano" source="plano.id" reference="plano">
                    <SelectInput optionText="nome" />
            </ReferenceInput>
            <TextInput source="endereco.rua" />
            <TextInput source="endereco.numero" />
            <TextInput source="endereco.bairro" />
            <ReferenceInput label="Cliente" source="cliente.id" reference="cliente">
                    <SelectInput optionText="nome" />
            </ReferenceInput>
        
        </SimpleForm>
    </Create>
);