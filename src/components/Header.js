import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import {useDispatch} from "react-redux";
import {getNew} from "../ducks/news";



const useStyles = makeStyles(theme => ({
	root: {},
}), {name: 'Header'});


function Header(props) {
	const {className} = props;
	const classes = useStyles(props);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNew())
	},[]);

	return <div className={clsx(classes.root, className)}>Bonsoir je suis le header</div>;
}


export default Header;