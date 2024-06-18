import Link from 'next/link';
import React from 'react';

const Links = () => {
  const links = [
    {
      title: 'Homepage',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.path}
          className="block md:text-white mr-4"
        >
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default Links;
