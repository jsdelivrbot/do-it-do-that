import React, { Component } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { createProject } from '../../actions/projects';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

const validate = (values) => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  } else if (values.title.length < 5) {
    errors.title = 'Must be 5 characters or more'
  }
  return errors
};

class ProjectsNew extends Component {

  renderField(field) {
    return (
      <div className={`form-group ${field.meta.touched && field.meta.error ? 'has-error' : ''}`}>
        <label className="control-label">{field.label}</label>
        <input type={field.type} className="form-control" {...field.input} />
        {field.meta.touched && field.meta.error && <span className="help-block">{field.meta.error}</span>}
      </div>
    );
  }

  onSubmit(values) {
    this.props.createProject(values)
    .then(() => {
      browserHistory.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="panel panel-info">
        <div className="panel-heading"><h3>Create new project</h3></div>
        <div className="panel-body">
          <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field name="title" type="text" label="Title" component={this.renderField} />
            <Field name="description" type="text" label="Description" component={this.renderField} />
            <button type="submit" className="btn btn-primary">Create</button>
            <Link to="/" className="btn btn-default pull-right">Cancel</Link>
          </Form>
        </div>
      </div>
    );
  }
}

ProjectsNew = reduxForm({form: 'ProjectsNewForm', validate})(ProjectsNew);
ProjectsNew = connect(null, { createProject })(ProjectsNew);
export default ProjectsNew;
