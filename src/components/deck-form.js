import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import Input from './input';
import { required, nonEmpty } from '../utils/validators';
import { createDeck } from '../actions/decks';
import { SelectList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';
import './deck-form.css';

export class DeckForm extends React.Component {
  onSubmit(values) {
    const { deckClass, deckName } = values;
    const user_id = this.props.user.id;
    const newDeck = { user_id, deckClass, deckName };
    return this.props.dispatch(createDeck(newDeck));
      //.then(alert('deck created'));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }

    let classes = ['DRUID', 'HUNTER', 'MAGE', 'PALADIN', 
      'PRIEST','ROGUE', 'SHAMAN', 'WARLOCK', 'WARRIOR'];
    
    const renderSelectList = ({input, data}) => 
      <SelectList {...input} onBlur={() => input.onBlur()} data={data}/>;

    return (
      <div className="test-div">
        <form className="deck-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          {error}
          <label htmlFor="deckName">Deck Name</label>
          <Field component={Input} type="text" name="deckName" id="deckName" validate={[required, nonEmpty]}/>
          <label htmlFor="deckClass">Deck Class!</label>
          <Field component={renderSelectList} data={classes} type="text" name="deckClass" id="deckClass" />
          <button disabled={this.props.pristine || this.props.submitting}>Save Deck!</button>
        </form>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  user: state.auth.currentUser
});

DeckForm = connect(mapStateToProps)(DeckForm);

export default reduxForm({
  form: 'deck',
  onSubmitFail: (errors, dispatch) => {
    dispatch(focus('deck', Object.keys(errors)[0]));}
})(DeckForm);

