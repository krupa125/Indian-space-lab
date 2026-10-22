const ctx=document.getElementById("chart");

let altitude=500;

const chart=new Chart(ctx,{
type:"line",
data:{
labels:[],
datasets:[{
label:"Altitude",
data:[],
borderColor:"red",
fill:false
}]
},
options:{
responsive:true
}
});

const map=L.map("map").setView([17.3850,78.4867],13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
attribution:"© OpenStreetMap"
}).addTo(map);

let marker=L.marker([17.3850,78.4867]).addTo(map);

let time=0;

setInterval(()=>{

altitude+=Math.random()*8-4;

const temp=(25+Math.random()*5).toFixed(1);

const pressure=(101300+Math.random()*100).toFixed(0);

const battery=(90-time*0.1).toFixed(1);

document.getElementById("alt").innerHTML=altitude.toFixed(1);
document.getElementById("temp").innerHTML=temp;
document.getElementById("press").innerHTML=pressure;
document.getElementById("battery").innerHTML=battery;

chart.data.labels.push(time);
chart.data.datasets[0].data.push(altitude);

if(chart.data.labels.length>20){
chart.data.labels.shift();
chart.data.datasets[0].data.shift();
}

chart.update();

const lat=17.3850+Math.random()/100;
const lng=78.4867+Math.random()/100;

marker.setLatLng([lat,lng]);

time++;

},1000);