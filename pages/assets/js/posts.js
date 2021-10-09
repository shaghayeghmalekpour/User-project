
function buttonForMoreContentOfCardPost(div) {
    return div.classList.toggle('show');
}

function createPosts(title, url, loremtext) {
    const postListColumn = document.createElement('div');
    postListColumn.classList = 'pl-column'

    const postCard = document.createElement('div');
    postCard.classList = 'card'

    const postCardImage = document.createElement('div');
    postCardImage.style.backgroundImage = `url(${url})`;
    postCardImage.classList = 'postcard-img'

    const postCardTitle = document.createElement('p');
    const postCardTitleText = document.createTextNode(title);
    postCardTitle.appendChild(postCardTitleText);
    // more button
    const moreButton = document.createElement('button');
    moreButton.innerText = "more"

    const moreDiv = document.createElement('div');
    moreDiv.classList = 'more'
    const moreDivText = document.createTextNode(loremtext)
    //close button
    const closeButton =document.createElement('button');
    closeButton.innerText ="close"
    //appneds
    moreButton.addEventListener('click', function () { buttonForMoreContentOfCardPost(moreDiv) }, false);
    closeButton.addEventListener('click' , function( )  { buttonForMoreContentOfCardPost(moreDiv) }, false)
    moreDiv.appendChild(moreDivText);
    postCard.appendChild(postCardImage)
    postCard.appendChild(postCardTitle);
    postCard.appendChild(moreButton);
    moreDiv.appendChild(closeButton);
    postCard.appendChild(moreDiv);
    postListColumn.appendChild(postCard);

    return postListColumn;
}

const mainElement = document.getElementById('postList');
async function main() {
    const posts = await getData("https://jsonplaceholder.typicode.com/posts/");

    posts.forEach((item) => {
        const post = createPosts(
            item.title,
            `https://picsum.photos/id/${item.id + 200}/200/300`,
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
        )
        mainElement.appendChild(post);
    })
}
main();