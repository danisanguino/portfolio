import "./project.css"

type Props = {
  key: number
  name: string
  url_imagen:string
  description: string
  url_github: string
  url_deploy: string

}

export const Project = (propsProject: Props) => {
  return (
    <main className="project-main" key={propsProject.key}>
        <h4>{propsProject.name}</h4>
        
        <img src={propsProject.url_imagen} className="project-main__image" alt={propsProject.name}/>
        
        <div className="project-main__buttons">
          <a href={propsProject.url_github} target="_blank">
            <button className="project-main__buttons--button github">
                <img src="public/assets/github-icon.svg" height="15px"/>
            </button>
          </a>
          <a href={propsProject.url_deploy} target="_blank">
            <button className="project-main__buttons--button deploy">
                <img src="public/assets/deploy-icon.svg"/>
            </button>
          </a>
        </div>

    </main>
  )
}