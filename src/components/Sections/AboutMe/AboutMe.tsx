import { FC } from 'react';
import './aboutme.css';

const AboutMe: FC = () => {
  return (
    <>
      <div className="about-me-description">
        <h1>about me</h1>
        <p>
          Hi! I am{' '}
          <strong>
            <u>Federico López</u>
          </strong>
          .
        </p>
        <br />
        <p>
          I'm a Software Engineer with more than ten years of work in
          technology. Currently working as a FrontEnd Web Developer.
        </p>
        <p>
          I'm a passionate individual who always wants to learn more about
          software engineering and computer science. I consider myself a quick
          learner always setting out challenges to learn different programming
          concepts and to find a more efficient way of solving problems.
        </p>
      </div>
      <figure className="about-photo">
        <img src="./images/photo__01.jpeg" alt="myself" />
      </figure>
    </>
  );
};

export default AboutMe;
