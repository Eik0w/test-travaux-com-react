import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import {useDispatch, useSelector} from "react-redux";
import {
	getAsk,
	getAskNews,
	getBest,
	getBestIds,
	getBestNews, getJobs, getJobsNews,
	getNew,
	getNewNews,
	getPast,
	getPastNews, getShow, getShowNews
} from "../ducks/news";
import {Link} from "react-router-dom";



const useStyles = makeStyles(theme => ({
	root: {},
	containerResult : {
		width : '80%',
		margin : ' auto',
	},
	result : {
		display : 'flex',
		flexWrap : 'wrap',
		background : '#F6F6EF',
		marginBottom : 5,
	},
	general : {
		flex : '1 0 100%',
		display : 'flex',
		flexWrap: 'wrap'

	},
	containmini : {
		flex :' 1 0 100%',
		flexWrap : 'wrap',
		display : 'flex',
		fontSize : 10,
		'& *': {
			marginRight : 5
		}
	},
	title : {
		color : 'black',
		textDecoration : 'none'
	},
	up : {
		width: '10px',
		height: '10px',
		border: '0px',
		margin: '3px 2px 6px',
		background: 'url(https://news.ycombinator.com/grayarrow.gif) no-repeat'
	},

}), {name: 'Result'});


function Result(props) {
	const {className} = props;
	const dispatch = useDispatch();
	const classes = useStyles(props);
	const typeNewsConfig = {
		best : {
			selector : getBestNews,
			dispatch :  getBestIds,
		},
		new : {
			selector : getNewNews,
			dispatch : getNew
		},
		past : {
			selector : getPastNews,
			dispatch : getPast
		},
		ask : {
			selector : getAskNews,
			dispatch : getAsk
		},
		show : {
			selector : getShowNews,
			dispatch : getShow
		},
		jobs : {
			selector : getJobsNews,
			dispatch : getJobs
		}
	};
	useEffect(() => {
		dispatch(typeNewsConfig[props.type].dispatch());
	//	console.log('TYPE',props.type)
		//console.log(typeNewsConfig[props.type])
		//typeNewsConfig[props.type].dispatch();
	},[props.type]);

const result = useSelector(typeNewsConfig[props.type].selector)

	return (
			<div className={classes.containerResult}>
				{result && result.map((elem,key) => {
					return (
							<div className={classes.result} key={key}>
								<div className={classes.general}>

								<div className={classes.number}> {key + 1} </div>
									<div className={classes.up}></div>
									{elem.url ? (
											<a className={classes.title} href={elem.url}>{elem.title}</a>) : (<div className={classes.title}>{elem.title}</div> )
									}
								<div className={classes.source}> source </div>
								</div>
								<div className={classes.containmini}>
									<div className={classes.point}>{elem.descendants} points</div>
									<div className={classes.by}> by {elem.by} </div>
									<div className={classes.when}> date </div>
									{elem.kids && elem.kids.length &&
									<div className={classes.comment}> {elem.kids.length} comments </div>
									}
								</div>
							</div>
					)
				})}
			</div>
	);
}


export default Result;