import AboutMe from '@/components/home/AboutMe';
import Contact from '@/components/home/Contact';
import Introduction from '@/components/home/Introduction';
import Proyects from '@/components/home/Proyects';
import Skills from '@/components/home/Skills';
import Page from '@/components/ui/page';
import React from 'react';


export default function Home(): React.ReactElement {
  return (
    <Page>
      <Introduction />
      <AboutMe />
      <Skills />
      <Proyects />
      <Contact />
    </Page>
  );
}
