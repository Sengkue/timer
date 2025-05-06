const { exec } = require('child_process');

const seconds = 10;
console.log(`Waiting ${seconds} seconds before committing...`);

setTimeout(() => {
  const time = new Date().toLocaleString();
  const commitMessage = `Auto commit at ${time}`;
  
  exec(`git add . && git commit -m "${commitMessage}" && git push`, (err, stdout, stderr) => {
    if (err) {
      console.error("Error:", err.message);
      return;
    }
    console.log(stdout);
    if (stderr) console.error(stderr);
  });

}, seconds * 1000);
