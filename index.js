// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const acctData =[
  {
    "acctNum": "AAA - 1234",
    "user": "Alice"
  },
  {
    "acctNum": "AAA - 5231",
    "user": "Bob"
  },
  {
    "acctNum": "AAA - 9921",
    "user": "Alice"
  },
  {
    "acctNum": "AAA - 8191",
    "user": "Alice"
  }
];

const balance ={
    "AAA - 1234": 4593.22,
    "AAA - 9921": 0,
    "AAA - 5231": 232142.5,
    "AAA - 8191": 4344
};

function func(param) {
  var accNumber = [];
  if(param == "user") {
    acctData.forEach(function(item){
    if(accNumber. indexOf(item.user) == -1){
      accNumber.push(item.user);}
    });
  };
  if(param == "sort_by(acctNum)"){
    acctData.forEach(function(item){
    if(accNumber. indexOf(item.acctNum) == -1){
      accNumber.push(item.acctNum);}
    });
  }
  if(param == "sort_by(balance)"){
    for (let value of Object.values(balance)) {
      accNumber.push(value);
    }


  }

  return console.log(accNumber);
};
func("user");
func("sort_by(acctNum)");
func("sort_by(balance)");