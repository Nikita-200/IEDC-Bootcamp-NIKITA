const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("income");
const moneyMinus = document.getElementById("expense");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const dummyTransactions = [
    {  id: 1, text: "Flowervase", amount: -50},
    {  id: 2, text: "Salary", amount: 35700 },
    {  id: 3, text: "Water Bill", amount: -350},
    {  id: 4, text: "Table", amount: -15000},

];

let transaction = dummyTransactions;

function addTransactionDOM(transaction)
{
    const sign = transaction.amount > 0 ? "+" : "-";
    const icon = transaction.amount > 0 ? "up" : "down";

    // spanText = document.querySelector('.history-box');
    // if(transaction.amount>0)
    // {
    //     color = "green";
    // }
    // else{
    //     color = "red";
    // }
    // spanText.style.color = color;

    const item = document.createElement("li");
    item.classList.add(transaction > 0 ? "plus" : "minus");

    item.innerHTML = `<h4>${transaction.text}</h4> <span>${sign}${Math.abs(transaction.amount)} <i class="fas fa-caret-${icon}"></i>
    <i class="fas fa-trash-alt"></i></span>`;

    list.appendChild(item);
}

function init(){
    list.innerHTML = ''

    dummyTransactions.forEach(addTransactionDOM);
}

init();




const button = document.querySelector('.button');
button.addEventListener('click',(e)=>{e.preventDefault();
                          document.querySelector('#form').style.background='#ccc';});

  
    
 