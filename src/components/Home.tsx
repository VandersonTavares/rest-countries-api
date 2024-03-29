import { v4 as uuidv4 } from "uuid";

import { Link } from "react-router-dom";

import { BiSearch } from "react-icons/bi";

import { Flag } from "./Flag";

import jsonData from "../../data.json";

import { useEffect, useState } from "react";

export const Home = () => {

    const [loadItens, setLoadItens] = useState(8)

    useEffect(() => {
        const handleScroll = (event: Event) => {
            const target = event.target as Document
            const scrollHeight = target.documentElement.scrollHeight
            const currentHeight = target.documentElement.scrollTop + window.innerHeight
            if(currentHeight + 1 >= scrollHeight){
                setLoadItens(loadItens + 4)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    },[loadItens])

return (

    <main className='max-w-6xl mx-auto'>
        <div className="top flex flex-col md:flex-row justify-between items-center">
            <div className="search-filter my-10">
                <div className="search relative -mb-5 sm:mb-0">
                    <div className='absolute top-0 translate-y-[22px] ml-5'>
                        <BiSearch />
                    </div>
                    <input type="text" placeholder='Search for a country...' className='pl-12 h-14 w-full md:w-[400px] rounded-lg shadow-lg' />
                </div>
            </div>
            <div className="results mb-5 md:mb-0">
                <div className="filter">
                    <select defaultValue={"default"} className='h-14 w-full md:w-[200px] lg:w-[250px] pl-5 rounded-lg shadow-lg text-semibold text-base border-r-8 border-transparent px-4'>
                        <option value="default">Filter By Region</option>
                        <option value="africa">Africa</option>
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                        <option value="europa">Europa</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 sm:gap-2 md:gap-5 lg:gap-16 mb-10">
            {jsonData.slice(0, loadItens).map((country) => (
                <Link to={`/details/${country.name}`} key={uuidv4()} className='rounded overflow-hidden drop-shadow-md bg-white'>
                    <Flag
                        name={country.name}
                        population={country.population}
                        capital={country.capital}
                        region={country.region}
                        flagUrl={country.flags.svg}
                    />
                </Link>
            ))}
        </div>
    </main>
);
};
