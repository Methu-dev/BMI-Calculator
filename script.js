const resultDiv = document.getElementById('result');

const calculatorBMI = () => {
    const age = document.getElementById('age').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value / 100);

    if(isNaN(age) || age <= 0){
        resultDiv.textContent = 'Please enter a valid age';
        return;
    } 
    if (isNaN(weight) || weight <= 0 || isNaN(height) || height ===0) {
        resultDiv.textContent = 'Please enter your valid values for weight and height';
        return;
    }

    
}