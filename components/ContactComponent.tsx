import React from 'react';

const socials = [
  {
    name: 'Facebook',
    imageUrl: '/fb.png', // Ensure the path to your image is correct
    url: 'https://www.facebook.com/',
  },
  {
    name: 'Telegram',
    imageUrl: '/telegram.png', // Ensure the path to your image is correct
    url: 'https://telegram.org/',
  },
  {
    name: 'YouTube',
    imageUrl: '/yt.png', // Ensure the path to your image is correct
    url: 'https://www.youtube.com/',
  },
  {
    name: 'Twitter',
    imageUrl: '/twitter.png', // Ensure the path to your image is correct
    url: 'https://twitter.com/',
  },
];

const Contact: React.FC = () => {
  return (
    <div className="py-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-down">Contact Us</h2>
      <div className="max-w-lg mx-auto grid grid-cols-2 gap-8">
        {socials.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transform transition-all duration-300 hover:opacity-75 hover:scale-110 animate-fade-in-up delay-${index * 100}`}
          >
            <img
              src={social.imageUrl}
              alt={social.name}
              className="w-24 h-24 mx-auto"
            />
            <span className="text-xl font-semibold text-white mt-2">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
