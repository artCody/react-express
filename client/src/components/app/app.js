import React, {Component} from 'react';

import './app.css'

export default class App extends Component {


	state = {
		title: ''
	}

	componentWillMount() {

		fetch('/api/title/').then(res => res.json()).then(title => this.setState({title}));

	}

	render() {

		return (
			<div className="app">
				<h1>default <span className="react">{this.state.title.app}</span> app</h1>
			</div>
		)
	}

}