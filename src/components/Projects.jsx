import './Projects.css'

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
)

const projects = [
  {
    id: 1,
    title: 'Media Monster Social Media',
    subtitle: 'Created social media graphics for Media Monster, a video editing app, through a subcontracting opportunity with another virtual assistant. Media Monster offers various features, including the ability to record videos while playing music in the background and other creative editing tools.',
    link: '#',
    tags: ['#canva', '#videoediting', '#graphics'],
  },
  {
    id: 2,
    title: 'Astrea Real Estate',
    subtitle: 'Astrea Real Estate was a practice project where I developed a complete branding package, including a brochure and social media graphics. This task was assigned by my senior designer as preparation for future client projects. Through this experience, I enhanced my skills in Canva and Adobe Illustrator.',
    link: '#',
    tags: ['#canva', '#graphics', '#branding', '#socialmedia'],
  },
]

function Projects() {
  return (
    <section className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image" />
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
              <a
                href={project.link}
                className="btn btn-outline-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <ArrowIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
