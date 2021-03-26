let interval;
let i = 0;
function startLoop(){
    interval = setInterval(function(){
        document.getElementById("time").value = i;
        i++
    },1000);
}
function stopLoop(){
    console.log('Stopp!');
    clearInterval(interval);
    i =0;
}
function laploop(){
    document.getElementById('two').value = i;
}

