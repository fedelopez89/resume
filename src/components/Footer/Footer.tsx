import { FC } from 'react';
import contactme from '../../data/contactme.json';
import type { ContactItem } from '@/types';
import './footer.css';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div id="footer">
        <h5>© {currentYear} Federico López. All rights reserved.</h5>
        <div className="footer-contact">
          <ul>
            {contactme.itemContacts.map((item: ContactItem) => {
              const { id, href, classname } = item;
              return (
                <li key={id} id={id} className={id}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <i className={classname} aria-hidden="true">
                      {' '}
                    </i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
