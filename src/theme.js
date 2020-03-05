import createMuiTheme from "@material-ui/core/styles/createMuiTheme";


const theme = createMuiTheme({
	palette : {
		primary : {main : '#E86C5F'},
		secondary : {main : '#E88B84'},
		info : {main : '#E88B84'}
	},
	typography : {
		fontFamily : "Oxanium",
		h1 : {
			fontSize : 332,
			textShadow : '0 0 10px'
		},
		h4 : {
			fontSize : 100,
			fontWeight : 'bold',
			textAlign : 'left',
			textShadow : '0 0 10px',
			color : 'white'
		}
	}
});

export default theme;