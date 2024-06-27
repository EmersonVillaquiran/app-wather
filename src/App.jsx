import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import WeatherCard from './assets/components/WeatherCard';
import Loader from './assets/components/Loader';
import ErrorApp from './assets/components/ErrorApp';
import FormCountry from './assets/components/FormCountry';
import getBdImg from './utils/getBdImg';



function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [HasError, setHasError] = useState(false)
  const [city, setCity] = useState('');
  const [locationSuccess, setLocationSuccess] = useState(false);
  const [hasErrorForPermission, setHasErrorForPermission] = useState(false);
 

  const success = info => {
    setCoords ({
      lat: info.coords.latitude,
      lon: info.coords.longitude
    })
    setLocationSuccess(true);
  }

  const error = () => {
    // setHasError(true);
    setIsLoading(false);
    setHasErrorForPermission(true)
  };

 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error)
  }, [])


  useEffect(() => {
    if ( locationSuccess || city) {
      const APIKEY = import.meta.env.VITE_REACT_APP_API_KEY;
      
      let url;
    if (city) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
      setHasErrorForPermission(false)
    } else if (locationSuccess) {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`;
    }
      
      axios
        .get(url)
        .then(res => {
          setWeather(res.data)
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const fahrenheit = ((9/5 * celsius) + 32).toFixed(1)
          setTemp({
            celsius,
            fahrenheit,
          })
          setHasError(false)

        const weatherDescription = res.data.weather[0].description;
        const backgroundImage = getBdImg(weatherDescription);
        setObjStyle({
          backgroundImage: `url("${backgroundImage}")`,
        });

          }) 
          .catch(err => {
            console.log(err);
            setHasError(true);
          })
          .finally(() => setIsLoading(false))
    }
  },[city, locationSuccess])



const [objStyle, setObjStyle] = useState({
  backgroundImage: 'url("/clearsky.jpeg")',
});


  return (
    <div className='app' style={objStyle}>
      <FormCountry setCity={setCity}/>
      {isLoading 
      ?<Loader/>
      :hasErrorForPermission
        ? <h1>❌Se impidió el acceso a la ubicación🤦‍♂️ 
          <br />intenta por la búsqueda ✌️</h1>
        : HasError 
          ?<ErrorApp/>
            :<WeatherCard weather={weather} temp={temp}/>
      }
    </div>
  )
}


export default App
