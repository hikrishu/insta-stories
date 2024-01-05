let storyArr = [
    {dp:"https://images.unsplash.com/photo-1496203695688-3b8985780d6a?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
story:"https://images.unsplash.com/photo-1492175742197-ed20dc5a6bed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1513374933342-24bf646c8f5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
story:"https://images.unsplash.com/photo-1513490169789-fc38712bf75d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1592948078640-39656341be54?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
story:"https://plus.unsplash.com/premium_photo-1661964216206-7be1516d407c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"},
    {dp:"https://images.unsplash.com/photo-1571908598182-a3233d316b83?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
story:"https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
story:"https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1497818875354-a68df22da828?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
story:"https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"},
]

let storiyan = document.querySelector("#storiyan")
let clutter = ""
storyArr.forEach(function(elem, idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt=""></div>`
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets){
    let value = storyArr[dets.target.id].story
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${value})` 

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    }, 2000);
});


