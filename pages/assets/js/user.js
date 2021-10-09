function giveTextToElement(element, text){
    const Element = document.createElement(element);
    const textNode = document.createTextNode(text)
    Element.appendChild(textNode);
    return Element;
}
function creatCard(name, email,phone, url){
    const cardContainer = document.createElement("DIV")
    cardContainer.classList ="card-container"
    const userImage = document.createElement("DIV")
    userImage.classList ="user-image"
    userImage.style.backgroundImage=`url(${url})`
    const details = document.createElement("DIV")
    const Name =giveTextToElement("p" ,name);
    const Email =giveTextToElement("p" ,email);
    const Phone =giveTextToElement("p" ,phone);


    details.appendChild(Name)
    details.appendChild(Email)
    details.appendChild(Phone)
    cardContainer.appendChild(userImage)
    cardContainer.appendChild(details)
    return cardContainer;
}
const mainElement= document.getElementById('main-content');
async function main(){
    const users= await getData("https://jsonplaceholder.typicode.com/users");
    
    
    users.forEach((item)=>{
       const user = creatCard(
           item.name , item.email , item.phone, `https://picsum.photos/id/${item.id+200}/200/300`
       )
           mainElement.appendChild(user)
       })

}
main()
