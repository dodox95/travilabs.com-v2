// components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    // You can adjust "max-w-sm" to the desired width. Other options include max-w-xs, max-w-md, etc.
    <div className="flex flex-col items-stretch bg-base-100 shadow-xl rounded-lg overflow-hidden max-w-sm mx-auto">
      <figure className="aspect-w-16 aspect-h-9">
        <img src={imageUrl} alt={title} className="object-cover" />
      </figure>
      <div className="flex-grow flex flex-col p-4">
        <h2 className="text-lg font-bold truncate">{title}</h2>
        <p className="flex-grow text-sm">{description}</p>
        <div className="mt-4">
          <button className="btn btn-primary w-full">Learn</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
