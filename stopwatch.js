var h=0;
var min=0;
var s=0;
var ms=0;

var interval_h;
var interval_min;
var interval_s;
var interval_ms;

function set_h(){
    if(h==59){
        h=0;
    }
    h+=1;
document.getElementById('h').innerHTML=h + ' h : '
}
function set_min(){
    if(min==59){
        min=0;
    }
    min+=1;
document.getElementById('min').innerHTML=min + ' min : '
}
function set_s(){
    if(s==59){
        s=0;
    }
    s+=1;
document.getElementById('s').innerHTML=s + ' s : '
}
function set_ms(){
    if(ms==999){
        ms=0;
    }
    ms+=1;
document.getElementById('ms').innerHTML=ms + ' ms'
}

function start (){
    interval_h=setInterval(set_h,3600000);
    interval_min=setInterval(set_min,60000);
    interval_s=setInterval(set_s,1000);
    interval_ms=setInterval(set_ms,1);
}

function stop(){
    clearInterval(interval_h);
    clearInterval(interval_min);
    clearInterval(interval_s);
    clearInterval(interval_ms);
    saveTime()
}

function reset(){
    clearInterval(interval_h);
    clearInterval(interval_min);
    clearInterval(interval_s);
    clearInterval(interval_ms);
    const valueList = document.querySelector(".value-list");
    valueList.innerHTML = '';
    h=0;
    min=0;
    s=0;
    ms=0;
    document.getElementById('h').innerHTML='0 h : ';
    document.getElementById('min').innerHTML='0 min : ';
    document.getElementById('s').innerHTML='0 s : ';
    document.getElementById('ms').innerHTML='0 ms';
}
function saveTime() {
    const timeRecord = `${h} h : ${min} min : ${s} s : ${ms} ms`;
    const valueList = document.querySelector(".value-list");
    
    const recordItem = document.createElement("li");
    recordItem.textContent = timeRecord;
    
    valueList.appendChild(recordItem);
}