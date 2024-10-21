/* eslint-disable react/react-in-jsx-scope */
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
              onClick={() => onSectionChange("daily")}
              className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-400 transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Daily Forecast
            </button>
          </li>
          <li>
            <button
              onClick={() => onSectionChange("weekly")}
              className="px-4 py-2 rounded-md bg-blue-400 hover:bg-blue-300 transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Weekly Forecast
            </button>
          </li>
          <li>
            <button
              onClick={() => onSectionChange("monthly")}
              className="px-4 py-2 rounded-md bg-blue-400 hover:bg-blue-300 transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Monthly Forecast
            </button>
          </li>
          <li>
            <button
              onClick={() => onSectionChange("world")}
              className="px-4 py-2 rounded-md bg-blue-400 hover:bg-blue-300 transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-white"
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
