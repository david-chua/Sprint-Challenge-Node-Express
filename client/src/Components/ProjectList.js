import React from 'react'

import Project from './Project';

const ProjectList = props => {
  console.log(props.projects)
  return(
    props.projects.map(project => {
      return( <Project
        key={project.id}
        id={project.id}
        name={project.name}
        description={project.description}
        completed={project.completed}
      />
    )
    })
  )
}

export default ProjectList
