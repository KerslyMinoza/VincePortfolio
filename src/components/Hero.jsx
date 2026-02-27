import './Hero.css'
import photo from '../assets/photo.png'

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

function Hero() {
  const EMAIL = 'vinceeric.adeva27@gmail.com'

  return (
    <section className="hero">
      <div className="hero-avatar">
        <img src={photo} alt="Vince Eric Adeva" className="avatar-circle" />
      </div>
      <div className="hero-content">
        <p className="hero-name">VINCE ERIC ADEVA</p>
        <h1 className="hero-title">Hi I'm Vince</h1>
        <p className="hero-subtitle">I specialize in providing flexible support across various areas, from creating and managing social media content to handling customer fulfillment and providing technical support. I’m tech-savvy, up to date with the latest digital tools, and always eager to learn new systems to better support your business.

With strong attention to detail and a proactive mindset, I aim to streamline your operations so you can focus on what truly matters, growing your business</p>
        <div className="hero-buttons">
          <a
            href="/Vince Eric Adeva - CV.pdf"
            download="Vince Eric Adeva - CV.pdf"
            className="btn btn-outline"
          >
            <DownloadIcon />
            Download Resume
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="btn btn-dark"
          >
            <EmailIcon />
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
