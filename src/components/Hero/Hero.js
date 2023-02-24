import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a Modern Front-End Web Developer. I'm base in Vietnam. By applying my knowledge of UI/UX design, I am able to
        solve problems and provide users with the best possible experience.
      </SectionText>
      <Button onClick={() => window.location = 'https://linktr.ee/designbybud'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
