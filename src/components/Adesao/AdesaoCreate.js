import React, { useState, useEffect } from "react";

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
    AutocompleteInput,
    Create
} from 'react-admin';

import ApiService from '../../service/ApiService'
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Divider from '@material-ui/core/Divider';


export const AdesaoCreate = props => {

    const [ChoicesClient, setChoicesClient] = useState([]);

    useEffect(() => {
        retrieveChoicesClient();
    }, []);

    const retrieveChoicesClient = () => {
        ApiService.getAll("cliente")
            .then(response => {
                setChoicesClient(response.data.content);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const OptionRendererClient = choice => {
        return (
            <List>
                <ListItem key={choice.record.id} role={undefined} dense button >
                    <IconButton edge="end" aria-label="comments">
                        <AssignmentIndIcon />
                    </IconButton>
                    <ListItemText id={choice.record.id} primary={`${choice.record.nome}`} />
                </ListItem>
            </List>
        )
    }

    const inputTextClient = choice => `${choice.nome}`;

    const optionMatchClient = (filter, choice) => {
        if (choice.nome.match(filter)) {
            return true
        }
    };

    const AdesaoTitle = ({ record }) => {
        return <span>Nova Adesão</span>;
    };

    return (
        <Create {...props} title={<AdesaoTitle />} >
            <SimpleForm>
                <AutocompleteInput
                    source="cliente.id"
                    choices={ChoicesClient}
                    optionText={<OptionRendererClient choice={ChoicesClient} />}
                    inputText={inputTextClient}
                    matchSuggestion={optionMatchClient}
                    label="Cliente" />

                <Divider />

                <ReferenceInput label="Plano" source="plano.id" reference="plano">
                    <SelectInput optionText="nome" />
                </ReferenceInput>

                <Divider />

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
                <TextInput source="endereco.cep" label="CEP"/>
                
                <TextInput source="endereco.rua" label="Rua" />
                <TextInput source="endereco.bairro" label="Bairro" />
                <TextInput source="endereco.numero" label="Número" />

            </SimpleForm>
        </Create>
    );
}