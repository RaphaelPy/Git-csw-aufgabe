const words = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
  "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
  "incididunt", "ut", "labore", "et", "dolore", "magna",
  "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip",
  "ex", "ea", "commodo", "consequat", "duis", "aute", "irure",
  "dolor", "in", "reprehenderit", "in", "voluptate", "velit",
  "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur"
];

function generateText() {
  const count = parseInt(document.getElementById("wordCount").value);
  let result = [];

  for (let i = 0; i < count; i++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    result.push(randomWord);
  }

  const text = result.join(" ") + ".";
  document.getElementById("output").textContent = text;
}


document.getElementById("generateBtn").addEventListener("click", generateText);
