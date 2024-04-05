// components/CardsContainer.tsx
import React from 'react';
import CardPortfolio from './CardPortfolio';

const cardsData = [
  {
    title: "www.innotechcloud.pl",
    description: "The Cloud Business Solutions",
    imageUrl: "/innotech.png",
    path: "https://www.innotechcloud.pl", // Added path
  },
  {
    title: "www.cashify.gold",
    description: "The shop with gold.",
    imageUrl: "cashifygold.png",
    path: "https://cashify.gold/", // Added path
  },
  {
    title: "www.energo-expert-plus.pl",
    description: "The construction company.",
    imageUrl: "energoexpert.png",
    path: "https://www.energo-expert-plus.pl", // Added path
  },
  {
    title: "www.arbmidasnft.com",
    description: "The NFT project.",
    imageUrl: "arbmidas.png",
    path: "https://www.arbmidasnft.com", // Added path
  },
  {
    title: "3D-art-gallery",
    description: "The NFT 3D Gallery",
    imageUrl: "3dgallery.png",
    path: "https://www.arbmidasnft.com/3D-art-gallery/", // Added path
  },
  {
    title: "www.mysolary.pl", 
    description: "The photovoltaic construction company.",
    imageUrl: "mysolary.png",
    path: "https://www.mysolary.pl", // Added path
  },
  {
    title: "www.bielawa-box24.pl", 
    description: "The Box Website.",
    imageUrl: "bielawabox24.png",
    path: "https://bielawa-box24.pl/", // Added path
  },
  {
    title: "www.nupogodi.online/", 
    description: "The Memecoin website.",
    imageUrl: "nupogodi.png",
    path: "https://www.nupogodi.online/", // Added path
  },
  
];

const PortfolioComponent: React.FC = () => {
  return (
    <div>
      {/* Container for the GitHub image */}
      <div className="flex justify-center items-center bg-white shadow-lg rounded-lg mx-4 my-6 p-2 transition duration-500 hover:shadow-xl">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
          <img src="/github.png" alt="GitHub Logo" className="h-20" /> {/* Adjust the height as needed */}
        </a>
      </div>

      {/* Container for the cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`col-span-1 animate-fade-in-up delay-${index * 100}`}
          >
            <CardPortfolio
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              path={card.path}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioComponent;