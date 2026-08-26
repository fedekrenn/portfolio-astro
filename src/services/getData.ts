import type { Project } from "../types/types";
import { data } from "./experience";

export const getExperience = (): Project[] => {
  return data.filter((item) => item.client !== "Proyecto personal");
};

export const getProjects = (): Project[] => {
  return data.filter((item) => item.client === "Proyecto personal");
};
