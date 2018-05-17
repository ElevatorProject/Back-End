import React, { Component } from 'react';

// Material UI
import RaisedButton from 'material-ui/RaisedButton'
import { deepOrange500 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import logo from './elevator.svg';
import './App.css';

// Theme
const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500
}})

class App extends Component {
	render() {
		return (

		<MuiThemeProvider muiTheme={muiTheme}>
			<div className="App">
			<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Elevator Control</h1>
			<h2 className="App-info">Control your elevator</h2>
			<RaisedButton type='submit' label='Controller' secondary/>
			<div id="root"></div>
			</header>
			</div>

		</MuiThemeProvider>
		);
	}
}
	export default App;
