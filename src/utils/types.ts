export interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  date: string;
  tecnologies: string[];
  newTool: string;
  stack: string;
  deploy: string | null;
  repository: string;
  image: string;
}

