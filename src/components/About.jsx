import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
        I’m a passionate web developer with a strong foundation in Computer Science Engineering, currently pursuing my Bachelor's degree.
         Constantly pushing my skills forward, I’m diving deep into React to create dynamic and modern web experiences.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
        <h1 className="text-black-600 font-semibold text-x2">Education:</h1>
          <h3>• Bachelor of Technology (Computer Science and Engineering), Sikkim Manipal Institute of Technology</h3>
            <h3>(Status – Pursuing, Graduation in 2025)</h3>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
           <h1 className="text-black-600 font-semibold text-x2">Technical Skills:</h1>
              <h3>• Languages: C/C++, SQL</h3>
              <h3>• Tools: Git/GitHub, Canva, Jira, Firebase</h3>
              <h3>• Frameworks: React, Vite, Node.js, Express.js</h3>
              <h3>• Scripting: JavaScript, CSS, HTML</h3>
              <h3>• Operating System: Windows/Linux</h3>
              
            <h1 className="text-black-600 font-semibold text-x2">Soft Skills:</h1>
              <h3>• Strong time management and teamwork abilities</h3>
              <h3>• Adaptable to dynamic environments</h3>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          <h1 className="text-black-600 font-semibold text-x2">Find Flames | Intern (May - September)</h1>
          <h3>• Developed a website using React.js, TypeScript, and Firebase, ensuring seamless user experiences and a visually stunning interface.</h3>
          <h3>• Used Firebase for real-time sync, security, and scalable backend, contributing to Find Flames' success and leaving a lasting impression.</h3>
          <h3>• Gained team management and handling skills in a dynamic environment.</h3>
          </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          <h2>• Certificate of Contribution, Institution's Innovation Council (IIC), Annual Day – SMIT, 2024</h2>
          <h2>(Recognized for contributions as a Student Internship Coordinator)</h2>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
        I use my skills to build web solutions that go beyond client expectations.
        I’m always learning and ready to take on new challenges to grow in my career.
        </p>
      </div>
    </div>
  );
}

export default About;
