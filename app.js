let friends = [];

function addFriends() {
    let nameInput = document.getElementById('friend');
    let name = nameInput.value;

    // Valido el nombre antes de agregarlo
    if (!isInputNotEmpty(name) || hasNumbers(name)) {
        nameInput.value = ""; // Limpio el campo
        return; // No continúo si la validación falla
    }

    // Agrego el nombre a la lista si es válido
    friends.push(name);

    // Actualizo la lista en la página
    updateFriendsList();

    // Limpio el campo después de agregar
    nameInput.value = "";
}

// Verifico si el input no está vacío
function isInputNotEmpty(input) {
    if (input.trim() === "") {
        alert('Por favor, inserte un nombre.');
        return false;
    }
    return true;
}

// Verifico si el input contiene números
function hasNumbers(input) {
    if (/\d/.test(input)) {
        alert('El nombre no puede contener números.');
        return true;
    }
    return false;
}

// Actualizo la lista de amigos en la página
function updateFriendsList() {
    const friendsList = document.getElementById("listaAmigos");

    // Limpio la lista existente
    friendsList.innerHTML = "";

    // Recorro el array y agrego cada amigo como <li>
    for (const friend of friends) {
        const li = document.createElement("li");
        li.textContent = friend; // Establezco el texto del <li>
        friendsList.appendChild(li); // Agrego el <li> a la lista
    }
}

// Sorteo y muestro el amigo sorteado
function sorterFriends() {
    // Valido si hay amigos en la lista
    if (!isListNotEmpty(friends)) {
        return; // No continúo si la validación falla
    }

    // Genero un índice aleatorio
    let randomNumber = Math.floor(Math.random()*friends.length);

    // Obtengo el nombre aleatorio
    let randomName = friends[randomNumber];

    // Muestro el resutlado
    const result = document.getElementById('resultado');
    result.innerHTML = `Amigo sorteado: <strong>${randomName}</strong>`;
}

function isListNotEmpty(list) {
    if (list.length === 0) {
        alert('La lista está vacía.');
        return false;
    }
    return true;
}