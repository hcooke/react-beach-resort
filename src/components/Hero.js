import React from 'react'
console.log("Hero");

export default function Hero({children, hero}) {
  return (
    <header className={hero}>{children}</header>
  );
}

Hero.defaultProps = {
  hero: 'defaultHero'
}
