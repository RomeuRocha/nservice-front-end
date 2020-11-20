import {Show,SimpleShowLayout,TextField} from 'react-admin'

export const AssuntoShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="description" />
        </SimpleShowLayout>
    </Show>
);