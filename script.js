setInterval(function(){
    let date = new Date();
    const days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio"
    ,"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let week = days[date.getDay()];
    let month = months[date.getMonth()];
    let seconds = date.getSeconds();
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();
    let time = hours < 12 ?  "am" : "pm";
    let format12 = hours > 12 ? hours - 12 : hours;
    console.log(week + " " +  day +  " de " + month + " del " + year);
    console.log("Son las " + format12 + ":" + minutes + ":" + seconds + " " + time);
},1000);
