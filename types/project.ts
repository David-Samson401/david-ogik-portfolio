export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: number;
  role: "Sole Developer" | "Lead Frontend" | "Collaborator";
  metrics?: {
    lighthouse?: number;
    users?: string;
    performance?: string;
  };
  challenges?: string[];
  solutions?: string[];
}
