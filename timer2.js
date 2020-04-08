const prompt = require('prompt-sync')();

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0062') {
    process.stdout.write('\x07');
    process.stdout.write(' BEEP ');
  }
  if (key === '\u0003') {
    console.log("\nThanks for using me, ciao!");
    process.exit();
  }
});


const setAlarm = function () {
  const time = prompt('Set alarm timer: (seconds) ');

  if (!isNaN(time) && time > 0) {
    console.log(`Setting timer for ${time} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write(' BEEP ');
      console.log("Press b for alarm\n");
    }, time * 1000);
  } else {
    setAlarm();
  }
}

setAlarm();
