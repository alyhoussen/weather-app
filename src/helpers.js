import { WiDaySunny, WiCloud, WiCloudy, WiFog, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";

export const weatherCodeToDetails = (weatherCode) => {
    const weatherDetails = {
        0: { text: "Ciel clair", icon: WiDaySunny },
        1: { text: "Principalement clair", icon: WiDaySunny },
        2: { text: "Partiellement nuageux", icon: WiCloud },
        3: { text: "Couvert", icon: WiCloudy },
        45: { text: "Brouillard", icon: WiFog },
        48: { text: "Brouillard givrant", icon: WiFog },
        51: { text: "Bruine légère", icon: WiRain },
        53: { text: "Bruine modérée", icon: WiRain },
        55: { text: "Bruine dense", icon: WiRain },
        56: { text: "Bruine givrée légère", icon: WiRain },
        57: { text: "Bruine givrée dense", icon: WiRain },
        61: { text: "Pluie légère", icon: WiRain },
        63: { text: "Pluie modérée", icon: WiRain },
        65: { text: "Pluie intense", icon: WiRain },
        66: { text: "Pluie givrée légère", icon: WiRain },
        67: { text: "Pluie givrée forte", icon: WiRain },
        71: { text: "Neige légère", icon: WiSnow },
        73: { text: "Neige modérée", icon: WiSnow },
        75: { text: "Neige forte", icon: WiSnow },
        77: { text: "Neige en grains", icon: WiSnow },
        80: { text: "Averses de pluie légères", icon: WiRain },
        81: { text: "Averses de pluie modérées", icon: WiRain },
        82: { text: "Averses de pluie violentes", icon: WiRain },
        85: { text: "Averses de neige légères", icon: WiSnow },
        86: { text: "Averses de neige fortes", icon: WiSnow },
        95: { text: "Orage léger ou modéré", icon: WiThunderstorm },
        96: { text: "Orage avec grêle légère", icon: WiThunderstorm },
        99: { text: "Orage avec grêle forte", icon: WiThunderstorm },
    };

    return weatherDetails[weatherCode] || { text: "Code météo inconnu", icon: WiDaySunny };
};

export const getDayWeather = (weatheCodeArray)=>{
    const code = {
        clair:{nb:0,icon: WiDaySunny },
        nuageux:{nb:0,icon: WiCloud},
        couvert:{nb:0,icon: WiCloudy},
        brouillard:{nb:0,icon: WiFog},
        bruine:{nb:0,icon:WiRain},
        pluie:{nb:0,icon:WiRain},
        neige:{nb:0,icon:WiSnow},
        orage:{nb:0,icon:WiThunderstorm}
    }

    let max = 0
    let weather = {}
    weatheCodeArray.forEach(element => {
        if( element.text.indexOf("Clair")>=0 || element.text.indexOf("clair")>=0){
            code.clair.nb++
        }else if( element.text.indexOf("Nuageux")>=0 || element.text.indexOf("nuageux")>=0){
            code.nuageux.nb++
        }else if( element.text.indexOf("Couvert")>=0 || element.text.indexOf("couvert")>=0){
            code.couvert.nb++
        }
        else if( element.text.indexOf("Brouillard")>=0 || element.text.indexOf("brouillard")>=0){
            code.brouillard.nb++
        }
        else if( element.text.indexOf("Bruine")>=0 || element.text.indexOf("bruine")>=0){
            code.bruine.nb++
        }
        else if( element.text.indexOf("Pluie")>=0 || element.text.indexOf("pluie")>=0){
            code.pluie.nb++
        }
        else if( element.text.indexOf("Neige")>=0 || element.text.indexOf("neige")>=0){
            code.neige.nb++
        }
        else if( element.text.indexOf("Orage")>=0 || element.text.indexOf("orage")>=0){
            code.orage.nb++
        }
    });

    for( const key in code){
        if(code[key].nb >max){
            max = code[key].nb
        }
    }

    for( const key in code){
        if(code[key].nb == max){
            weather = {text:key,icon:code[key].icon}
        }
    }
    return weather
    
}

export const minMax = (entry)=>{
  let min = 0
  let max = 0
  for(let i=0;i<entry.length;i++){
    if(entry[i]>max){
      max = entry[i]
    }
  }

  min = max
  for(let j=0;j<entry.length;j++){
    if(entry[j] < min){
      min = entry[j]
    }
  }
  return {max: max,min: min}
}