import React from 'react';


class SavedWorkout extends React.Component{
	constructor(props){
		super(props);
	}
	render(props){
		return(
			<div className="row">

				<div className="savedTitle small-centered columns">
					<h1>{this.props.workout}</h1>
					<p>{this.props.date}</p>
				</div>
			</div>
		)
	}
}

export default (SavedWorkout)