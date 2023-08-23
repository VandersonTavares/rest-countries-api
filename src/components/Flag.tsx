
interface FlagProps {
  name: string
  population: number
  capital?: string
  region: string
  flagUrl: string
}


export const Flag = ( { population, region, capital, name, flagUrl }: FlagProps ) => {
  return (
    <div className='rounded overflow-hidden drop-shadow-md bg-white'>
        <div className="image border h-1/2">
            <img src={flagUrl} alt="brasil-flag" className="inset-0 w-full h-full object-cover"/>
        </div>
        <div className="infos m-5 h-1/2">
            <h1 className='mb-2 font-bold text-lg'>{name}</h1>
            <p className='font-semibold'>Population: <span className='font-normal'>{population}</span></p>
            <p className='font-semibold'>Region: <span className='font-normal'>{region}</span></p>
            <p className='font-semibold'>Capital: <span className='font-normal'>{capital}</span></p>
        </div>
    </div>
  )
}
