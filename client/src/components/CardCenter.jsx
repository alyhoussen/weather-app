
function CardCenter({meteo}) {
  if(meteo){
    const date = new Date()
    const index = date.getHours()
    
    const tmp = meteo.temperature_2m[index]
    const weather = meteo.weathercode[index]
    
    return (
      <div className='p-[3rem]'>
        <div className='flex justify-center'>
            <h1 className='text-[80px] leading-[0.8]'>{tmp}</h1>
            <p className='font-semibold'>°C</p>
        </div>
        <p className='text-center py-[1rem]'>{weather.text}</p>
      </div>
    )
  }
  return <div className="flex justify-center"><div className="spinner"></div></div>
}

export default CardCenter