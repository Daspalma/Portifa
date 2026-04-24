export interface Activity {
  title: string;
  description: string;
  justification: string;
  image?: string;
  link?: string;
  skills?: string;
}

export interface Subject {
  id: string;
  name: string;
  activities: Activity[];
}

export interface Certificate {
  name: string;
  description: string;
  icon?: string;
}

export interface SubjectData {
  mathematics: Subject;
  nature: Subject;
  humanities: Subject;
  languages: Subject;
  iot: Subject;
  database: Subject;
  modeling: Subject;
}
