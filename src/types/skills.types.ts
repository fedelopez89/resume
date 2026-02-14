export interface Skill {
  name: string;
  level: number;
  className: string;
}

export interface SkillCategory {
  title: string;
  className: string;
  skills: Skill[];
}

export interface SkillsConfig {
  sectionId: string;
  categories: SkillCategory[];
}
