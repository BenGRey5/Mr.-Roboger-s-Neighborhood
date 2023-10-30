document.addEventListener("DOMContentLoaded", function(){
    const end1 = document.getElementById('numberInput');
    const btn1 = document.getElementById('btn1');
    const answer1 = document.getElementById('result');

    function containsNumber(number) {
        const numAsString = number.toString();
        return /[123]+/.test(numAsString);
    }

    function displayNumbers() {
        let num = parseInt(end1.value);
        let numbers = "";  
        let changeArray = [];

    for(let i = 0; i <= num; i++) {
        if (containsNumber(i)) {
            if (i.toString().includes('3')) {
            changeArray.push("Won't you be my neighbor!");
            } else if (i.toString().includes('2')) {
            changeArray.push("Boop!");
            } else {
            changeArray.push("Beep!");
        }
        }else {
            changeArray.push(i)
        
        
        }
        numbers += changeArray[changeArray.length - 1] + " ";
    }
    
    answer1.innerHTML = numbers;
}



    btn1.addEventListener('click', displayNumbers);
})