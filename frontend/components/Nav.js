import React from 'react';
import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/">
      <a>home</a>
    </Link>
    <Link href="/sell">
      <a>sell</a>
    </Link>
  </div>
);

export default Header;
