
var senha = localStorage.getItem("senha")
var acesso = 0
localStorage.setItem("acesso",acesso)

if (senha === null) {

if (confirm("Quital criar uma senha para que ninguém sabote os pontos?")) {
  
  senha = prompt("Ja pode criar sua senha")
  localStorage.setItem("senha",senha)
  
} else {
  
  location.reload()
  
}
}

function ok() {
  
 var comparar = document.getElementById('senha').value
 
 if (comparar === senha) {
  
  senha.innerHTML = ""
   alert("Acesso permitido")
   
   acesso = 1
   localStorage.setItem("acesso",acesso)
   
   if (acesso === 1) {
     
   window.location.href = 'Home.html'
   
   }
   
 } else {
   
   alert("Acesso negado, a senha não corresponde")
   
   location.reload()
   
 }
  
  
}