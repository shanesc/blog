/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;

  const avatar = data?.avatar?.childImageSharp?.fixed;

  return (
    <div className="bio">
      <Image
        fixed={avatar}
        alt={author?.name || ``}
        className="bio-avatar"
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        👋 I'm a software engineer and this is my blog.
        <br></br>
        Find me on{" "}
        <a
          href="https://www.linkedin.com/in/shanewmitchell/"
          target="_blank"
          rel="noreferrer"
        >
          <strong>LinkedIn</strong>
        </a>
        ,{" "}
        <a href="https://github.com/shanesc" target="_blank" rel="noreferrer">
          <strong>GitHub</strong>
        </a>
        , and{" "}
        <a href="https://dev.to/shanesc" target="_blank" rel="noreferrer">
          <strong>Dev.to</strong>
        </a>
      </p>
    </div>
  );
};

export default Bio;
