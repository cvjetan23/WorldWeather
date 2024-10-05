type HeaderProps = {
  onSectionChange: (section: string) => void;
};

const Header = ({ onSectionChange }: HeaderProps) => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <h1>WeatherApp</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => onSectionChange('daily')}
              className="hover:underline focus:outline-none"
            >
              Daily Forecast
            </button>
          </li>
          <li>
            <button
              onClick={() => onSectionChange('weekly')}
              className="hover:underline focus:outline-none"
            >
              Weekly Forecast
            </button>
          </li>
          <li>
            <button
              onClick={() => onSectionChange('monthly')}
              className="hover:underline focus:outline-none"
            >
              Monthly Forecast
            </button>
          </li>
          <li>
            <button
              onClick={() => onSectionChange('world')}
              className="hover:underline focus:outline-none"
            >
              World Forecast
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;