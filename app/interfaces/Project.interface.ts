export interface Project {
  title: string;
  year: string;
  role: string;
  context: string;
  description: string;
  longDescription: string;
  imageUrl?: string;
  tags: string[];
  githubUrl?: string;
  listed?: boolean;
}