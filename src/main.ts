const playerGrid = document.getElementById("playerGrid");

const poshNames = [
    "James Montgomery", "Elliott Fairfax", "Stan Remington", "Charlie Cavendish",
    "Oliver Barrington", "Henry Alistair", "George Fitzwilliam", "William Beaufort",
    "Edward Chadwick", "Arthur Pendragon", "Harry Lancaster", "Frederick Balmoral",
    "Charles Windsor", "Hugh Grosvenor", "Alexander Mountbatten", "Sebastian Throckmorton",
    "Rupert Fortescue", "Miles Rutherford", "Peregrine Cholmondeley", "Quentin Featherstonhaugh",
    "Hugo St. John", "Guy de Vere", "Humphrey Marmaduke", "Julian Fitzroy", "Archiebald Sinclair"
]; 

// Track eliminated players
const eliminatedPlayers: string[] = [];

for (let i = 0; i < poshNames.length; i++) { 
    const playerDiv = document.createElement("div");
    playerDiv.classList.add("player");
    playerDiv.innerHTML = `
        <img src="https://picsum.photos/id/${i + 1}/200/200" alt="${poshNames[i]}">
        <p>${poshNames[i]}</p>
    `;

    // Add click event listener
    playerDiv.addEventListener("click", () => {
        const playerName = poshNames[i];

        if (eliminatedPlayers.includes(playerName)) {
            // If already eliminated, un-eliminate them
            eliminatedPlayers.splice(eliminatedPlayers.indexOf(playerName), 1);
            playerDiv.classList.remove("eliminated");
        } else {
            // If not eliminated, eliminate them
            eliminatedPlayers.push(playerName);
            playerDiv.classList.add("eliminated");
        }

        // (Optional) Update the game state or display a message here
        console.log("Eliminated players:", eliminatedPlayers);
    });

    playerGrid?.appendChild(playerDiv); 
}
