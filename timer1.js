const times = process.argv.slice(2);

for (let time of times) {
  if (!isNaN(time) && time > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write(' . ')
    }, time * 100);
  }
}

setTimeout(() => {
  console.log('\n');
}, Math.max(...times) * 100);