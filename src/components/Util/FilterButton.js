import * as React from 'react';
import { FilterButton } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        
        fontWeight: 'bold',
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        '& svg': { color: 'yellow' },
        '&:hover': {
            color: '#33c4ff'
        },
        color : '#3dc915',
    },
    
});

const MyFilterButton = props => {
    const classes = useStyles();
    return <FilterButton className={classes.button} {...props} />;
};

export default MyFilterButton;