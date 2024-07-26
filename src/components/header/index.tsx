import "./header.css";


export const Header = () => {
  return (
    
      <main className="header-main">
        <a href="https://www.linkedin.com/in/dani-sanguino/" target="_blank">
          <button className="header-main__linkedin">
            <img src="./public/assets/linkedin-icon.svg" className="header-main__linkedin-icon"/>
          </button>
        </a>
        <a href="https://github.com/danisanguino" target="_blank">
          <button className="header-main__github">
            <img src="./public/assets/github-icon.svg" className="header-main__github-icon"/>
          </button>
        </a>
        <a href="#" target="_blank">
          <button className="header-main__contact">
            <p>Contact</p>
          </button>
        </a>
      </main>

  )
}
