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
            <TextInput source="id" disabled />
            <ReferenceInput label="Cliente" source="cliente.id" reference="cliente">
                <SelectInput optionText="nome" />
            </ReferenceInput>
            <ReferenceInput label="Plano" source="plano.id" reference="plano">
                <SelectInput optionText="nome" />
            </ReferenceInput>

            <p>-------------ENDEREÇO--------------</p>

            <SelectInput source="endereco.uf" label="UF" choices={[
                { id: 'AC', name: 'AC' },
                { id: 'AL', name: 'AL' },
                { id: 'AP', name: 'AP' },
                { id: 'AM', name: 'AM' },
                { id: 'BA', name: 'BA' },
                { id: 'CE', name: 'CE' },
                { id: 'DF', name: 'DF' },
                { id: 'ES', name: 'ES' },
                { id: 'GO', name: 'GO' },
                { id: 'MA', name: 'MA' },
                { id: 'MT', name: 'MT' },
                { id: 'AP', name: 'AP' },
                { id: 'MS', name: 'MS' },
                { id: 'MG', name: 'MG' },
                { id: 'PA', name: 'PA' },
                { id: 'PB', name: 'PB' },
                { id: 'PE', name: 'PE' },
                { id: 'PI', name: 'PI' },
                { id: 'RJ', name: 'RJ' },
                { id: 'RN', name: 'RN' },
                { id: 'RS', name: 'RS' },
                { id: 'RO', name: 'RO' },
                { id: 'RR', name: 'RR' },
                { id: 'SC', name: 'SC' },
                { id: 'SP', name: 'SP' },
                { id: 'SE', name: 'SE' },
                { id: 'TO', name: 'TO' },
            ]} />
            <TextInput source="endereco.cidade" label="Cidade" />
            <TextInput source="endereco.cep" label="CEP" />
            
            <TextInput source="endereco.rua" label="Rua" />
            <TextInput source="endereco.bairro" label="Bairro" />
            <TextInput source="endereco.numero" label="Número" />

        </SimpleForm>
    </Edit>
);