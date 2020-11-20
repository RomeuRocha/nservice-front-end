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
    FormTab
} from 'react-admin';

export const OrdemServicoEdit = props => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="Informações básicas">
                <ReferenceInput label="Cliente" source="cliente.id" reference="cliente">
                    <SelectInput optionText="nome" />
                </ReferenceInput>
                <TextInput source="situation" disabled/>
                <ReferenceInput label="Assunto" source="assunto.id" reference="assunto">
                    <SelectInput optionText="description" />
                </ReferenceInput>
                
                <DateInput label="Data de abertura" source="saveMoment" disabled/>
                <DateInput label="Data de Agendamento" source="dateSchedule" />
                <DateInput label="Data de Atendimento" source="attendance" />
                
            </FormTab>
            <FormTab label="Dados">
                <TextInput source="id" options={{ label: "Id" }} disabled />

                <SelectInput source="cliente" optionText="nome" />

                <TextInput source="cliente.nome" />
                <NumberInput source="funcionario.nome" options={{ label: "Funcionário" }} />
                

                
                <ArrayInput source="servicos">
                    <SimpleFormIterator>
                        <TextInput source="id" />
                        <TextInput source="description" />
                        <NumberInput source="value" />
                    </SimpleFormIterator></ArrayInput>
            </FormTab>

        </TabbedForm>
    </Edit>
);