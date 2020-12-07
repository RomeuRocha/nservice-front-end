import {Show,SimpleShowLayout,TextField,EditButton, TopToolbar} from 'react-admin'
import MyListButton from '../Util/ListButton';

const AssuntoShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <MyListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data} />        
    </TopToolbar>
);

export const AssuntoShow = props => (
    
    <Show {...props} actions={<AssuntoShowActions/>}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="description" />
        </SimpleShowLayout>
    </Show>
);
