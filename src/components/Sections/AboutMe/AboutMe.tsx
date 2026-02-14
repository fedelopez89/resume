import { FC } from 'react';
import { Image } from '../../ui';
import {
  AboutMeContainer,
  Description,
  PhotoContainer,
} from './AboutMe.styles';

const AboutMe: FC = () => {
  return (
    <AboutMeContainer>
      <Description
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1>about me</h1>
        <p>
          Hi! I'm{' '}
          <strong>
            <u>Federico López</u>
          </strong>
          , a Senior Frontend Engineer with{' '}
          <strong>16 years of IT experience</strong> and{' '}
          <strong>7+ years specializing in modern web development</strong>.
        </p>
        <br />
        <p>
          Expert in <strong>React</strong>, <strong>TypeScript</strong>, and{' '}
          <strong>Next.js</strong>, I focus on building high-performance,
          scalable, and user-centric interfaces. My work has been{' '}
          <strong>
            <a
              href="https://www.linkedin.com/posts/svanweelden_silicon-valley-builds-amazon-and-gmail-copycats-activity-7404333944894398465-CIyW/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline' }}
            >
              recognized by industry leaders and featured in The New York Times
            </a>
          </strong>{' '}
          for exceptional frontend engineering contributions.
        </p>
        <p>
          Passionate about solving complex UX challenges, driving product
          quality through clean architecture and reusable components. I thrive
          in remote Agile environments, collaborating with cross-functional
          teams to deliver impactful solutions for global companies in wellness,
          sports, fintech, and healthcare industries.
        </p>
      </Description>
      <PhotoContainer
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          src="./images/photo__01.jpeg"
          alt="Federico López"
          priority
          width="100%"
          height="auto"
        />
      </PhotoContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
