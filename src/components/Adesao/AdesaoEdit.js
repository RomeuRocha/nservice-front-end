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
import MyListButton from '../Util/ListButton';


const AdesaoEditActions = ({ basePath, data }) => (
    <TopToolbar>
        <MyListButton basePath={basePath} />
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

            
            <TextInput source="endereco.rua" label="Rua"/>
            <TextInput source="endereco.numero" label="Número"/>
            <TextInput source="endereco.bairro" label="Bairro"/>
            
        
        </SimpleForm>
    </Edit>
);