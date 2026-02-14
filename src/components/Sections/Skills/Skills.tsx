import { FC } from 'react';
import { skillsData } from '../../../data/skills';
import SkillBar from './SkillBar';
import './skills.css';

const Skills: FC = () => {
  const { categories } = skillsData;

  return (
    <>
      <div className="skills-all">
        <h1 className="titles">skills</h1>
        <div className="skills-details">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`skill-separator ${category.className}`}
            >
              <h4>{category.title}</h4>
              {category.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  className={skill.className}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
