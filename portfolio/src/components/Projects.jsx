import React from 'react';

const Projects = () => (
  <section className="py-10">
    <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
    <div className="flex flex-wrap justify-center gap-6">
      <div className="bg-white shadow-lg rounded-lg max-w-xs p-4">
        <h3 className="font-bold text-xl">AI_Powered Phishing Email Detection(Ongoing)</h3>
        <p className="text-gray-600">This is my final year project.My goal is filling gap of Cyber security filed.Maching Learning and Deep Learning
            are being based on this project
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg max-w-xs p-4">
        <h3 className="font-bold text-xl">Hotel Management System</h3>
        <p className="text-gray-600">This project is MERN stack project, which is fulstack real world project</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg max-w-xs p-4">
        <h3 className="font-bold text-xl">Malicious Url Detection System</h3>
        <p className="text-gray-600">This project is based on Machine Learning.</p>
      </div>
   
    </div>
  </section>
);

export default Projects;
