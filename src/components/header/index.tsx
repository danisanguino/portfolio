import "./header.css";


export const Header = () => {
  return (
    
      <main className="header-main">
        <button className="header-main__linkedin">
        <img src="./public/assets/linkedin-icon.svg" className="header-main__linkedin-icon"/>
        </button>
        <button className="header-main__github">
        <img src="./public/assets/github-icon.svg" className="header-main__github-icon"/>
        </button>
        <button className="header-main__contact">
          <p>Contact</p>
        </button>
      </main>

  )
}
