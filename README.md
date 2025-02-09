<div align="center">
  <h1>Amigo Secreto </h1>
  <br />
  <img src="https://github.com/Themarys24/secret-friend-challenge/blob/main/Imagens/imagem.jpg?raw=true" alt="Imagem do Amigo Secreto" width="400px">
</div>

---
## Linguagem Usada  
<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge">
</div>

---


## Introdução
**Amigo Secreto** é uma ferramenta para sortear nomes de amigos em diversas situações. Seja no Natal para troca de presentes, para definir a ordem de brincadeiras, ou qualquer outra ocasião. Use a criatividade e divirta-se!

---

## Modo de Uso  
1. Inclua os nomes dos amigos um por vez.  
2. Clique em **"Sortear Amigo"** para gerar o sorteio automaticamente.

---

  <h1>Demonstração</h1>
  <img src="https://github.com/Themarys24/secret-friend-challenge/blob/main/ChallengeAmigoSecreto-ezgif.com-optimize.gif?raw=true" alt="Secret Drienf Demonstration">

  ## Link  
[Visite o projeto no Vercel](https://vercel.com/themarys24s-projects/secret-friend)

  ## Desenvolvimento Técnico  
O **Challenge Amigo Secreto** foi criado para colocar em prática conceitos de lógica de programação. As principais funções implementadas incluem:

- **Adição de nomes:** Utilizando `document.getElementById()` para capturar a entrada do usuário.
- **Validação de nomes:** Verificação com `if` para evitar duplicatas.
- **Atualização de lista:** Utilizando `push()` para adicionar novos nomes.
- **Sorteio:** Funções combinadas `Math.random()` e `Math.floor()` para sortear nomes.
- **Exibição de resultado:** Utilização de `innerHTML` para mostrar os dados na interface.

Além disso, foram implementadas duas funções para reiniciar e limpar os campos:  

```javascript
// Reinicia o jogo e limpa a lista de amigos
function restartGame() {
  secretFriends = []; 
  clearField(); 
}

// Limpa o campo de exibição dos nomes
function clearField() {
  document.getElementById('listaAmigos').innerHTML = '';
}


 

