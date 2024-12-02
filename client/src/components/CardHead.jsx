

function CardHead({ meteo,ville}) {
  if(meteo){
    const date = new Date()
    const index = date.getHours()
    const Icon = meteo.weathercode[index].icon
    return (
      <div className="flex gap-3 items-center">
          <Icon className = "text-[60px]" />
          <div>
              <h2 className="font-semibold text-[20px]">{ville.toUpperCase()}</h2>
              <h2 className="font-regular text-[14px]">{meteo.time[0].dayName}  {meteo.time[0].date.split(" ")[0]} {`${(new Date()).getHours()}:${(new Date()).getMinutes()}`}</h2>
          </div>
      </div>
      )
  }
  return <div className="flex justify-center"><div className="spinner"></div></div>
}

export default CardHead