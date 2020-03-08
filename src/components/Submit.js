import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
	root: {},
	container : {
		width : '80%',
		margin : '0 auto'
	}
}), {name: 'Submit'});


function Submit(props) {
	const {className} = props;
	const classes = useStyles(props);
	return (<div className={classes.container}>
		<span>You have to be logged in to submit.</span>
		<div className={classes.title}>
			Login
		</div>

		<div className={classes.form}>
			<label for="username">username</label>
			<input type={"text"} id={'username'}/> <br/>
			<label for="passwd"> password </label>
			<input type={"password"} id={"passwd"}/><br/><br/>
			<input type={"button"} value={"login"}/> <br/>
			<a href={"https://news.ycombinator.com/forgot"}> Forgot your password </a> <br/><br/><br/>
		</div>

		<div className={classes.form}>
			<label htmlFor="username2">username</label>
			<input type={"text"} id={'username2'}/> <br/>
			<label htmlFor="passwd2"> password </label>
			<input type={"password"} id={"passwd2"}/><br/><br/>
			<input type={"button"} value={"create account"}/>
		</div>

	</div>);
		}


		export default Submit;