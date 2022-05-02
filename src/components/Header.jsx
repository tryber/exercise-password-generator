import { useSelector } from 'react-redux';

function Header() {
  const { password } = useSelector((state) => state.password);

  return (
    <header>
      <h2>Password Generator</h2>
      <section>{password || 'CLICK GENERATE'}</section>
    </header>
  );
}

export default Header;