function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  if (!isNaN(inputFieldValue)) {
    inputField.value = "";
    return inputFieldValue;
  } else {
    inputField.value = "";
    return alert("input a number")
  }
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  if (isNaN(newValue)) { return }
  else {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
  }
}


// local Storage functionality


try {
function saveDataInStorage(id , inputField) {
  const lcData = storageData()
  const deposit = getTextElementValueById("deposit-total");
  const withdraw = getTextElementValueById("withdraw-total");
  const balance = getTextElementValueById("balance-total");
  lcData["balance"] = balance;
  lcData["withdraw"] = withdraw;
  lcData["deposit"] = deposit;
  convertAndSetData(lcData);
  updateLcData(lcData , id, inputField)
  return lcData;
}

function convertAndSetData(obj) {
  const strData = JSON.stringify(obj);
  localStorage.setItem("bank", strData)
}

function storageData() {
  let localData = {};
  const storageData = localStorage.getItem("bank");
  if (storageData) {
 localData =JSON.parse(storageData);
  }
 return localData;
}

function updateLcData(data, key , value){
 data[key]= value;
}


function updateInfoInLayout(){
  const data = JSON.parse(localStorage.getItem("bank"));
  const {deposit, withdraw, balance}= data;
  setTextElementValueById("deposit-total", deposit )
  setTextElementValueById("withdraw-total", withdraw )
  setTextElementValueById("balance-total", balance )
}
updateInfoInLayout()
}
catch(error){
 console.log(error.name);
}