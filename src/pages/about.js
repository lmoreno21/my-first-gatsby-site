// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { title } from "../components/my-component.module.css";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export default AboutPage;
