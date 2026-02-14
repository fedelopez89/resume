import { FC } from 'react';
import experienceHistory from '../../../data/experience.json';
import type { ExperienceConfig, Experience as ExperienceType } from '@/types';
import './experience.css';

const Experience: FC = () => {
  const { experiences } = experienceHistory as ExperienceConfig;

  const getDateRange = (exp: ExperienceType): string => {
    const { start, end } = exp;
    const endDate = end.active ? 'Present' : `${end.month} ${end.year}`;
    return `${start.month} ${start.year} - ${endDate}`;
  };

  const getLocation = (exp: ExperienceType): string => {
    const { place } = exp;
    return place.remote ? 'Remote' : `${place.province}, ${place.country}`;
  };

  return (
    <>
      <div className="exp-title titles">
        <h1>experience</h1>
      </div>
      <button>
        <i className="fa fa-download fa-2x" aria-hidden="true" />
        <a
          href="./pdf/Resume_LOPEZ_Federico.pdf"
          download="Resume_LOPEZ_Federico.pdf"
          target="_blank"
          rel="noreferrer"
        >
          RESUME
        </a>
      </button>
      <div className="exp-form">
        {experiences.map((experience) => {
          const { id, rol, company, notes } = experience;
          return (
            <div key={id} className="exp-details">
              <div className="exp-details-left">
                <h5>{getDateRange(experience)}</h5>
                <h6>{getLocation(experience)}</h6>
              </div>
              <div className="exp-details-right">
                <h4>{rol}</h4>
                <a href={company.href} target="_blank" rel="noreferrer">
                  <h5>{company.name}</h5>
                </a>
                <p>{notes}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
