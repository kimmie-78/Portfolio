 
 var temp=document.getElementById('temperature');
 var cityName=document.getElementById('city')
 var humidity=document.getElementById('humidity')
 var windspeed=document.getElementById('windspeed')
 var searchinput=document.getElementById('searchinput');
 var serchbox=document.getElementById('searchbox')
 var body_img=document.getElementById('bodyimg');

 var body_data=document.getElementById('body_data')
 var deatil=document.getElementById('detail')
 var error=document.getElementById('error')





    async function checkWeather(city) {
        let Api_key='3c0f9d28ef7d90f50f5fac3f22aeda0a'
        let repsponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`);
        let data= await repsponse.json();

  
        
    temp.innerHTML=Math.floor(data.main.temp )+'°C';
    cityName.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity +"%";
    windspeed.innerHTML=data.wind.speed+'km/h';
    console.log(data)

  

     body_data.style.display='flex';
     detail.style.display='flex';
   

     }
     

      searchbox.addEventListener('click',()=>
      {
          let cityIn = searchinput.value;
          checkWeather(cityIn);
         
      })