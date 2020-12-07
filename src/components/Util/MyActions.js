import * as React from 'react';
import { cloneElement, useMemo } from 'react';
import {CreateButton} from 'react-admin';
import PropTypes from 'prop-types';


import {
    useListContext,
    TopToolbar,
    ExportButton,
    Button,
    sanitizeListRestProps,
        
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
            
            
            {/* Add your custom actions */}
            
        </TopToolbar>
    );
};
export default ListActions;