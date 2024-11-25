console.log('Welcome to Holberton School, what is your name?');
process.on('exit', () => {
  console.log('This important software is now closing');
});
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.exit();
});
