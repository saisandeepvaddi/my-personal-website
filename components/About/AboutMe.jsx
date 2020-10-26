import React from "react";

function AboutMe() {
  return (
    <React.Fragment>
      <section>
        <h1 className="space-x-5">
          <span>Hey 👋!</span>{" "}
          <span>
            I&apos;m <em>Sai Sandeep Vaddi</em>
          </span>
          .
        </h1>
        <p>
          I&apos;m a Software Developer at{" "}
          <a
            href="https://gkaccess.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Untethered Labs, Inc.
          </a>
          , a tech company creating proximity-based computer & website access
          managment technologies under GateKeeper product suite. My primary
          focus at work is building web-based tools mostly using JavaScript
          technologies. I work on building UIs and APIs for end-to-end admin
          dashboard systems, browser extensions.
        </p>
        <p>
          My primary tech-stack includes JavaScript, TypeScript, ReactJS,
          NodeJS, MongoDB, and various other tools that make the job easier to
          build user-loving software.
        </p>
        <p>
          I open source any software I build which I believe useful to others.
          You can find my code at{" "}
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
          . If you are interested in contributing to open-source, open an issue
          or PR on any of my github projects. We&apos;ll have fun building cool
          things.
        </p>
        <p>
          Feel free to get in touch with me by{" "}
          <a href="mailto:saisandeepvaddi@gmail.com">email</a> or any of the
          contact links below.{" "}
        </p>
      </section>
    </React.Fragment>
  );
}

export default AboutMe;
