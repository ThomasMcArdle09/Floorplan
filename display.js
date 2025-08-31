
function updateSearch() {
    let searchBox = document.getElementById('search')
    let input = searchBox.value
}

function addItem() {
    let list = document.getElementById('catalog')
    let html = '<div class="itemCard"><div class="imgContainer"><div class="measurement">4.25 x 1</div><img class="itemImg" src="https://www.cottonsafenaturalmattress.co.uk/images/the-budleigh-medium-sofa-p136-378_image.jpg" draggable="false"></div></div>'
    list.innerHTML += html
}

function displayCatalog() {
    for (let i=1; i<12; i++) {
        addItem()
    }
}