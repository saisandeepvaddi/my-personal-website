import React from "react";
import dynamic from "next/dynamic";
const MyIntro = dynamic(() => import("../MyIntro/MyIntro"));
const TopArticles = dynamic(() => import("./TopArticles"));
const TopProjects = dynamic(() => import("./TopProjects"));

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
