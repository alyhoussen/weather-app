import {AiFillEye} from "react-icons/ai"
import {MdOutlineWindPower} from "react-icons/md"
import { BsThermometer } from "react-icons/bs"
import {WiHumidity} from "react-icons/wi"

function MeteoDetail({meteo}) {
  if(meteo){
    const date = new Date()
    const index = date.getHours()
    const visibility = meteo.visibility[index]
    const windspeed = meteo.windspeed_10m[index]
    const winddirection = meteo.winddirection_10m[index]
    const humidity = meteo.relative_humidity_2m[index]
    const feels = meteo.apparent_temperature[index]

    return (
      <div className="pb-[1rem] flex flex-col gap-3">
        <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <AiFillEye  className="w-[16px] h-[16px]"/> 
                  Visibility 
                </div>
                <p>{visibility} KM</p>
        </div>
        <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <BsThermometer  className="w-[16px] h-[16px]"/> 
                  Felt temperature
                </div>
                <p>{feels} °C</p>
        </div>
        <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <WiHumidity className="w-[16px] h-[16px]"/> 
                  Humidity
                </div>
                <p>{humidity} %</p>
        </div>
        <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <MdOutlineWindPower  className="w-[16px] h-[16px]"/> 
                  Wind
                </div>
                <p>{windspeed} KM {winddirection}</p>
        </div>
      </div>
  )
  }
  return <div className="flex justify-center"><div className="spinner"></div></div>
}

export default MeteoDetail