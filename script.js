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

    const bmi = weight / (height * height);
    const bmiCategory = getBMICategory(bmi);

    resultDiv.innerHTML = `
    <p> Your age is: ${age} </>
    <p> Your BMI is: ${bmi.toFixed(2)} </>
    <p> You are: ${bmiCategory} </p>
    `;
}

const getBMICategory = (bmi) => {
    if(bmi < 18.5){
        return 'UnderWeight';
    }

    else if(bmi >= 18.5 && bmi < 25){
        return 'Normal weight';
    }

    else if(bmi >= 25 && bmi < 30){
        return 'Overweight';
    }

    else{
       return 'Obesity';
    }
}