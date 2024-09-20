function reset() {
  output.textContent = '';
  output.classList.replace('text-bg-danger', 'text-bg-dark')
  output.classList.add('visually-hidden');
}
inputNumber.addEventListener('input', reset);

convertBtn.addEventListener('click', () => {
  let integerNumber = (inputNumber.value).split('');

  if (inputNumber.value === '' ||  inputNumber.value <= 0) {
    output.textContent = 'Please enter a valid number';
    output.classList.replace('text-bg-dark', 'text-bg-danger');
    output.classList.remove('visually-hidden');
  } else if (inputNumber.value > 3999) {
    output.textContent = 'Please enter a number less than or equal to 3999';
    output.classList.replace('text-bg-dark', 'text-bg-danger');
    output.classList.remove('visually-hidden');
  } else if (inputNumber.value > 0) {
    if (integerNumber.length === 4) {
      let x = thousands(integerNumber);
      output.innerHTML = x;
      output.classList.remove('visually-hidden');
    } else if (integerNumber.length === 3) {
      let x = houndreds(integerNumber);
      output.innerHTML = x;
      output.classList.remove('visually-hidden');
    } else if (integerNumber.length === 2) {
      let x = tens(integerNumber);
      output.innerHTML = x;
      output.classList.remove('visually-hidden');
    } else if (integerNumber.length === 1) {
      let x = units(integerNumber);
      output.innerHTML = x;
      output.classList.remove('visually-hidden');
    }
  }
})

function units(str) {
  let result = '';
  switch (str[0]) {
    case '1': 
      result += "I";
      break;
    case '2':
      result += "II";
      break;
    case '3':
      result += "III";
      break;
    case '4':
      result += "IV";
      break;
    case '5':
      result += "V";
      break;
    case '6':
      result += "VI";
      break;
    case '7':
      result += "VII";
      break;
    case '8':
      result += "VIII";
      break;
    case '9':
      result += "IX";
      break;
  }
  
  return result;
}

function tens(str) {
  let result = '';
  switch (str[0]) {
    case '1': 
      result += "X";
      break;
    case '2':
      result += "XX";
      break;
    case '3':
      result += "XXX";
      break;
    case '4':
      result += "XL";
      break;
    case '5':
      result += "L";
      break;
    case '6':
      result += "LX";
      break;
    case '7':
      result += "LXX";
      break;
    case '8':
      result += "LXXX";
      break;
    case '9':
      result += "XC";
      break;
  }

  switch (str[1]) {
    case '1': 
      result += "I";
      break;
    case '2':
      result += "II";
      break;
    case '3':
      result += "III";
      break;
    case '4':
      result += "IV";
      break;
    case '5':
      result += "V";
      break;
    case '6':
      result += "VI";
      break;
    case '7':
      result += "VII";
      break;
    case '8':
      result += "VIII";
      break;
    case '9':
      result += "IX";
      break;
  }
  
  return result;
}


function houndreds(str) {
  let result = '';
  switch (str[0]) {
    case '1': 
      result += "C";
      break;
    case '2':
      result += "CC";
      break;
    case '3':
      result += "CCC";
      break;
    case '4':
      result += "CD";
      break;
    case '5':
      result += "D";
      break;
    case '6':
      result += "DC";
      break;
    case '7':
      result += "DCC";
      break;
    case '8':
      result += "DCCC";
      break;
    case '9':
      result += "CM";
      break;
  }

  switch (str[1]) {
    case '1': 
      result += "X";
      break;
    case '2':
      result += "XX";
      break;
    case '3':
      result += "XXX";
      break;
    case '4':
      result += "XL";
      break;
    case '5':
      result += "L";
      break;
    case '6':
      result += "LX";
      break;
    case '7':
      result += "LXX";
      break;
    case '8':
      result += "LXXX";
      break;
    case '9':
      result += "XC";
      break;
  }

  switch (str[2]) {
    case '1': 
      result += "I";
      break;
    case '2':
      result += "II";
      break;
    case '3':
      result += "III";
      break;
    case '4':
      result += "IV";
      break;
    case '5':
      result += "V";
      break;
    case '6':
      result += "VI";
      break;
    case '7':
      result += "VII";
      break;
    case '8':
      result += "VIII";
      break;
    case '9':
      result += "IX";
      break;
  }
  
  return result;
}


function thousands(str) {
  let result = '';

  switch (str[0]) {
    case '1': 
      result += "M";
      break;
    case '2':
      result += "MM";
      break;
    case '3':
      result += "MMM";
      break;
  }
  
  switch (str[1]) {
    case '1': 
      result += "C";
      break;
    case '2':
      result += "CC";
      break;
    case '3':
      result += "CCC";
      break;
    case '4':
      result += "CD";
      break;
    case '5':
      result += "D";
      break;
    case '6':
      result += "DC";
      break;
    case '7':
      result += "DCC";
      break;
    case '8':
      result += "DCCC";
      break;
    case '9':
      result += "CM";
      break;
  }

  switch (str[2]) {
    case '1': 
      result += "X";
      break;
    case '2':
      result += "XX";
      break;
    case '3':
      result += "XXX";
      break;
    case '4':
      result += "XL";
      break;
    case '5':
      result += "L";
      break;
    case '6':
      result += "LX";
      break;
    case '7':
      result += "LXX";
      break;
    case '8':
      result += "LXXX";
      break;
    case '9':
      result += "XC";
      break;
  }

  switch (str[3]) {
    case '1': 
      result += "I";
      break;
    case '2':
      result += "II";
      break;
    case '3':
      result += "III";
      break;
    case '4':
      result += "IV";
      break;
    case '5':
      result += "V";
      break;
    case '6':
      result += "VI";
      break;
    case '7':
      result += "VII";
      break;
    case '8':
      result += "VIII";
      break;
    case '9':
      result += "IX";
      break;
  }
  
  return result;
}







inputNumber.addEventListener('keydown', (e) => {
  let integerNumber = (inputNumber.value).split('');

  if (inputNumber.value === '' ||  inputNumber.value <= 0) {
    output.textContent = 'Please enter a valid number';
    output.classList.replace('text-bg-dark', 'text-bg-danger');
    output.classList.remove('visually-hidden');
  } else if (inputNumber.value > 3999) {
    output.textContent = 'Please enter a number less than or equal to 3999';
    output.classList.replace('text-bg-dark', 'text-bg-danger');
    output.classList.remove('visually-hidden');
  } else if (inputNumber.value > 0) {
    if (integerNumber.length === 4) {
      let x = thousands(integerNumber);
      output.innerHTML = x;
      output.classList.remove('visually-hidden');
    } else if (integerNumber.length === 3) {
      let x = houndreds(integerNumber);
      output.innerHTML = x;
      output.classList.remove('visually-hidden');
    } else if (integerNumber.length === 2) {
      let x = tens(integerNumber);
      output.innerHTML = x;
      output.classList.remove('visually-hidden');
    } else if (integerNumber.length === 1) {
      let x = units(integerNumber);
      output.innerHTML = x;
      output.classList.remove('visually-hidden');
    }
  }
})


