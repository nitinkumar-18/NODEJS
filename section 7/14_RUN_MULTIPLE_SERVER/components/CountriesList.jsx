// import React, { useEffect, useState } from 'react'
// // import countriesData from '../countriesData'
// import CountryCard from './CountryCard'
// import CountriesListShimmer from './CountriesListShimmer'

// export default function CountriesList({ query }) {
//   const [countriesData, setCountriesData] = useState([])

//   // const [filteredData, setQuery] = useFilter(data, () => '')

//   useEffect(() => {
//    fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => {
//         setCountriesData(data)
//       })
//   }, [])

//   if (!countriesData.length) {
//     return <CountriesListShimmer />
//   }

//   return (
//     <>
//       <div className="countries-container">
//         {countriesData
//           .filter((country) =>
//             country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
//           )
//           .map((country) => {
//             return (
//               <CountryCard
//                 key={country.name.common}
//                 name={country.name.common}
//                 flag={country.flags.svg}
//                 population={country.population}
//                 region={country.region}
//                 capital={country.capital?.[0]}
//                 data={country}
//               />
//             )
//           })}
//       </div>
//     </>
//   )
// }






















import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(
      // ERROR FIX HERE
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
    )
      .then((res) => res.json())
      .then((data) => setCountriesData(data))
      .catch((err) => console.log("Error fetching countries:", err));
  }, []);

  // show loading shimmer while data loads
  if (!countriesData.length) {
    return <CountriesListShimmer />;
  }

  const search = query.toLowerCase();

  return (
    <div className="countries-container">
      {countriesData
        .filter(
          (country) =>
            country.name.common.toLowerCase().includes(search) ||
            country.region.toLowerCase().includes(search)
        )
        .map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0] || "N/A"}
            data={country}
          />
        ))}
    </div>
  );
}