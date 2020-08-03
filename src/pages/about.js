import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import ContactLinks from "../components/ContactLinks";

class About extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About me" description={"About me"} />
        <article>
          <header>
            <h1
              className="my-gray bold"
              style={{
                marginTop: rhythm(1),
                marginBottom: rhythm(1),
              }}
            >
              About Me
            </h1>
          </header>
          <section>
            <p>
              Hey There👋! I&apos;m <i>Sai Sandeep Vaddi</i>.
            </p>
            <p>
              I&apos;m a Software Developer at{" "}
              <a
                href="https://gkaccess.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Untethered Labs, Inc.
              </a>
              , a tech company producing proximity-based computer & website
              access managment technologies under GateKeeper product suite. My
              primary focus at work is building web-based tools mostly using
              JavaScript technologies. I work on building admin dashboards,
              browser extensions.
            </p>
            <p>
              My primary tech-stack includes JavaScript, TypeScript, ReactJS,
              NodeJS, MongoDB, and various other tools that make the job easier
              on the journey to build user-loving software.
            </p>
            <p>
              I open source any software I build which I believe useful to
              others. You can find my code at{" "}
              <a
                href="https://github.com/saisandeepvaddi"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              . I&apos;m currently working on a task running tool for
              developers/administrators called{" "}
              <a
                href="https://github.com/saisandeepvaddi/ten-hands"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ten Hands
              </a>
              .
            </p>
            <p>
              I love video games. I play on my PS4 and my computer. I recently
              started writing a <Link to={"/blog"}>blog</Link> about the stuff I
              learn.
            </p>
            <p className="all-center">
              <ContactLinks />
            </p>
          </section>
        </article>
      </Layout>
    );
  }
}

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
