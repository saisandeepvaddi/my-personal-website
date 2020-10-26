import React from "react";

function MyIntro() {
  return (
    <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-4 md:gap-2 py-5">
      <img
        src={`https://res.cloudinary.com/saisandeepvaddi/image/upload/q_auto:low,f_auto,w_auto/common/profile-pic.jpg`}
        className="h-32 w-auto rounded-full justify-self-center md:justify-self-center md:row-span-1"
        alt="My Profile Pic"
        height="100"
        width="100"
      />
      <div className="h-full justify-self-center md:justify-self-start md:grid md:place-items-center md:row-span-2 md:col-span-2">
        <div className="text-center md:text-left">
          <h1>Sai Sandeep Vaddi</h1>
          <p>I&apos;m a Software Developer.</p>
          <p>
            I work at{" "}
            <a
              href="https://gkaccess.com"
              target="blank"
              rel="noreferrer noopener"
            >
              Untethered Labs
            </a>{" "}
            as a <em>Front-End Developer</em>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyIntro;
