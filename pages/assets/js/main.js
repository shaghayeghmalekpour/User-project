function getData(url){
    return fetch(url)
    .then(res =>res.json())
    .then(json => json)
    .catch(err => console.log(err))
}

    const drawerHandler = document.getElementById("drawerHandler")
    const mainContent = document.getElementById("main-content")
    const mainDrawer = document.getElementById("main-drawer")
    const mainPost = document.getElementById("main-posts")
    drawerHandler.addEventListener("click" , toggleDrawer);
    
function toggleDrawer(){
    mainDrawer.classList.toggle("hide");
    mainContent.classList.toggle("expand");
    mainPost.classList.toggle("expand");
}