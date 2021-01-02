import React from "react";

const projectLinks = [
  {
    title: "Ten Hands",
    href: "https://github.com/saisandeepvaddi/ten-hands",
  },
  {
    title: "Ant Table Extensions",
    href: "https://github.com/saisandeepvaddi/ant-table-extensions",
  },
  {
    title: "Just Enough Logger",
    href: "https://github.com/saisandeepvaddi/just-enough-logger",
  },
];

function TopProjects() {
  return (
    <section className="container mx-auto max-w-2xl prose prose-sm top-item-list">
      <h3 className="mb-0 font-bold">Recent Projects</h3>
      <div className="my-2">
        <small>
          Only personal &amp; recent open-source projects listed here.
        </small>
      </div>

      <ul className="space-y-2 md:space-y-4 mt-2">
        {projectLinks.map((project) => (
          <li key={project.title}>
            <a
              href={project.href}
              className="list-item hover:underline"
              target="blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-4"></div>
      <a
        href="https://github.com/saisandeepvaddi"
        target="blank"
        rel="noopener noreferrer"
        aria-label="All projects"
      >
        See all projects
      </a>
    </section>
  );
}

export default TopProjects;
