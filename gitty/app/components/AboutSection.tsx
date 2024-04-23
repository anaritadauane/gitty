import React from "react";

export const AboutSection = () => {
  return (
    <div className='font-RobotoMono bg-base-100 p-10 sm:p-6'>
      <h1 className='font-bold font-RobotoMono text-xl sm:text-2xl'>About</h1>
      <p className='font-thin text-base sm:text-lg text-sm'>
        Gitty is a platform dedicated to empowering beginner developers to make
        their first contributions to open-source projects with ease. Our mission
        is to centralize and organize{" "}
        <span className='badge badge-neutral'>
          &quot;good first issues&quot;
        </span>{" "}
        from a wide range of GitHub repositories, making it simple for aspiring
        developers to find meaningful opportunities to contribute to the
        open-source community.
      </p>
      <br />
      <p className='text-xs font-thin'>
        <strong>Note:</strong> A good first issue is a label that GitHub-hosted
        open source projects use.
      </p>
    </div>
  );
};
