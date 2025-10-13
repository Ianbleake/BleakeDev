import AboutMe from '@/components/public/home/AboutMe';
import HomeContact from '@/components/public/home/homeContact';
import Introduction from '@/components/public/home/Introduction';
import ProjectsSection from '@/components/public/home/Proyects';
import Skills from '@/components/public/home/Skills';
import Page from '@/components/ui/page';
import React from 'react';


export default function HomePage(): React.ReactElement {
  return (
    <Page>
      <Introduction />
      <AboutMe />
      <Skills />
      <ProjectsSection/>
      <HomeContact/>
    </Page>
  );
}
