console.log('Teste JS Arquivo');


// Selecionar pelo ID
let btStart = document.getElementById('start');
console.log('getElementById: ', btStart);

// Selecionar pela Classe
let dvContainer = document.getElementsByClassName('container');
console.log('getElementsByClassName: ', dvContainer);

// Selecionar pela Tag
let buttons = document.getElementsByTagName('button');
console.log('getElementsByTagName: ', buttons);

// Selecionar por Query
let btReset = document.querySelector('button');
console.log('querySelector: ', btReset);

// Selecionar por QueryAll
let allButtons = document.querySelectorAll('button');
console.log('querySelectorAll: ', allButtons);


