import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { AddExerciseDetailsReducer } from '../reducers/reducers';
import SetRep from './SetReps';
import { Field, reduxForm } from 'redux-form';

class ExerciseTile extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    const { dispatch } = this.props;

    	const weight = this.refs.weight.value;
    	const reps = this.refs.reps.value;


    const attribute = $(e.target.attributes['data-reactid']).val();
    const id = attribute.slice(12, 48);
    	dispatch(actions.addExerciseDetails(id, weight, reps));

    	this.refs.weight.value = '';
    	this.refs.reps.value = '';
  }
  render() {
    const { fields: { exercise, weight, reps }, handleSubmit, onKeyPress } = this.props;
    return (
      <div className="exercise-tile small-12 columns small-centered">
      <h1>{this.props.title}</h1>

      {this.props.detail.map((detail, index) => (<SetRep key={index} set={++index} weight={detail.weight} reps={detail.reps} />))}

      <form onSubmit={this.handleSubmit}>
      <div className="small-4 columns small-centered">
      <label>Weight</label>
      <input required maxLength={4} name="weight" type="number" ref="weight" {...weight} />
    </div>

      <div className="small-4 columns small-centered">
      <label>Reps</label>
      <input required maxLength={2} name="reps" type="number" ref="reps"{...reps} />
    </div>
      <button className="button tiny">submit</button>
    </form>
      <div className="textHelp">{weight.touched ? weight.error : ''}</div>
      <div className="textHelp">{reps.touched ? reps.error : ''}</div>

    </div>
    );
  }
}
const mapStateToProps = state => ({
  	exercise: state.addExercise,
});
function validate(values) {
  const errors = {};
  if (!values.weight) {
    errors.weight = 'You Must Enter a weight';
  }
  if (!values.reps) {
    errors.reps = 'You Must Enter a rep';
  }
  if (values.weight && values.weight.length > 4) {
    errors.weight = 'Weight can only be 4 characters long';
  }
  if (values.reps && values.reps.length > 2) {
    errors.reps = 'reps can only be up tp 2 characters';
  }

  return errors;
}
export default reduxForm({
  form: 'exerciseForm',
  fields: ['exercise', 'weight', 'reps'],
  validate,
}, mapStateToProps)(ExerciseTile);
