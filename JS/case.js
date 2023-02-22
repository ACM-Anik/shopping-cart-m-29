function updateNumberById(isIncrease){
   const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value ;
    const previousCaseNumber = parseInt(caseNumberString); 

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

// Case plus:
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateNumberById(true);
    const caseTotalPrice = newCaseNumber * 59;

    const casePriceElement = document.getElementById('case-price');
    casePriceElement.innerText = caseTotalPrice;

    calculateSubTotal();
})

// case-minus:
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateNumberById(false);
    const caseTotalPrice = newCaseNumber * 59;

    const casePriceElement = document.getElementById('case-price');
    //ei duto korte hobe na :
    // const casePriceString = casePriceElement.innerText;
    // const casePrice = parseInt(casePriceString);
    casePriceElement.innerText = caseTotalPrice;

    calculateSubTotal();
})