export interface Project {
  id: number;
  title: string;
  client: string;
  real: boolean;
  description: string;
  date: string;
  tecnologies: string[];
  stack: string;
  deploy: string | null;
  repository: string;
  image: string;
}

export interface Accumulator {
  experience: Project[];
  proyects: Project[];
}
