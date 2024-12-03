import { BsThermometer, BsX } from "react-icons/bs"
import { getDayWeather, minMax} from "../helpers"
import { MdOutlineWindPower } from "react-icons/md"
import { WiHumidity } from "react-icons/wi"
import { AiFillEye } from "react-icons/ai"

function ModalCard({ville, meteo, toggle}) {
    console.log(meteo)
    const tmp = minMax(meteo.temperature_2m)
    const weather = getDayWeather(meteo.weathercode)
    const Icon = weather.icon
    const visibility = minMax(meteo.visibility)
    const windspeed = minMax(meteo.windspeed_10m)
    const humidity = minMax(meteo.relative_humidity_2m)
    const feels = minMax(meteo.apparent_temperature)
    return (
        <div className="fixed h-full w-full bg-[#27272770] z-[10] m-[1rem] flex items-center justify-center text-white">
        <div className="p-[1.5rem] pt-[0.5rem] rounded-[20px] boder-[#dddddd93] border-2 bg-[#27365EE8] xs:w-[350px]">
            <div className="flex justify-end cursor-pointer h-[40px] items-center text-[40px] hover:text-[35px] hover:pr-1"><span onClick={toggle}><BsX /></span></div>
            <div className="flex gap-3 items-center pt-[1rem]">
            <Icon className = "text-[60px]" />
            <div>
                <h2 className="font-semibold text-[20px]">{ville}</h2>
                <h2 className="font-regular text-[14px]">{meteo.time[0].dayName}  {meteo.time[0].date.split(" ")[0]}</h2>
            </div>
            </div>
            <div className='p-[3rem]'>
                <div className='flex justify-center'>
                    <div className="flex items-end"><h1 className='text-[80px] leading-[0.8]'>{tmp.max}</h1><p className="text-[25px] text-[#ccc] min-w-[max-content] ">/{tmp.min}</p></div>
                    <p className='font-semibold'>°C</p>
                </div>
                <p className='text-center py-[1rem]'>{weather.text}</p>
            </div>
            
        <div className="pb-[1rem] flex flex-col gap-3">
            <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center">
                    <AiFillEye  className="w-[16px] h-[16px]"/> 
                    Visibility 
                    </div>
                    <p>{visibility.max} / <span className="text-[#ccc]">{visibility.min}</span> KM</p>
            </div>
            <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center">
                    <BsThermometer  className="w-[16px] h-[16px]"/> 
                    Felt temperature
                    </div>
                    <p>{feels.max} / <span className="text-[#ccc]">{feels.min}</span> °C</p>
            </div>
            <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center">
                    <WiHumidity className="w-[16px] h-[16px]"/> 
                    Humidity
                    </div>
                    <p>{humidity.max} / <span className="text-[#ccc]">{humidity.min}</span> %</p>
            </div>
            <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center">
                    <MdOutlineWindPower  className="w-[16px] h-[16px]"/> 
                    Wind
                    </div>
                    <p>{windspeed.max} / <span className="text-[#ccc]">{windspeed.min}</span> KM </p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default ModalCard