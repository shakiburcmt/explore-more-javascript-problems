// error handlign, onek somoy number er bodole onnokichu dile error ashbe kintu seta khuje ber korte hobe nicher niyome kichuta error handle kora jay
function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'please enter a string';
    }
    const num = num1 + num2;
    return num;
}

const push = add(4, 5);
console.log(push);
