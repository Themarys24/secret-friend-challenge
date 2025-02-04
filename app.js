//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
let secretFriends = [];

function addFriends(){
    let inputFriend = document.getElementById('amigo');
   

    if (inputFriend && inputFriend.value.trim() !== ''){
        
        secretFriends.push(inputFriend.value.trim());
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

    










