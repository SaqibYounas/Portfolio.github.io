export interface Certificate {
  title: string;
  date: string;
  pdf: string;
}

export interface ProjectHighlight {
  name: string;
  description: string;
}

export interface CertificationsData {
  certificates: Certificate[];
  projects: ProjectHighlight[];
}
