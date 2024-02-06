export interface Tag {
  name: string;
  image?: string;
}

export interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  meta: string;
  date: string;
  tecnologies: Tag[];
  newTool: Tag;
  stack: string;
  deploy: string | null;
  repository: string;
  image: string;
}

