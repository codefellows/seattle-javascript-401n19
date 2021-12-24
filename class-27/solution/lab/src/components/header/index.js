function Header({ title }) {
  return (
    <header>
      <h1 title="Header" data-testid="header" className="header">{title}</h1>
    </header>
  );
}

export default Header;
