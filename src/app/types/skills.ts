export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillSection {
  title: string;
  color: string;
  skills: Skill[];
}
