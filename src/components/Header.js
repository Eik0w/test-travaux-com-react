import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';



const useStyles = makeStyles(theme => ({
	root: {},
}), {name: 'Header'});


function Header(props) {
	const {className} = props;
	const classes = useStyles(props);
	return <div className={clsx(classes.root, className)}>Bonsoir je suis le header</div>;
}


export default Header;