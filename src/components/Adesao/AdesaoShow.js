import {
    Show,
    SimpleShowLayout,
    TextField,
    NumberField,
    DateField,
    TopToolbar,
    ListButton,
    EditButton
} from 'react-admin';
import MyListButton from '../Util/ListButton';

const AdesaoShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <MyListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data} />
        
    </TopToolbar>
);

export const AdesaoShow = props => (
    <Show {...props} actions={<AdesaoShowActions />}>
        <SimpleShowLayout>
            
            <TextField source="id" />
            <TextField source="cliente.nome" label="Cliente"/>
            <TextField source="plano.nome" label="Plano"/>
            <TextField source="plano.descricao" label="Descrição"/>
            <NumberField source="valor" />
            <DateField source="data" label="Data de adesão"/>
            <p>-------------ENDEREÇO--------------</p>  
            <TextField source="endereco.uf" label="UF"/>
            <TextField source="endereco.cidade" label="Cidade"/>
            <TextField source="endereco.cep" label="CEP"/>
            <TextField source="endereco.bairro" label="Bairro"/>
            <TextField source="endereco.rua" label="Rua"/>
            <TextField source="endereco.numero" label="Número"/>
        
        </SimpleShowLayout>
    </Show>
);