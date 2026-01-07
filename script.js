const NFTS = [
    {id: 1, name: "UFC", price: "₹2479 → 26.5 USDT", image: "https://i.postimg.cc/C1fXnM5R/photo-2026-01-05-15-00-06.jpg"},
    {id: 2, name: "Jolly Chimp", price: "₹849 → 8.93 USDT", image: "https://i.postimg.cc/fR1m8M5x/IMG_20260105_152201_656.jpg"},
    {id: 3, name: "Star Notepad", price: "₹819 → 8.62 USDT", image: "https://i.postimg.cc/rwD5GDGS/IMG_20260105_152201_594.jpg"},
    {id: 4, name: "Jack in the Box", price: "₹3499 → 36.83 USDT", image: "https://i.postimg.cc/fRVY7V70/IMG_20260105_152201_764.jpg"},
    {id: 5, name: "UFC", price: "₹3899 → 41.04 USDT", image: "https://i.postimg.cc/J46bBNXB/IMG_20260105_152202_159.jpg"}
];

const nftGrid = document.getElementById('nft-grid');
const modal = document.getElementById('buy-modal');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const closeBtn = document.querySelector('.close-btn');

NFTS.forEach(nft => {
    const card = document.createElement('div');
    card.className = 'nft-card';
    card.innerHTML = 
        <img src="${nft.image}" alt="${nft.name}">
        <h3>${nft.name}</h3>
        <p>${nft.price}</p>
        <button class="buy-btn" data-id="${nft.id}">🛒 Buy</button>
    ;
    nftGrid.appendChild(card);
});

document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        const id = e.target.getAttribute('data-id');
        const nft = NFTS.find(n => n.id == id);
        modalTitle.innerText = nft.name;
        modalPrice.innerText = nft.price;
        modal.style.display = 'flex';
    });
});

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => {
    if(e.target == modal) modal.style.display = 'none';
};

document.getElementById('pay-btn').onclick = () => {
    alert('Payment screenshot ke baad NFT send karenge!');
    modal.style.display = 'none';
};
