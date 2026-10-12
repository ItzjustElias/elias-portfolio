export type Project = {
  id: string;
  title: string;
  pkg: string;
  frame: string;
  ext: string;
  year: string;
  role: string;
  context: string;
  summary: string;
  body: string[];
  stack: string[];
  repo?: string;
  logo?: string;
  archived?: boolean;
  listed?: boolean;
  lang?: string;
};