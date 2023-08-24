import { v4 as uuidv4 } from 'uuid';

import { Link } from "react-router-dom"

import { BiSearch } from "react-icons/bi"

import { Flag } from './Flag'

import jsonData from '../../data.json'

export const Home = () => {
    return (
        <main className='max-w-6xl mx-auto'>
            <div className="top flex justify-between items-center">
                <div className="search-filter my-10">
                    <div className="search relative">
                        <div className='absolute top-0 translate-y-[22px] ml-5'>
                            <BiSearch />
                        </div>
                        <input type="text" placeholder='Search for a country...' className='pl-12 h-14 w-[400px] rounded-lg shadow-lg' />
                    </div>
                </div>
                <div className="results">
                    <div className="filter">
                        <select defaultValue={"default"} className='h-14 w-[200px] pl-5 rounded-lg shadow-lg text-semibold text-base border-r-8 border-transparent px-4'>
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

            <div className="grid grid-cols-4 grid-rows-2 gap-16 mb-10">
                {jsonData.map((country) => (
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
    )
}

