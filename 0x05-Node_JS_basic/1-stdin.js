console.log('Welcome to Holberton School, what is your name?');
if (!process.stdin.isTTY) {
  process.on('exit', () => {
    console.log('This important software is now closing');
  });
}
process.stdin.on('data', (data) => {
  const name = data.toString();
  process.stdout.write(`Your name is: ${name}`);
  process.exit();
});
