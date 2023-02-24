import React from 'react';
import {
  AiFillBehanceCircle,
  AiFillDribbbleCircle,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <linkItem href="tel: 111-111-1111">111-111-1111</linkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <linkItem href="mailto:buddingnewinsights@gmail.com">
            buddingnewinsights@gmail.com
          </linkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time.</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/buddingnewinsights">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="http://www.linkedin.com/in/bửu-huỳnh-gia">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.behance.net/designbybud">
          <AiFillBehanceCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://dribbble.com/buddesign/shots">
          <AiFillDribbbleCircle size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
