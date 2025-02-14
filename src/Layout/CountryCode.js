import { useState } from "react";
import us from "./flags/usa.png";
import gb from "./flags/gb.png";
import ca from "./flags/ca.png";
import au from "./flags/au.png";
import de from "./flags/de.png";
import fr from "./flags/fr.png";
import ind from "./flags/in.png";
import nig from "./flags/ng.png";

const countries = [
  { name: "United States", code: "+1", flag: us },
  { name: "United Kingdom", code: "+44", flag: gb },
  { name: "Canada", code: "+1", flag: ca },
  { name: "Australia", code: "+61", flag: au },
  { name: "Germany", code: "+49", flag: de },
  { name: "France", code: "+33", flag: fr },
  { name: "India", code: "+91", flag: ind },
  { name: "Nigeria", code: "+234", flag: nig },
];

function CountrySelect() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleSelect = (event) => {
    const countryCode = event.target.value;
    const country = countries.find((c) => c.code === countryCode);
    setSelectedCountry(country);
  };

  return (
    <div>
      <div className="relative w-20 flex items-center">
        {/* Flag Image (Positioned on the Left) */}
        <div className="absolute left-2 flex items-center">
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.name}
            className="w-6 h-6 rounded-full border border-gray-300"
          />
        </div>

        {/* Select Dropdown */}
        <select
          className="w-full p-3 pl-10 border outline-pink-700 rounded-md shadow-sm appearance-none cursor-pointer"
          onChange={handleSelect}
          value={selectedCountry.code}
        >
          {countries.map((country, index) => (
            <option key={index} value={country.code}>
              {country.name} ({country.code})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CountrySelect;
