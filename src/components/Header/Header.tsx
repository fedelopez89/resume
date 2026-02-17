import { FC, useState } from 'react';
import { useNavbarScroll, useScrollSpy } from '@/hooks';
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
  MobileMenuButton,
  MobileMenuOverlay,
  MobileMenu,
  MobileCloseButton,
  MobileNavLink,
} from './Header.styles';

const navItems = [
  { href: '#aboutme', label: 'ABOUT ME', id: 'aboutme' },
  { href: '#projects', label: 'PROJECTS', id: 'projects' },
  { href: '#experience', label: 'EXPERIENCE', id: 'experience' },
  { href: '#languages', label: 'LANGUAGES', id: 'languages' },
  { href: '#education', label: 'EDUCATION', id: 'education' },
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
  const activeSection = useScrollSpy({
    sectionIds: ['home', ...navItems.map((item) => item.id)],
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

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
            $isScrolled={isScrolled}
            whileTap={{ scale: 0.95 }}
          >
            HOME
          </Logo>

          <MobileMenuButton
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            $isScrolled={isScrolled}
          >
            <i className="fa fa-bars" aria-hidden="true" />
          </MobileMenuButton>

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
              >
                <NavLink
                  href={item.href}
                  role="menuitem"
                  aria-label={item.label}
                  $isScrolled={isScrolled}
                  $isActive={activeSection === item.id}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavMenu>
        </NavContainer>
      </Navbar>

      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay
        $isOpen={isMobileMenuOpen}
        onClick={handleMobileLinkClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      />

      {/* Mobile Menu */}
      <MobileMenu
        $isOpen={isMobileMenuOpen}
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <MobileCloseButton
          onClick={handleMobileMenuToggle}
          aria-label="Close mobile menu"
        >
          <i className="fa fa-times" aria-hidden="true" />
        </MobileCloseButton>

        {navItems.map((item) => (
          <MobileNavLink
            key={item.href}
            href={item.href}
            onClick={handleMobileLinkClick}
            $isActive={activeSection === item.id}
          >
            {item.label}
          </MobileNavLink>
        ))}
      </MobileMenu>

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
          Senior Frontend Engineer
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
