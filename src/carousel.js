import react from 'react'
import './carousel.css'
import M3rcado from './M3rcado.png'
import City from './cityExplorer.png'
import Logo from './logo.png'

class carousel extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: 'M3rcado',
          description: `M3rcado is a web 3.0 inspired application that simulates a decentralized application running on blockchain technology. It also simulates the use of ethereum gas to facilitate e-commerce transactions of Non-Fungible Tokens (NFTs). NFTs are unique cryptographic tokens that exist on a blockchain and cannot be replicated.
          NFTs represent real-world items like artwork and real estate.`,
          utilites: `Heroku, Netlifty, Node.js, MongoDB, NPM, GIT, GitHub, Third Party API's, Multer, MaterialUI, React-Bootstrap, React Icons, Auth0, React Sketch Canvas, ThunderClient`,
          languages: 'Javascript, TS, HTML, CSS',
          image: [M3rcado],
          url: 'https://m3rcado.netlify.app'
        },
        {
          name: 'City Explorer',
          description: 'An application built with React and deployed to Heroku and netlify for hosting services.',
          languages: 'Javascript, HTML5, CSS,',
          utilites: 'Heroku, Netlifty, Node.js, MongoDB, NPM, GIT, GitHub, React-Bootstrap',
          image: [City],
          url: 'https://cesar-city-explorer.netlify.app'
        },
        {
          name: 'Coming Soon',
          description: 'Building an to-do list using Angular ',
          languages: 'Coming Soon',
          utilites: 'Coming Soon',
          image: [Logo],
          url: 'https://github.com/cesardeltoroc'
        }
      ]
    }
  }
  render() {

    return (
      <div>
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-6xl font-extrabold tracking-tight text-black">Projects</h2>
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {this.state.projects.map((project) => (
              <div class="group relative" key={project.name}>
                <div>
                  <img src={project.image} alt="projects" />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href={project.url}>
                        <span aria-hidden="true" class="absolute inset-0"></span>
                      </a>
                    </h3>
                    <h2><u>Languages</u></h2>
                    <p>{project.languages}</p>
                    <h2><u>Description</u></h2>
                    <p style={{ fontFamily: 'Jazz LET, fantasy', fontSize: 'em'  }}>{project.description}</p>
                    <h2><u>Third Party</u></h2>
                    <p style={{ fontFamily: 'Jazz LET, fantasy', fontSize: '1em' }}>{project.utilites}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default carousel;
