import React from "react";
import Image from "next/image";
function MyIntro() {
  return (
    <div className="grid grid-rows-2 grid-cols-1 justify-items-center md:grid-rows-1 md:grid-cols-3 gap-4 md:gap-2 py-5">
      <Image
        src="/assets/profile-pic.jpg"
        alt="My Profile Pic"
        height={125}
        width={125}
        className="rounded-full p-0 m-0"
        loading={"eager"}
        layout="fixed"
        priority
      />
      <section className="h-full md:justify-self-start md:grid md:place-items-center md:row-span-2 md:col-span-2">
        <div className="text-center md:text-left">
          <h1 className="font-semibold my-2 text-4xl">Sai Sandeep Vaddi</h1>
          <p className="pb-3 mt-4 leading-relaxed">
            I&apos;m a Software Developer.
          </p>
          <p className="pb-3 leading-relaxed">
            I work at{" "}
            <a
              href="https://motional.com"
              target="blank"
              rel="noreferrer noopener"
            >
              Motional
            </a>{" "}
            as a <em>Front-End Developer</em>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default MyIntro;
