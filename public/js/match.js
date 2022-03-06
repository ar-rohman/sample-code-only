function includeWords(wanted, seen) {
    const newWanted = wanted.replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '');
    const newSeen = seen.replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '');
    var wantedMap = newWanted.split(/\s+/).reduce((m, s) => m.set(s, (m.get(s) || 0) + 1), new Map),
        wantedArray = Array.from(wantedMap.keys()),
        count = 0;
    
    let arrayResult = [];

    newSeen.split(/\s+/)
        .forEach(s => {
            var key = wantedArray.find(t => s === t || s.length > 3 && t.length > 3 && (s.startsWith(t) || t.startsWith(s)));
            if (!wantedMap.get(key)) return;
            console.log(s, key)
            if (s === key) {
                arrayResult.push(s);
                ++count;
                wantedMap.set(key, wantedMap.get(key) - 1);
            }
        });

    return { count, result: arrayResult.join(' ') };
}

document.addEventListener("DOMContentLoaded", () => {
    const frasa = document.getElementById('frasa');
    const input = document.getElementById('input');
    const cek = document.getElementById('cek');
    const result = document.getElementById('result');
    
    cek.addEventListener('click', () => {
        const kalimat = input.value;
        const string = frasa.textContent;

        if (kalimat.trim()) {
            let matches = includeWords(kalimat, string)
            result.innerHTML = `${matches.count} / ${matches.result}`;
        }
    })
});
