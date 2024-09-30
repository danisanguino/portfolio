import "./hello.css"
import { FaCloudDownloadAlt } from "react-icons/fa";

export const Hello = () => {
  return (
    <main className="hello-main">
      <div className="hello-main__profile-img">
          <img src="/assets/dani-sanguino-profile.png"/>
      </div>
      <div className="hello-main__say-hello">
        <h1>I'm Dani Sanguino</h1>
        <h2>Full Stack Developer & Graphic Designer</h2>
      </div>
      <div className="hello-main__i-work">
        <h2>I work</h2>
        <h3>HTML | CSS | JavaScript | TypeScript | GIT | React | Node.Js | Express.Js | Mongoose | Prisma | MongoDB | PostgreSQL | Next.Js | Jenkins | Vercel | Figma | Adobe Photoshop | Adobe Illustrator | Adobe Indesign | Adobe Premier</h3>
      </div>
      <div className="hello-main__i-work">
        <h2>My Resume</h2>
        <a href="/resumeDaniSang.pdf" target="_blank"><FaCloudDownloadAlt size={40} className="hello-main__i-work--download-icon"/></a>
      </div>
    </main>
  )
}
