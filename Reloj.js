function startTime()
{
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    ap = (hr<12) ? "<span>AM</span>":"<span>PM</span>"
    hr = (hr==0) ? 12 : hr;
    hr = (hr>12) ? hr-12 : hr; 
    // añadimos el zero a las horas hr<10
    hr = checkTime(hr);
    min=checkTime(min);
    sec=checkTime(sec);

    document.getElementById("clock").innerHTML=hr + ":" + min + ":" +sec +" "+ap;
    
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado'];
    var curWeekday = days[today.getDay()];
    var curDay = today.getDate();
    var curMounth = months[today.getMonth()];
    console.log(today.getMonth());
    var curYear = today.getFullYear();
    var date = curWeekday+", "+curDay+" "+curMounth+" "+curYear;

    document.getElementById("date").innerHTML=date;


    var time = setTimeout(function(){startTime()},500);
    
    
}
function checkTime(i)
{
    if(i<10)
    {
        i='0'+i;
    }
    return i;
}