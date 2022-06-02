function computerPlay() {  // generates the CPU player's answer
  let random = ["Rock", "Paper", "Scissors"];
  let compAns = random[Math.floor(Math.random() * random.length)];
  return compAns;      
}