const fruits = [
    {id: 1, title: 'Яблоки', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348'},
    {id: 2, title: 'Апельсины', price: 30, img: 'https://fashion-stil.ru/wp-content/uploads/2019/04/apelsin-ispaniya-kg-92383155888981_small6.jpg'},
    {id: 3, title: 'Манго', price: 40, img: 'https://itsfresh.ru/upload/iblock/178/178d8253202ef1c7af13bdbd67ce65cd.jpg'},
]

const options = {
    title: 'My modal title',
    closable: true,
    content: `<p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>`,
    modalWidth: '400px',
    buttons: [
        {text: 'OK', type: 'primary', handler(){
                console.log('Primary btn is clicked')
                modal.close()
            }},
        {text: 'Cancel', type: 'danger', handler(){
                console.log('Danger btn is clicked')
                modal.close()
            }}
    ]
}
const modal = $.modal(options)

const fruitRow = document.querySelector('.row')

fruits.forEach(fruit => {
    console.log(fruit)
    const col = document.createElement('div')
    const card = document.createElement('div')
    const img = document.createElement('img')
    const cardBody = document.createElement('div')
    const cardTitle = document.createElement('h5')
    const primaryButton = document.createElement('button')
    const dangerButton = document.createElement('button')

    col.classList.add('col')
    card.classList.add('card')
    img.setAttribute('src', fruit.img)
    img.style = 'height: 300px'
    cardBody.classList.add('card-body')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = fruit.title
    primaryButton.classList.add('btn', 'btn-primary')
    primaryButton.textContent = 'Посмотреть цену'
    dangerButton.classList.add('btn', 'btn-danger')
    dangerButton.textContent = 'Удалить'

    cardBody.append(cardTitle)
    cardBody.append(primaryButton)
    cardBody.append(dangerButton)

    card.append(img)
    card.append(cardBody)

    col.append(card)

    fruitRow.appendChild(col)
})


/*
* <div class="col">
            <div class="card">
                <img style="height: 300px" src="https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Яблоки</h5>
                    <a href="#" class="btn btn-primary">Посмотреть цену</a>
                    <a href="#" class="btn btn-danger">Удалить</a>
                </div>
            </div>
        </div>
* */
