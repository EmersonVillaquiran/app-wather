const getBdImg = (weatherDescription) => {
    switch (weatherDescription.toLowerCase()) {
      case 'clear sky':
        return 'sun.jpeg'; 
      case 'few clouds':
        return 'clearsky.jpeg'; 
      case 'scattered clouds':
        return 'clearsky.jpeg';
      case 'broken clouds':
        return 'brokenclouds.jpeg'; 
      case 'shower rain':
        return 'rain.jpeg';
      case 'light rain':
        return 'rain.jpeg';
      case 'rain':
        return 'rain.jpeg';
      case 'thunderstorm':
        return 'thunderstorm.jpeg';
      case 'snow':
        return 'snow.jpeg';
      case 'mist':
        return 'mist.jpeg'; 
      case 'overcast clouds':
        return 'mist.jpeg';       
      default:
        return 'clearsky.jpeg';
    }
  };

  export default getBdImg