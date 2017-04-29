import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects, deleteProject } from '../../actions/projects';
import { Link, browserHistory } from 'react-router';

class ProjectsIndex extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }

  renderProjects() {
    return this.props.projects.map((project) => {
      return (
        <Link to={`projects/${project.id}`} className="list-group-item list-group-item-info" key={project.id}>
          <h2>{project.title}</h2>
          <strong>{project.description}</strong>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="text-center">
        <div className="list-group">
          {this.props.projects.length ? this.renderProjects() : ''}
          <div className="list-group-item list-group-item-info">
            <Link to="projects/new" className="btn btn-primary">Create new project</Link>
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { projects: state.projects.collection };
}

export default connect(mapStateToProps, { fetchProjects, deleteProject })(ProjectsIndex);
