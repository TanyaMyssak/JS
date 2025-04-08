let averageGrade = 99;

if (
    typeof averageGrade !== "number" || averageGrade < 0 || averageGrade > 100) {
    console.log("Недійсне значення. Значення оцінки повинно бути числом від 0 до 100.");
} else
    switch (true) {
        case (averageGrade < 60):
            console.log("Незадовільно");
            break;
        case (averageGrade <= 70):
            console.log("Задовільно");
            break;
        case (averageGrade <= 80):
            console.log("Добре");
            break;
        case (averageGrade <= 90):
            console.log("Дуже добре");
            break;
        default:
            console.log("Відмінно");
    }

