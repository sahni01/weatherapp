// JAI SHREE RAM

document.getElementById("mybt").onclick = function() {
    let input = document.getElementById("in").value
    let unit = document.getElementById("unit").value
    if (unit=='fahrenheit'){
        
        unit = 'imperial'
    }
    else if (unit == 'celcius'){
        unit='metric'
    }
    else {
        unit='metric'
    }
    console.log(unit);
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&units=${unit}&appid=c9a08f8b891702025afae4a67e2a65f0`)
   .then(data=>{
       console.log(data)
       return data.json()
    }).then(data_jason=>{
        console.log(data_jason)
        var code = data_jason.cod
        console.log(code)
        if (code == 200) {
        // console.log(data_jason.main.temp)
        // console.log(data_jason.weather[0].description)
        // console.log(data_jason.main.humidity)
        // console.log(data_jason.wind.speed)
            if (unit=='metric') {

                document.getElementById("outsec").innerHTML=`
                <div id="output">
                <ul>
                
                <li> city : ${data_jason.name} </li>
                <li> temperature : ${data_jason.main.temp}degree CELCIUS</li>
                <li> description : ${data_jason.weather[0].description} </li>
                <li> humidity meams nami in hava : ${data_jason.main.humidity} </li>
                <li> wind speed OR hava ki raftaar : ${data_jason.wind.speed} MILES/hr </li>
                </ul>
                </div>
                `
            }
            if (unit=='imperial'){
                document.getElementById("outsec").innerHTML=`
                <div id="output">
                <ul>
                
                <li> city : ${data_jason.name} </li>
                <li> temperature : ${data_jason.main.temp}degree farenheit</li>
                <li> description : ${data_jason.weather[0].description} </li>
                <li> humidity meams nami in hava : ${data_jason.main.humidity} </li>
                <li> wind speed OR hava ki raftaar : ${data_jason.wind.speed} MILES/hr </li>
                </ul>
                </div>
                `


            }
        }
        else if (code==404){
            document.getElementById('outsec').innerHTML=`
            <div id="output">
            <p>please try some valid city name. city you searched does not exists in the database</p>
            <a href='index.html'>REFRESH</a>
            </div>
            `
        }
        else {
            document.getElementById('outsec').innerHTML=`
            <div id="output">
            <p>THERE MIGHT SOME ISSUE WILL BE RESOLVED SOON  DON'T HESITATE TO MAIL US AT niteshsahni11371@gmail.com THANKYOU FOR VISITING</p>
            <a href='index.html'>REFRESH</a>
            </div>
            `
            
        }
    }
    
    )
    
    
}



    