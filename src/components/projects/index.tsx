import { useEffect, useState } from 'react';
import { IProject } from '../../interfaces/projects';
import { Project } from "./project";
import "./projects.css";


export const Projects = () => {

  const [projects, setProjects] = useState<IProject[]>([]);

  async function callProjects (){
    try {
      const response = await fetch("projects.json");
      const data: IProject[] = await response.json();
      setProjects(data);
      
      
    } catch (error) {
      console.log("Message: " + error);
    }

  };

  useEffect(() => {
    callProjects();
  }, [])
  

  return (
    <main className="projects-main">
        <h2>My Projects</h2>
        <div className="projects-main__project">
          {projects.map(element => {
            
            return <Project key={element.id}
                            name={element.name}
                            url_imagen={element.url_image}
                            description={element.description}
                            url_github={element.url_github}
                            url_deploy={element.url_deploy}
                    />

          })}
          
          
        </div>
    </main>
  )
}
