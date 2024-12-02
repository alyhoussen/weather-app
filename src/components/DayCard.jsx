import { getDayWeather } from "../helpers"
import { minMax } from "../helpers"

function DayCard({meteo,handleClick}) {
  const tmp = minMax(meteo.temperature_2m)
  const weather = getDayWeather(meteo.weathercode)
  const Icon = weather.icon

  return (
    <div onClick={handleClick} className="p-[1rem] cursor-pointer mb-3 card rounded-[20px] min-w-[100%] flex-1 xs:min-w-[350px]">
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-3">
          <Icon className="text-[25px]" /> 
          <p className="capitalize">{meteo.time[0].dayName} {meteo.time[0].date.split(" ")[0]}</p>
        </div>
        <p className="float-end">{tmp.max} / <span className="text-[#ccc]">{tmp.min}</span> °C</p>
      </div>
      <h1 className="text-[10px] underline text-right pt-3 "><span className="bg-white text-primary rounded-[30px] px-[0.5rem] py-[0.3rem]">TAP TO SEE</span></h1>
    </div>
  )
}

export default DayCard