import * as React from 'react';
import { cloneElement, useMemo } from 'react';
import PropTypes from 'prop-types';
import CreateButton from './CreateButton'

import {
    useListContext,
    TopToolbar,
    ExportButton,
    Button,
    sanitizeListRestProps,
    RefreshButton
    
} from 'react-admin';
import IconEvent from '@material-ui/icons/Event';

const ListActions = (props) => {
    const {
        className,
        exporter,
        filters,
        maxResults,
        ...rest
    } = props;
    const {
        currentSort,
        resource,
        displayedFilters,
        filterValues,
        hasCreate,
        basePath,
        selectedIds,
        showFilter,
        total,
    } = useListContext();
    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
            {filters && cloneElement(filters, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: 'button',
            })}
            <CreateButton basePath={basePath} />
            <RefreshButton/>
            
            {/* Add your custom actions */}
            
        </TopToolbar>
    );
};
export default ListActions;