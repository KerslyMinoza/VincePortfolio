import './OtherExperiences.css'

const experiences = [
  {
    id: 1,
    role: 'Junior Designer Assistant',
    period: 'Jan - Feb 2026',
    company: 'Kersly Potter',
    bullets: [
      'Worked on a 2-month temporary engagement supporting a Senior Designer',
      'Assisted in creating detailed hotel maps using Adobe Illustrator',
      'Exported and optimized map assets for integration into a cleaning app system',
      'Incorporated website copy into visual layouts and design mockups',
      'Implemented and customized Webflow templates based on client requirements',
      'Managed scheduling and coordinated meetings',
      'Completed training in Adobe Creative Suite tools',
      'Edited promotional videos for app commercials',
    ],
  },
  {
    id: 2,
    role: 'Non-voice Quality Assurance',
    period: '2021 – 2023',
    company: 'IResponse Solutions Inc',
    bullets: [
      'Monitored customer service calls to ensure quality standards are met',
      'Identified areas for improvement and provided feedback to management',
    ],
  },
  {
    id: 3,
    role: 'Technical Support Engineer',
    period: '2023 – 2025',
    company: 'CTC BPO',
    bullets: [
      'Managed multiple concurrent support cases with precision and focus, resulting in a high rate of case closure within target timelines',
      'Maintained a high level of expertise on company products, ensuring accurate information was provided to customers at all times',
    ],
  },
]

function OtherExperiences() {
  return (
    <section className="other-experiences">
      <h2 className="section-title">Work Experiences</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div className="experience-item" key={exp.id}>
            <div className="exp-header">
              <span className="exp-role">{exp.role}</span>
              <span className="exp-period">{exp.period}</span>
            </div>
            <span className="exp-company">{exp.company}</span>
            <ul className="exp-bullets">
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OtherExperiences
