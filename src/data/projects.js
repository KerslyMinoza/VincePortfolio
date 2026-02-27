import mm1 from '../assets/Media Monster/media monster 1.jpg'
import mm2 from '../assets/Media Monster/media monster 2.jpg'
import mm3 from '../assets/Media Monster/media monster 3.jpg'
import mm4 from '../assets/Media Monster/media monster 4.jpg'
import mm5 from '../assets/Media Monster/media monster 5.jpg'
import mm6 from '../assets/Media Monster/media monster 6.jpg'
import mm7 from '../assets/Media Monster/media monster 7.jpg'

import astrea1 from '../assets/Astrea/1-Graphic Design - Realestate.png'
import astrea2 from '../assets/Astrea/2-Graphic Design - Realestate.png'
import astrea3 from '../assets/Astrea/3-Graphic Design - Realestate.png'
import astrea4 from '../assets/Astrea/4-Graphic Design - Realestate.png'
import astrea5 from '../assets/Astrea/5-Graphic Design - Realestate.png'
import astrea6 from '../assets/Astrea/6-Graphic Design - Realestate.png'
import astreaBrochure from '../assets/Astrea/Brochure Bifold.jpg'
import astreaCard from '../assets/Astrea/Business Card.jpg'

const projects = [
  {
    id: 'media-monster',
    thumbnail: mm1,
    title: 'Media Monster Social Media',
    subtitle: 'Created social media graphics for Media Monster, a video editing app, through a subcontracting opportunity with another virtual assistant. Media Monster offers various features, including the ability to record videos while playing music in the background and other creative editing tools.',
    description: 'Created social media graphics for Media Monster, a video editing app, through a subcontracting opportunity with another virtual assistant. Media Monster offers various features, including the ability to record videos while playing music in the background and other creative editing tools.',
    tools: ['Canva', 'Video Editing', 'Graphic Design'],
    tags: ['#canva', '#videoediting', '#graphics'],
    imageGroups: [
      {
        label: 'Social Media Graphics',
        images: [
          { src: mm1, caption: 'Social Graphic 1' },
          { src: mm2, caption: 'Social Graphic 2' },
          { src: mm3, caption: 'Social Graphic 3' },
          { src: mm4, caption: 'Social Graphic 4' },
          { src: mm5, caption: 'Social Graphic 5' },
          { src: mm6, caption: 'Social Graphic 6' },
          { src: mm7, caption: 'Social Graphic 7' },
        ],
      },
    ],
  },
  {
    id: 'astrea',
    thumbnail: astreaBrochure,
    title: 'Astrea Real Estate',
    subtitle: 'Astrea Real Estate was a practice project where I developed a complete branding package, including a brochure and social media graphics. This task was assigned by my senior designer as preparation for future client projects. Through this experience, I enhanced my skills in Canva and Adobe Illustrator.',
    description: 'Astrea Real Estate was a practice project where I developed a complete branding package, including a brochure and social media graphics. This task was assigned by my senior designer as preparation for future client projects. Through this experience, I enhanced my skills in Canva and Adobe Illustrator.',
    tools: ['Canva', 'Adobe Illustrator', 'Graphic Design', 'Branding'],
    tags: ['#canva', '#graphics', '#branding', '#socialmedia'],
    imageGroups: [
      {
        label: 'Print Graphics',
        images: [
          { src: astreaBrochure, caption: 'Brochure Bifold' },
          { src: astreaCard, caption: 'Business Card' },
        ],
      },
      {
        label: 'Social Media Graphics',
        images: [
          { src: astrea1, caption: 'Social Graphic 1' },
          { src: astrea2, caption: 'Social Graphic 2' },
          { src: astrea3, caption: 'Social Graphic 3' },
          { src: astrea4, caption: 'Social Graphic 4' },
          { src: astrea5, caption: 'Social Graphic 5' },
          { src: astrea6, caption: 'Social Graphic 6' },
        ],
      },
    ],
  },
]

export default projects
