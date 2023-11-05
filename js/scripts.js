document.addEventListener("DOMContentLoaded", function () {
    function containsNumber(number) {
        const numAsString = number.toString();
        return /[123]+/.test(numAsString);
    }
    function generateNumbers(num) {
        let changeArray = [];
        for (let i = 0; i <= num; i++) {
            if (containsNumber(i)) {
                if (i.toString().includes('3')) {
                    changeArray.push("Won't you be my neighbor!");
                } else if (i.toString().includes('2')) {
                    changeArray.push("Boop!");
                } else {
                    changeArray.push("Beep!");
                }
            } else {
                changeArray.push(i);
            }
        }
        return changeArray;
    }

    const end1 = document.getElementById('numberInput');
    const btn1 = document.getElementById('btn1');
    const answer1 = document.getElementById('result');

    function displayNumbers() {
        const num = parseInt(end1.value);
        const resultArray = generateNumbers(num);
        const result = resultArray.join(' '); 
        answer1.innerHTML = result;
    }
    btn1.addEventListener('click', displayNumbers);
});
