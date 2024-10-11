import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [section, setSection] = useState("daily");

  const renderSection = () => {
    switch (section) {
      case "daily":
        return <h2>Daily Forecast</h2>;
      case "weekly":
        return <h2>Weekly Forecast</h2>;
      case "monthly":
        return <h2>Monthly Forecast</h2>;
      default:
        return <h2>Daily Forecast</h2>;
    }
  };

  return (
    <>
      <Header onSectionChange={setSection} />
      <main>{renderSection()}</main>
      <Footer />
    </>
  );
};

export default App;
