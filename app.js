//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
let secretFriends = [];

function addFriends(){
    let inputFriend = document.getElementById('amigo');
   

    if (inputFriend && inputFriend.value.trim() !== ''){
        const newFriend = inputFriend.value.trim();

    if (secretFriends.includes(newFriend)){
        alert('Este nome já foi incluído.');
            inputFriend.value = ''; // Limpa o campo após o alerta
            return;

    }
        
        secretFriends.push(newFriend);
        updateFriendsList();
        inputFriend.value = '';
        
        console.log(secretFriends);
    
    }else{
        alert('Por favor, insira um nome.')
    }

        
    }
    
    function updateFriendsList(){
        let friendsList = document.getElementById('listaAmigos');
        friendsList.innerHTML = '';
 
        for (let i = 0; i < secretFriends.length; i++){
         const li = document.createElement('li');
         li.textContent = secretFriends[i];
         friendsList.appendChild(li);
 
        }
        
    }

    function sortearAmigo() {
        if (secretFriends.length == 0) {
            alert('Lista vazia, insira nomes para sortear.');
            return;
        }

    const randomIndex = Math.floor(Math.random() * secretFriends.length);
    const sorteado = secretFriends[randomIndex];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo secreto sorteado: ${sorteado}</li>`;

    restartGame();
} 



function restartGame() {
    secretFriends = []; 
    clearField(); 
}

function clearField() {
    document.getElementById('listaAmigos').innerHTML = '';
    
}
    










