function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  if(!isNaN(inputFieldValue)){
    inputField.value = "";
    return inputFieldValue;
  }else{inputField.value = "";
    return alert("input a number" ) 
  }
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  if(isNaN(newValue)){return}
  else{
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
  }
}
