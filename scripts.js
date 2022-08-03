console.log('This is working')
const car={
    brand:"tesla",
    notAwesome:true,
    overRated:true,
    savesGas:true,
    favorites:['tech','battery','interior']
}
window.document.getElementById('p1').innerHTML="Hey class!"
document.getElementById('p1').innerHTML='<h2> second heading </h2>'
p1.style.color="blue"
const myFunction = () => {
    alert('Hey Class')
}

const changeColor = () =>{
    p1.style.color='red'
}

const getSomeData=()=>{
    fetch('https://codice-boca.web.app/menu')
    .then(response=> response.json())
    .then(cleanData => console.log(cleanData))
}