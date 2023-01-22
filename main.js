let h1 = document.querySelector('h1');
h1.addEventListener('click', ()=> {
    let div = document.createElement('div');
    div.innerHTML = "well done";
    div.className = 'styled'
    document.body.appendChild(div)
})