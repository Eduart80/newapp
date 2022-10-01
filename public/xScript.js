
const counter = {
     cnt: 0,
    inc: function(){
        counter.cnt++
        document.getElementById('number').innerHTML = counter.cnt
    }
}
const button = document.getElementById('button')
button.addEventListener('click', counter.inc,false)
