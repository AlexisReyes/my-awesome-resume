import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Alexis Reyes: My Awesome Resume" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About me" />
        <ProjectsSection sectionId="experience" heading="Professional Experience" />
        <InterestsSection sectionId="tech-stack" heading="Technologies I know" />
      </Page>
    </>
  );
}
