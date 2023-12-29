import { data } from "./experience.json";
import type { Project } from "./types";

export const getExperience = () => {
  return data.filter((item) => item.client !== "Proyecto personal");
};

export const getProjects = () => {
  return data.filter((item) => item.client === "Proyecto personal");
};

export const getById = (id: number): Project => {
  const result = data.find((item) => item.id === id);
  if (!result) throw new Error("No existe el proyecto");
  return result;
};
