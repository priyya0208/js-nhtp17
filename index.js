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
  var newArr = [];
  
 acctData.forEach(function(item){
  Object.keys(balance).forEach(function (data) {
  if(data == item.acctNum){
        newArr.push({
      acctNum : item.acctNum,
      user: item.user,
      balance: balance[data]
    })
  }
  
});
    
    });

function sort_by(param) {
  var accNumber = [];
  if(param == "user") {
    acctData.forEach(function(item){
    if(accNumber. indexOf(item.user) == -1){
      accNumber.push(item.user);}
    });
  };
  if(param == "acctNum"){
    acctData.forEach(function(item){
    if(accNumber. indexOf(item.acctNum) == -1){
      accNumber.push(item.acctNum);}
    });
  }
  if(param == "balance"){
    for (let value of Object.values(balance)) {
      accNumber.push(value);
    }


  }

  return console.log(accNumber);
};

function sortDirection(param) {
if(param == "asc"){}
    var sortArr = newArr.sort((a, b) => (a.user > b.user) ? 1 : -1);

if(param == "desc") {
  var sortArr = newArr.sort((a, b) => (a.user < b.user) ? 1 : -1);
}
  
  return console.log(JSON.stringify(sortArr));
  
  };

function filtered_by(param){
  let filterArr = [];
   newArr.forEach(function(item){
    if(item.user == param){
      filterArr.push(item);}
    });
  
console.log(JSON.stringify(filterArr));
  }
sort_by("acctNum");
sort_by("balance");
sortDirection("asc");
sortDirection("desc");
filtered_by("Alice");
filtered_by("Bob");
filtered_by("Charlie");
