type HeaderProps = {
  onSectionChange: (section: string) => void;
};

const Header = ({ onSectionChange }: HeaderProps) => {
  return (
    <header>
      <div>
        <h1>WeatherApp</h1>
      </div>
      <nav>
        <ul>
          <li><button onClick={() => onSectionChange('daily')}>Daily Forecast</button></li>
          <li><button onClick={() => onSectionChange('weekly')}>Weekly Forecast</button></li>
          <li><button onClick={() => onSectionChange('monthly')}>Monthly Forecast</button></li>
          <li><button onClick={() => onSectionChange('world')}>World Forecast</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
