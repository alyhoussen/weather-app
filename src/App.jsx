import { Suspense, useEffect, useState } from "react"
import CardCenter from "./components/CardCenter"
import CardHead from "./components/CardHead"
import DayCard from "./components/DayCard"
import MeteoDetail from "./components/MeteoDetail"
import Search from "./components/Search"
import { weatherCodeToDetails } from "./helpers"
import Header from "./components/Header"
import { MdWarning } from "react-icons/md"
import ModalCard from "./components/modalCard"


const addDayNames = (data) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  return data.map((timestamp) => {
    const date = new Date(timestamp);
    return {
      date: timestamp.split("T")[0] +" "+ timestamp.split("T")[1],
      dayName: days[date.getUTCDay()]
    };
  });
};

const codeToDirection = (angle)=> {
  // Normaliser l'angle pour qu'il soit entre 0 et 360
  angle = angle % 360;

  // Objet de mappage des angles aux directions
  const directions = {
      0: "N",
      45: "NE",
      90: "E",
      135: "SE",
      180: "S",
      225: "SW",
      270: "W",
      315: "NW"
  };

  // Trouver l'angle le plus proche
  const closestAngle = Object.keys(directions).reduce((prev, curr) => 
      Math.abs(curr - angle) < Math.abs(prev - angle) ? curr : prev
  );

  // Retourner la direction correspondante
  return directions[closestAngle];
}

const arrangeData = (data)=>{
      const createEmptyMeteo = () => (
       { 
          time:[],
          temperature_2m:[],
          apparent_temperature:[],
          weathercode:[],
          visibility:[],
          relative_humidity_2m:[],
          windspeed_10m:[],
          winddirection_10m:[]
        }
      )

      let arrangedData = [
        createEmptyMeteo(),
        createEmptyMeteo(),
        createEmptyMeteo(),
        createEmptyMeteo(),
        createEmptyMeteo(),
        createEmptyMeteo(),
        createEmptyMeteo()
      ]
      for(let i=0; i< (24*arrangedData.length);i++){
        if(i<24){
          arrangedData[0].time.push(data.time[i])
          arrangedData[0].temperature_2m.push(data.temperature_2m[i])
          arrangedData[0].weathercode.push(weatherCodeToDetails(data.weathercode[i]))
          arrangedData[0].relative_humidity_2m.push(data.relative_humidity_2m[i])
          arrangedData[0].windspeed_10m.push(data.windspeed_10m[i])
          arrangedData[0].winddirection_10m.push(codeToDirection(data.winddirection_10m[i]))
          arrangedData[0].apparent_temperature.push(data.apparent_temperature[i])
          arrangedData[0].visibility.push(data.visibility[i])
        } else if(i<48){
          arrangedData[1].time.push(data.time[i])
          arrangedData[1].temperature_2m.push(data.temperature_2m[i])
          arrangedData[1].weathercode.push(weatherCodeToDetails(data.weathercode[i]))
          arrangedData[1].relative_humidity_2m.push(data.relative_humidity_2m[i])
          arrangedData[1].windspeed_10m.push(data.windspeed_10m[i])
          arrangedData[1].winddirection_10m.push(codeToDirection(data.winddirection_10m[i]))
          arrangedData[1].apparent_temperature.push(data.apparent_temperature[i])
          arrangedData[1].visibility.push(data.visibility[i])
        } else if(i<72){
          arrangedData[2].time.push(data.time[i])
          arrangedData[2].temperature_2m.push(data.temperature_2m[i])
          arrangedData[2].weathercode.push(weatherCodeToDetails(data.weathercode[i]))
          arrangedData[2].relative_humidity_2m.push(data.relative_humidity_2m[i])
          arrangedData[2].windspeed_10m.push(data.windspeed_10m[i])
          arrangedData[2].winddirection_10m.push(codeToDirection(data.winddirection_10m[i]))
          arrangedData[2].apparent_temperature.push(data.apparent_temperature[i])
          arrangedData[2].visibility.push(data.visibility[i])
        }
        else if(i<96){
          arrangedData[3].time.push(data.time[i])
          arrangedData[3].temperature_2m.push(data.temperature_2m[i])
          arrangedData[3].weathercode.push(weatherCodeToDetails(data.weathercode[i]))
          arrangedData[3].relative_humidity_2m.push(data.relative_humidity_2m[i])
          arrangedData[3].windspeed_10m.push(data.windspeed_10m[i])
          arrangedData[3].winddirection_10m.push(codeToDirection(data.winddirection_10m[i]))
          arrangedData[3].apparent_temperature.push(data.apparent_temperature[i])
          arrangedData[3].visibility.push(data.visibility[i])
        }
        else if(i<120){
          arrangedData[4].time.push(data.time[i])
          arrangedData[4].temperature_2m.push(data.temperature_2m[i])
          arrangedData[4].weathercode.push(weatherCodeToDetails(data.weathercode[i]))
          arrangedData[4].relative_humidity_2m.push(data.relative_humidity_2m[i])
          arrangedData[4].windspeed_10m.push(data.windspeed_10m[i])
          arrangedData[4].winddirection_10m.push(codeToDirection(data.winddirection_10m[i]))
          arrangedData[4].apparent_temperature.push(data.apparent_temperature[i])
          arrangedData[4].visibility.push(data.visibility[i])
        }
        else if(i<144){
          arrangedData[5].time.push(data.time[i])
          arrangedData[5].temperature_2m.push(data.temperature_2m[i])
          arrangedData[5].weathercode.push(weatherCodeToDetails(data.weathercode[i]))
          arrangedData[5].relative_humidity_2m.push(data.relative_humidity_2m[i])
          arrangedData[5].windspeed_10m.push(data.windspeed_10m[i])
          arrangedData[5].winddirection_10m.push(codeToDirection(data.winddirection_10m[i]))
          arrangedData[5].apparent_temperature.push(data.apparent_temperature[i])
          arrangedData[5].visibility.push(data.visibility[i])
        }
        else if(i<168){
          arrangedData[6].time.push(data.time[i])
          arrangedData[6].temperature_2m.push(data.temperature_2m[i])
          arrangedData[6].weathercode.push(weatherCodeToDetails(data.weathercode[i]))
          arrangedData[6].relative_humidity_2m.push(data.relative_humidity_2m[i])
          arrangedData[6].windspeed_10m.push(data.windspeed_10m[i])
          arrangedData[6].winddirection_10m.push(codeToDirection(data.winddirection_10m[i]))
          arrangedData[6].apparent_temperature.push(data.apparent_temperature[i])
          arrangedData[6].visibility.push(data.visibility[i])
        }
      }

      arrangedData.forEach(element => {
        element.time = addDayNames(element.time)
      });

      return arrangedData
}

