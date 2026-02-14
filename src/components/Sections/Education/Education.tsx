import { FC } from 'react';
import educationHistory from '../../../data/education.json';
import type { EducationConfig } from '@/types';
import './education.css';

const Education: FC = () => {
  const { educations } = educationHistory as EducationConfig;

  return (
    <>
      <div className="edu-title">
        <h1 className="titles">education</h1>
      </div>
      <div className="edu-form">
        {educations.map((education) => {
          const { id, title, institute, start, end, place } = education;
          const dateRange = `${start.month} ${start.year} - ${end.month} ${end.year}`;
          const location = `${place.province}, ${place.country}`;

          return (
            <div key={id} className="edu-details">
              <div className="edu-details-left">
                <h5>{dateRange}</h5>
                <h6>{location}</h6>
              </div>
              <div className="edu-details-right">
                <h4>{title}</h4>
                <a href={institute.href} target="_blank" rel="noreferrer">
                  <h5>{institute.name}</h5>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
