let height = prompt("Hãy nhập chiều cao của bạn (m): ");
let weight = prompt("Hãy nhập cân nặng của bạn (kg): ");

let bmi = weight / (height ^ 2);

if (bmi < 18.5) {
    document.write("Underweight");
}else if (bmi < 25) {
        document.write("Normal");
}   else if (bmi < 30) {
            document.write("Overweight");
}       else {
                document.write("Obese");
}