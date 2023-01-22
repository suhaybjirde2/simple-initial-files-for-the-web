let btn = document.querySelector('.btn');
btn.addEventListener('click', ()=> {
    let div = document.createElement('div');
    div.innerHTML = "well done";
    div.className = 'btn'
    document.body.appendChild(div)
})
console.log(btn)