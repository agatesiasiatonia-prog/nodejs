
const http = require('http');

const texts = [
  "Hello, world!",
  "Random text here.",
  "learners are  awesome.",
  "tonia you got kucky today !",
  "Another random response.",
];

const server = http.createServer((req, res) => {
  const randomText = texts[Math.floor(Math.random() * texts.length)];

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(randomText);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

 
  
