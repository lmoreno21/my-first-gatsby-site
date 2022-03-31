import * as React from "react";

// step 1 - import useStaticQuery hook and graphql tag
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  // step 2 - use useStaticQuery hook and graphql tag to query for data
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      {/* step 3 - use data in component */}
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  );
};

export default Header;
