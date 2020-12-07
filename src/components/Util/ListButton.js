import * as React from 'react';
import { ListButton } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const useStyles = makeStyles({
    button: {
        
        fontWeight: 'bold',
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        '& svg': { color: 'orange' },
        '&:hover': {
            color: '#33c4ff'
        },
        color : '#3dc915',
    },
});

const MyListButton = props => {
    const classes = useStyles();
    return <ListButton  {...props} icon={<NavigateBeforeIcon/>} label={"Voltar"}/>;
};

export default MyListButton;