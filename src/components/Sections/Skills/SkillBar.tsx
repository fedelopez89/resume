import { FC } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  className?: string;
}

const SkillBar: FC<SkillBarProps> = ({ name, level, className = '' }) => {
  return (
    <div className="skill-item">
      <h5 style={{ width: `${level}%` }} data-value={level}>
        {name}
      </h5>
      <progress max="100" value={level} className={className}>
        <div className="progress-bar">
          <span style={{ width: `${level}%` }}>{level}%</span>
        </div>
      </progress>
    </div>
  );
};

export default SkillBar;
