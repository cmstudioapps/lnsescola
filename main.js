
var pontosA = localStorage.getItem("pontosAA")
var pontosB = localStorage.getItem("pontosBB")
var pontosC = localStorage.getItem("pontosCC")
var senha = localStorage.getItem("senha")



function OK() {
  
  var a = document.getElementById('terceiroA').value
  
  if (a === "limpo") {
    
    pontosA++
    
localStorage.setItem("pontosAA",pontosA);
    
    
    
  }
  
  if (a === "superlimpo") {
    
    pontosA = pontosA +++ 3
    
localStorage.setItem("pontosAA",pontosA);
    
  }
  
  
  
  if (a === "Aceitável") {
    
    pontosA = pontosA +++ 2
    
localStorage.setItem("pontosAA",pontosA);
    
  }
  
  
  if (a === "Mais ou menos") {
    
    pontosA--
    
localStorage.setItem("pontosAA",pontosA);
    
  }

//Terceiro B:

var b = document.getElementById('terceiroB').value
  
  if (b === "limpo") {
    
    pontosB++
    
localStorage.setItem("pontosBB",pontosB);
    
    
    
  }
  
  if (b === "superlimpo") {
    
    pontosB = pontosB +++ 3
    
localStorage.setItem("pontosBB",pontosB);
    
  }
  
  
  
  if (b === "Aceitável") {
    
    pontosB = pontosB +++ 2
    
localStorage.setItem("pontosBB",pontosB);
    
  }
  
  
  if (b === "Mais ou menos") {
    
    pontosB--
    
localStorage.setItem("pontosBB",pontosB);
    
  }

//TERCEIRO C:

var c = document.getElementById('terceiroC').value
  
  if (c === "limpo") {
    
    pontosC++
    
localStorage.setItem("pontosCC",pontosC);
    
    
    
  }
  
  if (c === "superlimpo") {
    
    pontosC = pontosC +++ 3
    
localStorage.setItem("pontosCC",pontosC);
    
  }
  
  
  
  if (c === "Aceitável") {
    
    pontosC = pontosC +++ 2
    
localStorage.setItem("pontosCC",pontosC);
    
  }
  
  
  if (c === "Mais ou menos") {
    
    pontosC--
    
localStorage.setItem("pontosCC",pontosC);
    
  }

  
  
  alert("Confirmado com sucesso")
 
 window.location.href = 'Home.html'
  
  
}

