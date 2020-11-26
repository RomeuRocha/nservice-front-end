import * as React from 'react';
import { ShowButton } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        
        fontWeight: 'bold',
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        
        color : '#3dc915',
        '&:hover': {
            color: '#33c4ff'
        },
    },
});

const MyShowButton = props => {
    const classes = useStyles();
    return <ShowButton className={classes.button} {...props} />;
};

export default MyShowButton;