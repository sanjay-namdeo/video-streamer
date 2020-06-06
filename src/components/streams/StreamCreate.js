import * as React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {streamCreate as streamCreateAction} from '../actions/actions';

class StreamCreate extends React.Component {
    // Render input text fields
    renderInputField = (props) => {
        const {label, input, meta} = props;

        return (
            <div className={`field ${meta.touched && meta.error ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input}/>
                {this.renderErrorMessage(meta)}
            </div>
        );
    }

    // If user has touched the field and didn't enter a mandatory value
    renderErrorMessage = (meta) => {
        const {touched, error} = meta;
        if (touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            );
        }
    }

    onSubmit = (formValues) => {
        this.props.streamCreateAction(formValues);
    }

    render() {
        const {handleSubmit, valid} = this.props;

        return (
            <div className='ui form error'>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field name='title' component={this.renderInputField} label='Title'/>
                    <Field name='description' component={this.renderInputField} label='Description'/>
                    <button className={`ui ${!valid ? 'disabled' : ''} button submit primary`}>Submit</button>
                </form>
            </div>
        );
    }
}

// Function to validate form fields
const formValidator = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }
    return errors;
}

const mapStateToProps = (state) => {
    return {streams: state.streams};
}

const reduxConsolidatedForm = reduxForm({form: 'streamCreate', validate: formValidator})(StreamCreate);

export default connect(mapStateToProps, {streamCreateAction})(reduxConsolidatedForm);