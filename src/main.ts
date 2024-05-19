const playerGrid = document.getElementById("playerGrid");

const poshNames = [
    "James Montgomery", "Elliott Fairfax", "Stan Remington", "Charlie Cavendish",
    "Oliver Barrington", "Henry Alistair", "George Fitzwilliam", "William Beaufort",
    "Edward Chadwick", "Arthur Pendragon", "Harry Lancaster", "Frederick Balmoral",
    "Charles Windsor", "Hugh Grosvenor", "Alexander Mountbatten", "Sebastian Throckmorton",
    "Rupert Fortescue", "Miles Rutherford", "Peregrine Cholmondeley", "Quentin Featherstonhaugh",
    "Hugo St. John", "Guy de Vere", "Humphrey Marmaduke", "Julian Fitzroy", "Archiebald Sinclair"
]; // Add more names if needed

for (let i = 1; i <= 25; i++) {
    const playerDiv = document.createElement("div");
    playerDiv.classList.add("player");
    playerDiv.innerHTML = `
        <img src="https://picsum.photos/id/${i}/200/200" alt="${poshNames[i - 1]}">
        <p>${poshNames[i - 1]}</p>
    `;
    playerGrid.appendChild(playerDiv);
}