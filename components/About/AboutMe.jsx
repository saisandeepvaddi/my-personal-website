import React from "react";

function AboutMe() {
  return (
    <React.Fragment>
      <article className="prose container max-w-3xl">
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
            href="https://motional.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Motional
          </a>
          , a tech company making driverless vehicles a safe, reliable, and
          accessible reality.
        </p>
        <p>
          My primary focus is building web-based User Interfaces. My primary
          tech-stack includes JavaScript, TypeScript, ReactJS, NodeJS. But I
          love to learn and use any technology that makes the job easier to
          build user-loving software.
        </p>
        <p>
          I open-source any software I build which I believe useful to others.
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
          . If you are interested in contributing to open-source - not only code
          but anything, open an issue or PR on any of my GitHub projects.
          We&apos;ll have fun building cool things.
        </p>
        <p>
          Feel free to get in touch with me by{" "}
          <a href="mailto:saisandeepvaddi@gmail.com">email</a> or any of the
          contact links below.{" "}
        </p>
      </article>
    </React.Fragment>
  );
}

export default AboutMe;
