import React from 'react';
import styled from '@emotion/styled';
import { eventData } from '../json';
import Content from '../components/Content';
import Paragraph from '../components/Paragraph';
import CodeOfConduct from '../components/CodeOfConduct';
import Layout from '../layouts';
import colors from '../util/colors';
import ContentSection from '../components/ContentSection';
import spacing from '../util/spacing';
import mediaQueries from '../util/mediaQueries';
import NextUp from '../components/NextUp';
import SundvoldenLogo from '../components/Icons/SundvoldenLogo';

const StyledLogoContainer = styled.div`
  text-align: center;
  margin-top: ${spacing.large};
  @media (${mediaQueries.medium}) {
    margin-top: ${spacing.large};
  }
`;

const Frontpage = () => (
  <Layout showGoogleMaps>
    <Content>
      <ContentSection backgroundColor={colors.blueDark} color="white">
        <StyledLogoContainer>
          <SundvoldenLogo />
          <Paragraph color="white">
            {eventData.startDate} - {eventData.endDate} {eventData.year}
          </Paragraph>
        </StyledLogoContainer>
      </ContentSection>
      <ContentSection
        previousSectionColor={colors.blueDark}
        withTopSeperator
        minHeight="0">
        <h1>
          Fagseminar {eventData.season.longCapitalized} {eventData.year}
        </h1>
        <Paragraph>
          <h3>På grunn av Coronavirus-utbruddet er dette fagseminaret utsatt inntil videre.</h3><br/><br/>
          {`Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte
          selv som lager programmet. På dette seminaret skulle også noen fra Amende delta. 
          ${eventData.season.longCapitalized} ${eventData.year} skulle det vært avholdt ${eventData.startDate} -
          ${eventData.endDate} ${eventData.year} i ${eventData.city}, ${eventData.country}.`}
        </Paragraph>
        <Paragraph>
          {`Tidligere har vi besøkt ${eventData.cities.join(', ')} etc.`}
        </Paragraph>
        <CodeOfConduct />
      </ContentSection>
      <ContentSection withBottomSeperator>
        <NextUp />
      </ContentSection>
    </Content>
  </Layout>
);

export default Frontpage;
