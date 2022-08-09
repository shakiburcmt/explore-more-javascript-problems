function woodLagebe(forChair, forTable, forBed) {
    const perChair = 3;
    const perTable = 5;
    const perBed = 9;

    const chair = forChair * perChair;
    const table = forTable * perTable;
    const bed = forBed * perBed;

    const total = chair + table + bed;
    return total;
}

const total = woodLagebe(1, 1, 1);
console.log(total);