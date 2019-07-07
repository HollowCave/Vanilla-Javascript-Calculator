document.addEventListener('click', (event) => {
  let click = event.target.value,
      output = document.getElementById('calc-output'),
      result = output.value;

  if (click === 'CE') {
    click = '';
    output.value = output.value.substring(0, output.value.length - 1);
  }

  if (click === 'C') {
    click = '';
    output.value = '';
  }

  if(click === '=') {
    click = '';
  }

  if (click) {
    output.value = result + click;
  } 

  addition(click, result);
  subtract(click, result);
  multiply(click,result);
  divide(click, result);
});

var addition = (cur, lastNum) => {
  let click = event.target.value,
      output = document.getElementById('calc-output');

  if (click === '=' && output.value.includes('+')) {
    return output.value = eval(lastNum);
  }
}

var subtract = (cur, lastNum) => {
  let click = event.target.value,
      output = document.getElementById('calc-output');

  if (click === '=' && output.value.includes('-')) {
    return output.value = eval(lastNum);
  }
}

var multiply = (cur, lastNum) => {
  let click = event.target.value,
      output = document.getElementById('calc-output');

  if (click === '=' && output.value.includes('*')) {
    return output.value = eval(lastNum);
  }
}

var divide = (cur, lastNum) => {
  let click = event.target.value,
      output = document.getElementById('calc-output');

  if (click === '=' && output.value.includes('/')) {
    return output.value = eval(lastNum);
  }
}