// components/CardPortfolio.tsx
import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  path: string; // Add path to your props
}

const CardPortfolio: React.FC<CardProps> = ({ title, description, imageUrl, path }) => {
  return (
    <div className="flex flex-col items-stretch bg-white dark:bg-slate-950 text-[#333] dark:text-white shadow-xl rounded-lg overflow-hidden max-w-sm mx-auto">
      <figure className="aspect-w-16 aspect-h-9">
        <img src={imageUrl} alt={title} className="object-cover" />
      </figure>
      <div className="flex-grow flex flex-col p-4">
        <h2 className="text-lg font-bold truncate">{title}</h2>
        <p className="flex-grow text-sm">{description}</p>
        <div className="mt-4">
          <Link href={path} passHref>
            <div className="btn btn-primary w-full">Check Live</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardPortfolio;
