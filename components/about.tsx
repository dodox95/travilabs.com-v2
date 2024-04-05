import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4 animate-fade-in-down">Travilabs</h1>
      <h2 className="text-xl text-center mb-6 animate-fade-in-down delay-100">Digital Vision to Life</h2>
      <p className="text-lg mb-4 animate-fade-in-down delay-200">
        We are a young and innovative IT technology company based in Poland, dedicated to providing cutting-edge solutions in programming and various technologies. Our team of skilled professionals is passionate about driving the success of our clients by delivering high-quality services and support.
      </p>
      <p className="text-lg mb-4 animate-fade-in-down delay-300">
        Explore Travilabs and learn about our capabilities.
      </p>
      <p className="text-lg mb-4 animate-fade-in-down delay-400">
        We pride ourselves on our commitment to excellence and our ability to adapt to the ever-evolving landscape of the technology industry. By staying current with the latest trends and techniques, we are able to provide our clients with the best possible solutions for their unique needs.
      </p>

      <div className="space-y-2 animate-fade-in-up delay-500">
        <h3 className="text-2xl font-semibold mb-2">Our Services:</h3>
        <ul className="list-disc list-inside">
          <li className="animate-fade-in-up delay-600">Web Development, E-Commerce Stores, Websites - Crafting interactive digital experiences tailored to your audience.</li>
          <li className="animate-fade-in-up delay-700">Automation Processes, API and Bots - Optimizing workflows with cutting-edge automation.</li>
          <li className="animate-fade-in-up delay-800">Mobile Apps - Developing sleek, user-friendly mobile apps for both platforms.</li>
          <li className="animate-fade-in-up delay-900">Web3 Apps - Delivering decentralized applications using Web3.</li>
          <li className="animate-fade-in-up delay-1000">Smart Contracts - Implementing secure smart contracts on the blockchain.</li>
          <li className="animate-fade-in-up delay-1100">Graphic Design - Crafting compelling visual designs for your brand.</li>
          <li className="animate-fade-in-up delay-1200">And More - Solutions tailored to your digital needs.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
