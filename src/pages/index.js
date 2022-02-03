// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { title } from '../components/my-component.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export default IndexPage;
