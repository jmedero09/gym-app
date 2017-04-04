import React from 'react';
import {Link} from 'react-router-dom';
import Dashboard from '../components/Dashboard';


 class Main extends React.Component{
	constructor(props){
		super(props) 
	}	
	render(){
		return(
			<div className="row">
				<div className="small-centered  small-12 columns text-center">
					<Link to="/"><img className="logoImg" src="logo.png"/></Link>
					<p className="dash-header small-12 columns small-centered ">Welcome to your Dashboard. Please add an exercise to your dashboard and begin tracking your workout</p>
				</div>
					<Dashboard isAuthenticated={this.props.isAuthenticated}/>
				<div>
					<Link to="/">Home</Link>
					<Link to="/savedworkout">Workouts</Link>
				</div>
			</div>
		)	
	}
}
module.exports = Main;