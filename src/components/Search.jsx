import { useState } from "react"
import {FaSearch} from "react-icons/fa"


function Search({styles, getMeteos, setLocation, setPosition}) {
  const [suggestions, setSuggestions] = useState([])
  const [input, setInput] = useState("")
  const getSuggestions = async ()=>{
    try{
      const response = await fetch(`http://api.geonames.org/searchJSON?name_startsWith=${input}&maxRows=10&username=dhaxdev`)
      const data = await response.json();
      console.log(data)
      alert("Suggestions")
      setSuggestions(data.geonames) 
    }catch(err){
      alert(err.message)
      console.log(err.message)
    }
  }
  const handleOnChange = (value)=>{
    setInput(value);
    console.log("inputChanged")
    if( !(value.lastIndexOf(" ") >= 0)){ 
      alert("Input was changed again")
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
          : (suggestions && <>{suggestions.map((suggestion,index)=>( <p key={index} className="cursor-pointer" onClick={()=> {handleSuggestionClick(suggestion.lat,suggestion.lng,`${suggestion.name} ${suggestion.countryName}`)}}>{suggestion.name} {suggestion.countryName}</p> ))}</>)
        }
        </h2>
      }
    </div>
  )
}

export default Search