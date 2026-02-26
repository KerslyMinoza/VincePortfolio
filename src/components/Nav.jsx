import './Nav.css'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'works', label: 'My Works' },
  { id: 'experiences', label: 'Experiences' },
]

function Nav({ current, onChange }) {
  return (
    <nav className="nav">
      {links.map((link) => (
        <button
          key={link.id}
          className={`nav-link${current === link.id ? ' nav-link--active' : ''}`}
          onClick={() => onChange(link.id)}
        >
          {link.label}
        </button>
      ))}
    </nav>
  )
}

export default Nav
