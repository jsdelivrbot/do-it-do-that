import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProject, deleteProject } from '../../actions/projects';
import { fetchSteps, deleteStep, updateStep } from '../../actions/steps';
import { Link, browserHistory } from 'react-router';
import StepsNew from '../steps/new';

class ProjectsShow extends Component {
  componentWillMount() {
    this.props.fetchProject(this.props.params.id);
    this.props.fetchSteps(this.props.params.id);
  }

  onDeleteClick(id) {
    this.props.deleteProject(id)
    .then(() => {
      browserHistory.push('/');
    });
  }

  onStepCheck(project, step) {
    this.props.updateStep(project.id, step.id, {done: !step.done});
  }

  renderSteps() {
    const { steps, project } = this.props;
    this.onStepCheck = this.onStepCheck.bind(this);
    return steps.map((step) => {
      return (
        <div className="row vert-offset-top-2" key={step.id}>
          <div className="col-sm-2">
            <input name="done" type="checkbox" checked={step.done} onChange={()=>{this.onStepCheck(project,step)}} />
          </div>
          <div className="col-sm-8">
            {step.content}
          </div>
          <div className="col-sm-2 text-center">
            <button
              className="btn btn-sm btn-danger"
              onClick={()=>{this.props.deleteStep(project.id, step.id)}}>
              <i className="glyphicon glyphicon-remove"></i>
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    const { project, steps } = this.props;
    if(!project) {
      return <div>Loading project...</div>
    }
    this.onDeleteClick = this.onDeleteClick.bind(this);
    return (
      <div className="panel panel-info">
        <div className="panel-heading text-center">
          <h3>{project.title}</h3>
          <span>{project.description}</span>
        </div>
        <div className="panel-body">
          {steps.length ? this.renderSteps() : 'No steps'}
          <hr/>
          <div className="text-center">
            <StepsNew project_id={project.id} />
          </div>
        </div>
        <div className="panel-footer text-center">
          <button className="btn btn-sm btn-primary">Edit</button>&nbsp;
          <button className="btn btn-sm btn-danger" onClick={()=>{this.onDeleteClick(project.id)}}>Delete</button>&nbsp;
          <Link to='/' className="btn btn-sm btn-default">Projects</Link>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { project: state.projects.selected, steps: state.steps.collection };
}

export default connect(mapStateToProps, { fetchProject, deleteProject, fetchSteps, deleteStep, updateStep })(ProjectsShow);
