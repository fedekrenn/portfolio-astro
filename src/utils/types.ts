export interface Tecnology {
  name: string;
  image?: string;
}

export interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  date: string;
  tecnologies: Tecnology[];
  newTool: Tecnology;
  stack: string;
  deploy: string | null;
  repository: string;
  image: string;
}

