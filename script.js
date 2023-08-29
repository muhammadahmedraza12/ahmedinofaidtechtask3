document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    const inputTemp = document.getElementById("inputTemp");
    const Result = document.getElementById("Result");

    convertBtn.addEventListener("click", () => {
        const temperature = parseFloat(inputTemp.value);

        if (isNaN(temperature)) {
            Result.textContent = "Invalid input. Please enter a numeric temperature.";
            return;
        }

        const output = document.querySelector('input[name="output"]:checked').value;
        let convertedTemp;

        switch (output) {
            case "celsius":
                convertedTemp = temperature;
                break;
            case "fahrenheit":
                convertedTemp = (temperature * 9/5) + 32;
                break;
            case "kelvin":
                convertedTemp = temperature + 273.15;
                break;
        }

        Result.textContent = `Converted temperature: ${convertedTemp.toFixed(2)} ${output}`;
    });
});
