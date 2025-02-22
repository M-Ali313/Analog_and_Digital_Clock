let hr = document.querySelector('#hr')
let mn = document.querySelector('#mn')
let se = document.querySelector('#se')

setInterval( ()=>{
    let day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * 6
    let ss = day.getSeconds() * 6

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    se.style.transform = `rotateZ(${ss}deg)`

    // Digital clock 
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let secondes = document.getElementById('secondes')
    let ampm = document.getElementById('ampm')
    
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    let am = h >= 12 ? "PM" : "AM"

    // convert 24thr clock to 12hr clock
    if(h>12){
        h = h-12
    }
 
    // add zero before single digit number
    h = (h<10)? "0" + h : h 
    m = (m<10)? "0" + m : m
    s = (s<10)? "0" + s : s
    
    hours.innerHTML = h
    minutes.innerHTML = m
    secondes.innerHTML = s
    ampm.innerHTML = am



})