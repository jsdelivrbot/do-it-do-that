import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProject, deleteProject } from '../../actions/projects';
import { fetchSteps } from '../../actions/steps';
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

  renderSteps() {
    return this.props.steps.map((step) => {
      return (
        <div className="row" key={step.id}>
          <div className="col-sm-2">
            {step.done}
          </div>
          <div className="col-sm-8">
            {step.content}
          </div>
          <div className="col-sm-2">
            delete
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

export default connect(mapStateToProps, { fetchProject, deleteProject, fetchSteps })(ProjectsShow);
