const inputNumberField = document.getElementById('number');
const outputSequenceField = document.getElementById('result');
const buttonFind = document.getElementById('buttonFind');
const error = document.getElementById('error');

buttonFind.onclick = () => {
  const number = inputNumberField.value;

  if(isNaN(number)) {
    error.innerText = "It isn't a number";
  } else {
    error.innerText = '';
    outputSequenceField.value = '';
    const listNumbers = number.split('').map(Number);
    const uniqueNumbersDesc = [...new Set(listNumbers)].sort((a,b) => b-a);
    const lengthNumber = listNumbers.length;
    let listSequence = [];

    for (let i=0; i < uniqueNumbersDesc.length ; i++) {
      let maxValue = uniqueNumbersDesc[i];
      listNumbers.filter((item, index) => {
        if ((lengthNumber - index >= 5) && (item === maxValue)) {
          listSequence.push(listNumbers.slice(index, index + 5).join(''));
        } 
      });

      if(listSequence.length > 0){
        outputSequenceField.value = ("00000" + Math.max(...listSequence)).slice(-5);
        break;
      }
    }
  }
};

