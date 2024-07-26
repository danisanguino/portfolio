
import { IProject } from "../interfaces/projects";


export const callProjects = async (): Promise<IProject[]> => {
  try {
    const response = await fetch("./public/projects.json");
    const data: IProject[] = await response.json();
    return data;
    
  } catch (error) {
    console.log("Message: " + error);
    throw error;
  }
};