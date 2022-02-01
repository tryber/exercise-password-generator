import React from 'react';

class Header extends React.Component {
  render() {
    const password = undefined;
    return (
      <header>
        <h1>Password Generator</h1>
        <section>
          <h3>{password || 'CLICK GENERATE'}</h3>
        </section>
      </header>
    )
  }
}

export default Header;
