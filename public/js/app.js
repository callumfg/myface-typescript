document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript here.
});

changeBackgroundColour = () => {
    let items = document.getElementsByClassName('allPosts')
    let red = Math.random() * 255
    let green = Math.random() * 255
    let blue = Math.random() * 255
    
    for (let i = 0; i < items.length; i++){
        items[i].style.background = `rgba( ${red}, ${green}, ${blue})`
    }  
}

toggleMenu = () =>{
    if (document.getElementById("menu").style.visibility == 'visible'){
        document.getElementById("menu").style.visibility = 'hidden'
    } else {
        document.getElementById("menu").style.visibility = 'visible'
    }
    console.log("button pressed")
}