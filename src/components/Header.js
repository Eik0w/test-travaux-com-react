import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import {useDispatch} from "react-redux";
import {getNew} from "../ducks/news";
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
	root: {},
	header: {
		width: '80%',
		background: '#ff6600',
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		padding: 2,
		margin: '10px auto 10px',

	},
	containBrand: {
		display: 'flex',
		flexWrap: 'wrap',
		flex: '0 1 auto',

	},
	logo: {
		color: '#fff',
		border: '1px solid #fff',
		padding: '1px 5px',
		marginRight: 5,
		flex: '0 0 auto',
		textDecoration: 'none'
	},
	title: {
		color: 'black',
		fontWeight: 'bold',
		flex: '0 0 auto',
		marginRight: 10,
		textDecoration: 'none'
	},
	containLink: {
		flex: '0 1 auto',
	},
	link: {
		color: 'black',
		textDecoration: 'none',
		marginRight: 3,
		'&:after': {
			display: 'block',
		}
	},
	login: {
		flex: '1 0 auto',
		textAlign: 'right'
	}
}), {name: 'Header'});


function Header(props) {
	const {className} = props;
	const classes = useStyles(props);
	const dispatch = useDispatch();

	useEffect(() => {
	//	dispatch(getNew())
	}, []);

	return (
			<div className={classes.header}>
				<div className={classes.containBrand}>
					<Link className={classes.logo} to={'/'}>
						Y
					</Link>
					<Link className={classes.title} to={'/'}>
						Hacker News
					</Link>
				</div>
				<div className={classes.containLink}>
					<Link className={classes.link} to={'/new'}>
						new |
					</Link>
					<Link className={classes.link} to={'/past'}>
						past |
					</Link>
					<Link className={classes.link} to={'/comments'}>
						comments |
					</Link>
					<Link className={classes.link} to={'/ask'}>
						ask |
					</Link>
					<Link className={classes.link} to={'/show'}>
						show |
					</Link>
					<Link className={classes.link} to={'/jobs'}>
						jobs |
					</Link>
					<Link className={classes.link} to={'/submit'}>
						submit
					</Link>
				</div>
				<div className={classes.login}>
					login
				</div>
			</div>
	);
}


export default Header;