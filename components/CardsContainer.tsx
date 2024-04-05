// components/CardsContainer.tsx
import React from 'react';
import Card from './card';

const cardsData = [
  {
    title: "WEB3 / Blockchain",
    description: "Smart contracts, Dapps, DYORs.",
    imageUrl: "https://images.unsplash.com/photo-1666816943145-bac390ca866c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // Add your additional cards here
  {
    title: "NextJS",
    description: "The all you need about NextJS.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
  },
  {
    title: "React",
    description: "The all you need about React.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/0*50coYPiud3mE8e3G.png",
  },
  {
    title: "Django",
    description: "The all you need about Django." ,
    imageUrl: "https://www.emizentech.com/blog/wp-content/uploads/sites/2/2022/07/Python-web-framework-django.jpg",
  },
  {
    title: "Android / IOS",
    description: "Start coding mobile phone apps.",
    imageUrl: "https://www.gizchina.com/wp-content/uploads/images/2023/06/Android-vs-ios.jpg",
  },
  {
    title: "Automation",
    description: "Automate processes not only in Python.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


const CardsContainer: React.FC = () => {
  return (
    <div className="my-8">
      {/* Centered headline */}
      <div className="text-center my-8">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-200">Get to know about something</h2>
      </div>

      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <div key={index} className={`col-span-1 animate-fade-in-up delay-${index * 100}`}>
            <Card title={card.title} description={card.description} imageUrl={card.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
