const phone = [
    { name: 'Samsung', camera: 12, storage: '16gb' },
    { name: 'iPhone', camera: 50, storage: '16gb' },
    { name: 'Google Pixel', camera: 80, storage: '16gb' },
    { name: 'Oppo', camera: 15, storage: '16gb' },
    { name: 'mytel', camera: 100, storage: '16gb' },
    { name: 'Vivo', camera: 12, storage: '16gb' },
];

function bestCamera(phone) {
    let best = phone[0];
    for (let i = 0; i < phone.length; i++) {
        const mobile = phone[i];
        if (mobile.camera > best.camera) {
            best = mobile;
        }
    }
    return best;
}
const select = bestCamera(phone);
console.log(select);