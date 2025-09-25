import AboutMe from '@/components/home/AboutMe';
import Introduction from '@/components/home/Introduction';
import Skills from '@/components/home/Skills';
import Page from '@/components/ui/page';
import React from 'react';

export default function Home(): React.ReactElement {
  return (
    <Page>
      <Introduction />
      <AboutMe />
      <Skills />
    </Page>
  );
}
