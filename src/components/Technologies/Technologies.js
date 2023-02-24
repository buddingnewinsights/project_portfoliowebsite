import React from 'react';
import { DiFirebase, DiIllustrator, DiReact, DiResponsive } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I'm worked with a range a technologies in the web development world. From Back-end to Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br /> JavaScript and React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br /> Node.js and Database
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiIllustrator size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>UI-UX</ListTitle>
          <ListParagraph>
            Experience with <br /> tool like Illustrator, Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
