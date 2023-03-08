let message = [];

function writeCards(names, events) {
  for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }

  return message;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}