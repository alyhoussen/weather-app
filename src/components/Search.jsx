import { useRef, useState } from "react"
import {FaSearch} from "react-icons/fa"


function Search({styles, getMeteos, setLocation, setPosition}) {
  const [suggestions, setSuggestions] = useState([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const abortControllerRef = useRef(null)
  const getSuggestions = async ()=>{
    if (abortControllerRef.current){
      abortControllerRef.current.abort()
    }

    const controller = new AbortController()
    abortControllerRef.current = controller

    try{
      setLoading(true)
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${input}&format=json&addressdetails=1&limit=20`,{signal: controller.signal})
      const data = await response.json();
      setSuggestions(data) 
      return 1
    }catch(err){
      console.log(err.message)
    }finally{
      setLoading(false)
    }
  }
  const handleOnChange = (value)=>{
    setInput(value);
    getSuggestions()
    
  }
  const handleSuggestionClick = async (lat, lng, ville)=>{
    getMeteos(lat, lng)
    setLocation(ville)
    setPosition((prev)=> ({...prev, isLocal: false}))
    setInput("")
  }
  // const
  return (
    <div className="mb-3">
      <form onSubmit={(e)=>{e.preventDefault()}} className={` ${styles} p-[1rem] py-[0.5rem] card rounded-[50px] min-w-[100%] flex-1 items-center xs:min-w-[350px] justify-between gap-2`}>
          <label htmlFor="search" className="cursor-pointer"><FaSearch /></label>
          <input type="search" id="search" value={input} onChange={(e)=>{handleOnChange(e.target.value)}} className="flex-1 outline-none bg-transparent" placeholder="Search a City"/>
      </form>
      {input &&
        <h2 className="bg-white  mx-4 mt-1 t-2 text-primary p-2 px-4 rounded-[5px]">  
        {suggestions.length == 0 ?
          "No suggestions"
          : (suggestions && <> {loading ? <div className="flex justify-center p-[1.5rem]"><div className="spinner"></div></div>:suggestions.map((suggestion,index)=>( <p key={index} className="cursor-pointer" onClick={()=> {handleSuggestionClick(suggestion.lat,suggestion.lon,`${suggestion.adrres.state} ${suggestion.address.city} ${suggestion.address.country}`)}}>{suggestion.adrres.state} {suggestion.address.city} {suggestion.address.country}</p> ))}</>)
        }
        </h2>
      }
    </div>
  )
}

export default Search