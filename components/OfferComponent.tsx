import React from 'react';
import {
  GlobeAltIcon,
  PuzzleIcon,
  DeviceMobileIcon,
  CodeIcon,
  ShieldCheckIcon,
  PhotographIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline'; // Ensure you have @heroicons/react installed

const Offer: React.FC = () => {
  const offers = [
    {
      title: "Web Development, E-Commerce Stores, Websites",
      description: "Crafting interactive digital experiences tailored to your audience.",
      icon: GlobeAltIcon,
    },
    {
      title: "Automation Processes, API and Bots",
      description: "Optimizing workflows with cutting-edge automation.",
      icon: PuzzleIcon,
    },
    {
      title: "Mobile Apps",
      description: "Developing sleek, user-friendly mobile apps for both platforms.",
      icon: DeviceMobileIcon,
    },
    {
      title: "Web3 Apps",
      description: "Delivering decentralized applications using Web3 technologies.",
      icon: CodeIcon,
    },
    {
      title: "Smart Contracts",
      description: "Implementing secure smart contracts on the blockchain for various applications.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Graphic Design",
      description: "Crafting compelling visual designs that resonate with your brand identity.",
      icon: PhotographIcon,
    },
    {
      title: "And More",
      description: "Offering customized solutions tailored to your digital needs.",
      icon: PlusCircleIcon,
    },
  ];

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white animate-fade-in-down">Our Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`bg-base-100 rounded-lg shadow p-6 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 animate-fade-in-up delay-${index * 100}`}
            >
              <offer.icon className="h-16 w-16 mb-2 text-blue-500"/>
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
