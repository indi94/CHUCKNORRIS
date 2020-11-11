function a(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response =>response.json())   
    .then(response =>{
        document.getElementById('photos').src= response.icon_url;
        document.getElementById('root').innerHTML= response.value;
        console.log(response);
        console.log(response.icon_url);
         
    }
    )

}
save.addEventListener('click',a);