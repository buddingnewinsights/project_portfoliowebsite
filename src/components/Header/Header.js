import Link from 'next/link';
import React from 'react';
import { AiFillBehanceCircle, AiFillDribbbleCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" legacyBehavior>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
          <DiCssdeck size="2rem" />
          <Span>BN Insights</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#tech">Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/buddingnewinsights'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='http://www.linkedin.com/in/bửu-huỳnh-gia'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.behance.net/designbybud'>
        <AiFillBehanceCircle size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://dribbble.com/buddesign/shots'>
        <AiFillDribbbleCircle size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
