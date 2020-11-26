import * as React from 'react';
import { EmailField } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    email: {
        
        
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        color : '#FFF',
        '&:hover':{
            color: '#FFF'
        },
    },

});

const MyEmailField = props => {
    const classes = useStyles();
    return <EmailField className={classes.email} {...props} />;
};

export default MyEmailField;