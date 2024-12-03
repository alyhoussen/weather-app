import { useState } from "react"
import {FaSearch} from "react-icons/fa"


function Search({styles, getMeteos, setLocation, setPosition}) {
  const [suggestions, setSuggestions] = useState([])
  const [input, setInput] = useState("")
  const getSuggestions = async ()=>{
    try{
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${input}&format=json&addressdetails=1&limit=10`)
      const data = await response.json();
      setSuggestions(data) 
      return 1
    }catch(err){
      console.log(err.message)
    }
  }
  const handleOnChange = (value)=>{
    setInput(value);
    if( !(value.lastIndexOf(" ") >= 0)){ 
      getSuggestions()
    }
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
        {input.lastIndexOf(" ") >= 0 ?
          "No suggestions"
          : (suggestions && <>{suggestions.map((suggestion,index)=>( <p key={index} className="cursor-pointer" onClick={()=> {handleSuggestionClick(suggestion.lat,suggestion.lon,`${suggestion.name} ${suggestion.address.country}`)}}>{suggestion.name} {suggestion.address.country}</p> ))}</>)
        }
        </h2>
      }
    </div>
  )
}

export default Search