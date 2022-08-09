const biriyaniKePabe = ['alim', 'kail', 'dalim', 'salim', 'balim', 'alim', 'alim', 'zailm', 'halim', 'dalim'];

function ekJonEktaPabe(biriyaniKePabe) {
    const unique = [];
    for (let i = 0; i < biriyaniKePabe.length; i++) {
        const element = biriyaniKePabe[i];
        if (unique.includes(element) === false) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = ekJonEktaPabe(biriyaniKePabe);
console.log(uniqueNames);