import { useParams, Link } from 'react-router-dom';
import { useState } from "react"

import { BsArrowLeft } from "react-icons/bs"

import jsonData from "../../data.json"

export const Details = () => {
    const { countryName } = useParams()

    const [country] = useState(jsonData.find((country) => country.name === countryName))

    if (!country) {
        return <div>Country not found.</div>;
    }

    // Filtrar informações dos países vizinhos
    const neighborCountries = country.borders?.map((borderCountryCode) => {
        return jsonData.find((country) => country.alpha3Code === borderCountryCode);
    });


    return (
        <div className="max-w-6xl mx-auto">
            <div className='my-16 mx-5'>
                <Link to={"/"}>
                    <button className='px-5 py-2 bg-white rounded shadow-md flex items-center gap-2'><BsArrowLeft /> Back</button>
                </Link>
            </div>
            <div className="details md:flex items-center gap-5 md:gap-28 mx-5">
                <div className="left flag-img md:w-1/2">
                    <img src={country.flags.png} alt={country.nativeName} className='w-full'/>
                </div>
                <div className="right infos md:w-1/2 text-center md:text-left mt-5">
                    <h1 className="font-bold text-3xl mb-5">{countryName}</h1>
                    <div className="detailed-infos lg:flex justify-between items-center">
                        <div>
                            <p className="font-semibold">Native Name: <span className="font-normal">{country.name}</span></p>
                            <p className="font-semibold">Population: <span className="font-normal">{country.population.toLocaleString()}</span></p>
                            <p className="font-semibold">Region: <span className="font-normal">{country.region}</span></p>
                            <p className="font-semibold">Sub Region: <span className="font-normal">{country.subregion}</span></p>
                            <p className="font-semibold">Capital: <span className="font-normal">{country.capital}</span></p>
                        </div>
                        <div>
                            <p className="font-semibold">Top Level Domain: <span className="font-normal">{country.topLevelDomain}</span></p>
                            <div className='currencies'>
                                <ul className='flex gap-2 mt-4 sm:mt-0'>
                                    <p className='font-semibold'>Currencies: </p>
                                    {country.currencies?.map((currency, index) => (
                                        <li key={currency.code}>{currency.name}{index !== country.currencies.length - 1 && ','}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="languages">
                                <ul className='flex gap-2'>
                                    <p className='font-semibold'>Languages:</p>
                                    {country.languages.map((lang, index) => (
                                        <li key={lang.name}>{lang.name}{index !== country.languages.length - 1 && ','}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-10">
                        <h1 className="font-semibold">Border Countries: </h1>
                        <div className='flex flex-wrap gap-2 ml-5'>
                            {neighborCountries?.map((neighbor) => (
                                <div key={neighbor?.alpha3Code} className="text-sm px-2 py-2 text-center shadow bg-white rounded">{neighbor?.name}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
