const cardData = [
    { title: 'Card 1', description: 'Description 1', imageUrl: './lib/img/bird-img1.png' },
    { title: 'Card 2', description: 'Description 2', imageUrl: './lib/img/bird-img2.png' },
    { title: 'Card 3', description: 'Description 3', imageUrl: './lib/img/bird-img3.png' },
    { title: 'Card 4', description: 'Description 4', imageUrl: './lib/img/bird-img4.png' },
    { title: 'Card 5', description: 'Description 5', imageUrl: './lib/img/bird-img5.png' },
    { title: 'Card 6', description: 'Description 6', imageUrl: './lib/img/bird-img6.png' },
    { title: 'Card 7', description: 'Description 7', imageUrl: './lib/img/bird-img7.png' },
    { title: 'Card 8', description: 'Description 8', imageUrl: './lib/img/bird-img8.png' },
    { title: 'Card 9', description: 'Description 9', imageUrl: './lib/img/bird-img9.png' },
    { title: 'Card 10', description: 'Description 10', imageUrl: './lib/img/bird-img10.png' },
    { title: 'Card 11', description: 'Description 11', imageUrl: './lib/img/bird-img11.png' },
    { title: 'Card 12', description: 'Description 12', imageUrl: './lib/img/bird-img12.png' },
    { title: 'Card 13', description: 'Description 13', imageUrl: './lib/img/bird-img13.png' },
    { title: 'Card 14', description: 'Description 14', imageUrl: './lib/img/bird-img14.png' },
    { title: 'Card 15', description: 'Description 15', imageUrl: './lib/img/bird-img15.png' },
    { title: 'Card 16', description: 'Description 16', imageUrl: './lib/img/bird-img16.png' },
    { title: 'Card 17', description: 'Description 17', imageUrl: './lib/img/bird-img17.png' },
    { title: 'Card 18', description: 'Description 18', imageUrl: './lib/img/bird-img18.png' },
    { title: 'Card 19', description: 'Description 19', imageUrl: './lib/img/bird-img19.png' },
    { title: 'Card 20', description: 'Description 20', imageUrl: './lib/img/bird-img20.png' },
    { title: 'Card 21', description: 'Description 21', imageUrl: './lib/img/bird-img21.png' },
    { title: 'Card 22', description: 'Description 22', imageUrl: './lib/img/bird-img22.png' },
    { title: 'Card 23', description: 'Description 23', imageUrl: './lib/img/bird-img23.png' },
    { title: 'Card 24', description: 'Description 24', imageUrl: './lib/img/bird-img24.png' },
    { title: 'Card 25', description: 'Description 25', imageUrl: './lib/img/bird-img1.png' },
];

const catalog = document.getElementById('catalog-content');
let cardIndex = 0;
const cardsPerLoad = 4;

function createCard(card) {
    const cardHtml = `
                    <div class="col mb-4">
                        <div class="card">
                            <img src="${card.imageUrl}" class="card-img-top" alt="${card.title}">
                            <div class="card-body">
                                <h5 class="card-title">${card.title}</h5>
                                <p class="card-text">${card.description}</p>
                            </div>
                        </div>
                    </div>
                `;
    catalog.insertAdjacentHTML('beforeend', cardHtml);
}

function loadCards() {
    // console.log('loading cards');
    for (let i = cardIndex; i < cardIndex + cardsPerLoad && i < cardData.length; i++) {
        createCard(cardData[i]);
    }
    cardIndex += cardsPerLoad;

}

loadCards();

function debounce(method, delay) {
    clearTimeout(method._tId);
    method._tId = setTimeout(function () {
        method();
    }, delay);
}

function cardScrollEvent() {
    console.log('cardScrollEvent');
    const scrollHeight = this.scrollHeight;
    const scrollTop = this.scrollTop;
    const clientHeight = this.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
        loadCards();
    }
}

document.getElementById('scroll-view').addEventListener('scroll', cardScrollEvent);