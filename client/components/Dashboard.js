import React, { Component, PropTypes } from 'react';
import Main from './Main';

export default class Dashboard extends Component {

  render() {
    const {isAuthenticated} = this.props;

    return (
      <div>
        { isAuthenticated &&
        <div className="row">
				<div className="small-12 columns text-center samll-centred">
			        <form onSubmit={this.handleSubmit}>
			          <input required minLength="4" maxLength="15"className="addExerciseField  text-center small-centered columns" type="text" ref="addExercise" placeholder="Add an Exercise" />
                
			          <button className="button expanded">Add Exercise</button>
			          <button onClick={this.handleSave} className="button expanded">Save Workout</button>
			        </form>
				</div>
			</div>
        }
        </div>
    );
  }
}

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};
