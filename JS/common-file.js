function getTextElementValueById(elementId){
    const productTotalElement = document.getElementById(elementId);
    const currentProductTotalString = productTotalElement.innerText;
    const currentProductTotal = parseInt(currentProductTotalString);
    return currentProductTotal;
    
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}


function calculateSubTotal(){
    // Calculate total:
    const currentPhoneTotal = getTextElementValueById("phone-price");
    const currentCaseTotal = getTextElementValueById("case-price");
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    // Calculate tax:
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);
    
    // Calculate final total:
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}
