import './ProjectPage.css'

const BackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5" />
    <path d="M12 5l-7 7 7 7" />
  </svg>
)

function ProjectPage({ project, onBack }) {
  return (
    <div className="project-page">
      <button className="back-btn" onClick={onBack}>
        <BackIcon />
        Back to Projects
      </button>

      <div className="project-page-header">
        <h1 className="project-page-title">{project.title}</h1>
        <div className="project-page-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>{tag}</span>
          ))}
        </div>
        <p className="project-page-description">{project.description}</p>
      </div>

      <div className="project-page-tools">
        <h2 className="project-section-label">Tools Used</h2>
        <div className="tools-list">
          {project.tools.map((tool) => (
            <span className="tool-pill" key={tool}>{tool}</span>
          ))}
        </div>
      </div>

      <div className="project-page-gallery">
        {project.imageGroups.map((group) => (
          <div className="image-group" key={group.label}>
            <h2 className="project-section-label">{group.label}</h2>
            {group.images.length === 0 ? (
              <div className="image-grid">
                {[1, 2, 3].map((i) => (
                  <div className="image-placeholder" key={i}>
                    <span>Coming soon</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="image-grid">
                {group.images.map((img) => (
                  <figure className="image-item" key={img.caption}>
                    <img src={img.src} alt={img.caption} />
                    <figcaption>{img.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectPage
