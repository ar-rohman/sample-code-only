const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById('input');
    const generate = document.getElementById('generate');
    const result = document.getElementById('result');
    
    generate.addEventListener('click', () => {
        const kalimat = input.value;

        if (kalimat.trim()) {
            const kalimatSplit = kalimat.split(' ');
            const kalimatrandom = shuffle(kalimatSplit);
            result.innerHTML = kalimatrandom.join(' ');
        }
    })
});