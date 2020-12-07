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
            <p>-------------------------------------</p>
            <h3>Endereço</h3>
            <TextField source="endereco.cidade.nome" label="Cidade"/>
            <TextField source="endereco.bairro" label="Bairro"/>
            <TextField source="endereco.rua" label="Rua"/>
            <TextField source="endereco.numero" label="Número"/>
        
        </SimpleShowLayout>
    </Show>
);