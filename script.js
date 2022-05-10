const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

function changeMode(){
    var mybody = document.body;
    mybody.classList.toggle('myDark')
}

if(bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}
function loadCoupon(){
   document.getElementById("coupon").style.display="block"
 }

function closeCoupon(){
    document.getElementById("coupon").style.display="none"
}
let x = document.getElementById('out');
            function geolocation(){
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(showPosition)
                }else{
                    x.innerText="Geo Not Supported"
                }
            }

            function showPosition(data){
                console.log(data)
                sessionStorage.setItem('data',data)
                // x.innerText=`Latitude is ${data.coords.latitude} & Longitude is ${data.coords.longitude}`
                let latitude = data.coords.latitude;
                let longitude = data.coords.longitude
                const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;

                /// api Calling 
                fetch(url,{method:'GET'})
                // return promise
                .then((res) => res.json())
                // return data
                .then((data) => {
                    let cityName = data.city.name
                    let weather = data.list[0].temp.day
                    x.innerText = `${cityName} ${weather} °C`
                    // document.getElementById('icon').appendChild(
                    //      <img src='https://openweathermap.org/img/w/'+data.list[0].weather.icon+'.png'/>
                    // )
                })
            }
            
