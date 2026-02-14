import { FC } from 'react';
import { AboutMe, Skills, Experience, Education } from '../Sections';
import { ScrollToTopButton } from '../layout/ScrollToTop';
import './main.css';

interface Section {
  id: string;
  component: FC;
}

const sections: Section[] = [
  { id: 'aboutme', component: AboutMe },
  { id: 'skills', component: Skills },
  { id: 'experience', component: Experience },
  { id: 'education', component: Education },
];

const Main: FC = () => {
  return (
    <main>
      {sections.map((section) => {
        const Component = section.component;
        return (
          <section key={section.id} id={section.id}>
            <Component />
          </section>
        );
      })}
      <ScrollToTopButton />
    </main>
  );
};

export default Main;