function App() {
  const [meteos, setMeteos] = useState()
  const [meteo, setMeteo] = useState()
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState("")
  const [toggleModal, setToggleModal] = useState({isTrue: false,meteo:{}})
  const [position, setPosition] = useState({lat:0,lon:0,isLocal: true})
  const fetch7DaysWeather = async (latitude, longitude) =>{
    // Obtenir la date actuelle et calculer la date de fin
    const today = new Date().toISOString().split("T")[0]; // Format AAAA-MM-JJ
    const endDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]; // 7 jours après
  
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,relative_humidity_2m,windspeed_10m,winddirection_10m,weathercode,visibility&timezone=auto&start_date=${today}&end_date=${endDate}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        setMeteos(arrangeData(data.hourly))
        console.log(arrangeData(data.hourly))
        setMeteo(arrangeData(data.hourly)[0])
    } catch (error) {
        console.error("Erreur lors de la récupération des prévisions :", error);
    }
  }

  const [location, setLocation] = useState("Ville actuelle")
  
  const getCityName = (latitude, longitude)=> {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = data.address ? (data.address.city +" "+data.address.country) : "Ville inconnue";
            setLocation(city)
        })
        .catch(error => console.error("Erreur lors de la récupération de la ville :", error));
  }
  useEffect(()=>{
    if("geolocation" in navigator && position.isLocal){
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          fetch7DaysWeather(latitude,longitude)
          getCityName(latitude, longitude)
        }
      ,(err)=>{
        console.error(err.message)
        setErr(()=>(
          <h1 className=""> 
            <div className="flex text-[#FF7077FF] items-center gap-2 justify-center"><MdWarning className="text-[25px]" /><div className="text-[18px]">Failed to get your position.</div></div>
            <div className="text-center text-[14px]">Make sure your divice geolocation is activated and <a href="" className="underline text-[#A4ACFFFF]">refresh</a>  the page again.</div>
          </h1>)
          )
      })
    }
  },[position.isLocal])

  const Loader = ()=> (<div className="flex justify-center p-[1.5rem] rounded-[20px] xs:min-w-[350px]"><div className="spinner"></div></div>)

  return (
    <Suspense fallBack={<Loader/>}>
        <Header />
        {toggleModal.isTrue && <ModalCard ville={location} meteo={toggleModal.meteo} toggle={()=>{setToggleModal((prev)=>({...toggleModal,isTrue:!prev.isTrue}))}} />}
        <div className="xs:flex h-[70%] justify-center mt-[5rem] sm:p-[2rem] p-[1rem] gap-4 flex-wrap text-white">
          <div>
            <Search styles= "flex" getMeteos={ fetch7DaysWeather } setLocation={setLocation} setPosition={setPosition} />
            {!position.isLocal && <h1 className="flex justify-center cursor-pointer p-[2rem]" onClick={()=>{setLoading(true);setPosition((prev)=>({...prev,isLocal: true}));setLoading(false)}}><span className="bg-white p-2 px-4 text-primary rounded-[5px]">Local weather</span></h1>}
             {!meteo && 
                err }
            {meteo && !loading?
              <div className="p-[1.5rem] pt-[0.5rem] rounded-[20px] xs:w-[350px]">
                <CardHead ville={location} meteo={meteo} />
                <CardCenter meteo={meteo} />
                <MeteoDetail meteo={meteo}/>
              </div>: <Loader />

            }
          </div>
          <div className="xs:my-0 my-3">
            <h1 className="text-[16px] font-semibold p-[1rem] pt-0">NEXT DAYS FORECAST</h1>
            {meteos && !loading ?
              <div>
                {
                  meteos.map((meteo, index)=> (index>0 && (<DayCard meteo={meteo} key={index} handleClick={()=>{setToggleModal({isTrue:true,meteo: meteo})}} />)))
                }
              </div>: <Loader />
          }
          </div>
        </div>
    </Suspense>
  )
}


export default App
