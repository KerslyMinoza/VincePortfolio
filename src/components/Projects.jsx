import './Projects.css'
import projects from '../data/projects'

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
)

function Projects({ onSelect }) {
  return (
    <section className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            {project.thumbnail
              ? <img src={project.thumbnail} alt={project.title} className="project-image project-image--photo project-image--clickable" onClick={() => onSelect(project.id)} />
              : <div className="project-image" />
            }
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              {project.tags && (
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              )}
              <p className="project-subtitle">{project.subtitle}</p>
              <button
                className="btn btn-outline-sm"
                onClick={() => onSelect(project.id)}
              >
                View Project
                <ArrowIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
