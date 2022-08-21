function income(){
    const incomeInput = document.getElementById('income');
    const incomeInputString = incomeInput.value;
    const incomeInputValue = parseFloat(incomeInputString);
    // incomeInput.value = '';
    // console.log(incomeInputValue);
    return incomeInputValue;
}

function allProduct(){
    const foodInput = document.getElementById('food-input');
    const foodInputString = foodInput.value;
    const foodInputValue = parseFloat(foodInputString);
    // foodInput.value = '';
    // console.log(foodInputValue)

    const rentInput = document.getElementById('rent-input');
    const rentInputString = rentInput.value;
    const rentInputValue = parseFloat(rentInputString);
    // rentInput.value = '';

    const clothesInput = document.getElementById('clothes-input');
    const clothesInputString = clothesInput.value;
    const clothesInputValue = parseFloat(clothesInputString);
    // clothesInput.value = '';

    const totalAmount = foodInputValue + rentInputValue + clothesInputValue;
    return totalAmount;
    // console.log(totalAmount);
}


document.getElementById('btn-calculate').addEventListener('click', function(){
    income();
    // totalExpences()
    const totalExpences = document.getElementById('total-expence');
    totalExpences.innerText =  allProduct();

    const balance = document.getElementById('balance');
    balance.innerText = income() - allProduct();
})