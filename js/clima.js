var button = document.querySelector('.boton-clima');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var descrip = document.querySelector('.descrip');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=ba5bb8cd99c9dfcfedbac0ead3b537f2')
.then(response => response.json())
.then(data => {
var nameValue = data['name'];
var tempValue = data['main']['temp'];
var descripValue = data['weather'][0]['description'];
name.innerHTML = nameValue;
temp.innerHTML = tempValue;
descrip.innerHTML = descripValue;

})

.catch(err => alert("No se encuentra la ciudad intente de nuevo!"))
})
