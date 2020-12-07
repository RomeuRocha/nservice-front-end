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
    TopToolbar,
    ListButton,
    ShowButton
} from 'react-admin';

const AdesaoEditActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);

export const AdesaoEdit = props => (
    <Edit {...props} actions={<AdesaoEditActions />} >
        <SimpleForm>
            <TextInput source="id" disabled/>
            <ReferenceInput label="Cliente" source="cliente.id" reference="cliente">
                    <SelectInput optionText="nome" />
            </ReferenceInput>
            <ReferenceInput label="Plano" source="plano.id" reference="plano">
                    <SelectInput optionText="nome" />
            </ReferenceInput>
            
            <NumberInput source="valor" />

            <DateInput source="data" />

            
            <TextInput source="endereco.rua" />
            <TextInput source="endereco.numero" />
            <TextInput source="endereco.bairro" />
            
        
        </SimpleForm>
    </Edit>
);