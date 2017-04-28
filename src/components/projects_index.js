import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions/index';

class ProjectsIndex extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }

  renderProjects() {
    return this.props.projects.map((project) => {
      return (
        <a href='#' className="list-group-item list-group-item-info" key={project.id}>
          <h2>{project.title}</h2>
          <strong>{project.description}</strong>
        </a>
      );
    });
  }

  render() {
    return (
      <div className="vert-offset-top-10 text-center">
        <div className="list-group">
          {this.renderProjects()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { projects: state.projects.collection };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectsIndex);
