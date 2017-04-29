import React, { Component } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { createStep } from '../../actions/steps';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

class StepsNew extends Component {
  renderField(field) {
    return (
      <div className={`form-group ${field.meta.touched && field.meta.error ? 'has-error' : ''}`}>
        <input type={field.type} size="100" className="form-control" {...field.input} />
        {field.meta.touched && field.meta.error && <span className="help-block">{field.meta.error}</span>}
      </div>
    );
  }

  onSubmit(values) {
    const { project_id } = this.props;
    this.props.createStep(project_id, values)
    .then(() => {
      browserHistory.push(`/projects/${project_id}`);
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form className="form-inline" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="content" type="text" component={this.renderField} />&nbsp;
        <button type="submit" className="btn btn-primary">Create new step</button>
      </Form>
    );
  }
}


StepsNew = reduxForm({form: 'StepsNewForm'})(StepsNew);
StepsNew = connect(null, { createStep })(StepsNew);
export default StepsNew;
