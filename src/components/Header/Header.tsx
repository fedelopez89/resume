import { FC } from 'react';
import { useNavbarScroll } from '@/hooks';
import {
  HeaderContainer,
  Navbar,
  NavContainer,
  Logo,
  NavMenu,
  NavItem,
  NavLink,
  HeaderIntro,
  Title,
  Role,
  SocialLinks,
  SocialItem,
  SocialLink,
} from './Header.styles';

const navItems = [
  { href: '#aboutme', label: 'ABOUT ME' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#education', label: 'EDUCATION' },
];

const socialLinks = [
  {
    href: 'https://github.com/fedelopez89',
    icon: 'fa fa-github fa-2x',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/federicoglopez/',
    icon: 'fa fa-linkedin fa-2x',
    label: 'LinkedIn',
  },
];

const Header: FC = () => {
  const { isScrolled } = useNavbarScroll(100);

  return (
    <HeaderContainer id="home" as="header" role="banner">
      <Navbar
        as="nav"
        role="navigation"
        aria-label="Main navigation"
        $isScrolled={isScrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavContainer>
          <Logo
            href="#home"
            aria-label="Home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            HOME
          </Logo>
          <NavMenu
            as="ul"
            role="menubar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <NavItem
                as="li"
                role="none"
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                <NavLink
                  href={item.href}
                  role="menuitem"
                  aria-label={item.label}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavMenu>
        </NavContainer>
      </Navbar>

      <HeaderIntro
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Title
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Federico López
        </Title>
        <Role
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Frontend-Focused Full Stack Engineer
        </Role>
        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {socialLinks.map((link, index) => (
            <SocialItem
              key={link.href}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <SocialLink
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={link.icon} aria-hidden="true" />
              </SocialLink>
            </SocialItem>
          ))}
        </SocialLinks>
      </HeaderIntro>
    </HeaderContainer>
  );
};

export default Header;
