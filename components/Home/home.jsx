import React from "react";
import MyIntro from "../MyIntro/MyIntro";
import TopArticles from "./TopArticles";
import TopProjects from "./TopProjects";

function Home() {
  return (
    <React.Fragment>
      <MyIntro />
      <div className="space-y-8">
        <TopArticles />
        <TopProjects />
      </div>
    </React.Fragment>
  );
}

export default Home;
