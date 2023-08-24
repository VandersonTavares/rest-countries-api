import { useParams, Link } from 'react-router-dom';

import jsonData from "../../data.json"

export const Details = () => {
    const { countryName } = useParams()

    const country = jsonData.find((country) => country.name === countryName);

    if (!country) {
        return <div>Country not found.</div>;
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <Link to={"/"}>
                    <button>Voltar</button>
                </Link>
            </div>
            <div className="details h-[calc(100vh-110px)] flex items-center">
                <div className="left flag-img w-1/2">
                    <img src={country.flags.png} alt="" />
                </div>
                <div className="right infos w-1/2">
                    <h1 className="font-bold text-3xl mb-5">{countryName}</h1>
                    <div className="detailed-infos flex justify-between items-center">
                        <div>
                            <p className="font-semibold">Native Name: <span className="font-normal">{country.name}</span></p>
                            <p className="font-semibold">Population: <span className="font-normal">{country.population}</span></p>
                            <p className="font-semibold">Region: <span className="font-normal">{country.region}</span></p>
                            <p className="font-semibold">Sub Region: <span className="font-normal">{country.subregion}</span></p>
                            <p className="font-semibold">Capital: <span className="font-normal">{country.capital}</span></p>
                        </div>
                        <div>
                            <p className="font-semibold">Top Level Domain: <span className="font-normal">{country.topLevelDomain}</span></p>
                            <p className="font-semibold">Currencies: <span className="font-normal">Belgie</span></p>
                            <p className="font-semibold">languages: <span className="font-normal">Belgie</span></p>
                        </div>
                    </div>
                    <div className="flex mt-10">
                        <h1 className="font-semibold">Border Countries: </h1>
                        <div className="flex gap-4">
                            <span className="px-2 py-1 text-sm w-20 text-center shadow-sm">France</span>
                            <span className="px-2 py-1 text-sm w-20 text-center shadow-sm">Germany</span>
                            <span className="px-2 py-1 text-sm w-20 text-center shadow-sm">Netherlands</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
