console.log('hello this is jess, it’s feb 7')

const photo_button = document.getElementsByName("photo-button")
const text = document.querySelector("#text")
const photo = document.querySelector("#photo")

photo_buttons.forEach(button => {
    button.addEventListener("change", event => {
        change_photo(button.value)
    })
})

function change_photographer(photographer) {
    text.innerHTML = "Here's a picture by" + photographer + "."
    photo.src = ".../images/" + photography + ".jpg"
}
