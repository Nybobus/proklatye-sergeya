const input = document.querySelector(`#input`)
const btn = document.querySelector(`#btn`)
const box = document.querySelector(`.box`)
const text = document.querySelector(`h1`)

btn.addEventListener(`click`, () => {
    if (input.value != ``) {

        
        const newEL = document.createElement(`p`)
        
        newEL.innerText = input.value

        box.appendChild(newEL)
    
        input.value = ``
    
        newEL.addEventListener(``, () => {
            newEL.remove()
        })
}


})

btn.addEventListener(`click`, Add)

input.addEventListener(`keypress`, (e) => {
    if(e.key == `Enter`) {
        Add()
    }
})



   