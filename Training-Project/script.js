let hospitalName = "مستشفى الشفاء";
let branchCode = 10;
let isOpen = true;
let managerName;

console.log(hospitalName);
console.log(typeof hospitalName);
console.log(typeof 4);
console.log(typeof '4');
console.log(typeof true);
console.log(typeof managerName);

var doctorName = "أحمد";
var doctorName = "محمود";
console.log(doctorName);

let patName = "سارة";
let patAge = "30";
console.log('المريض: ' + patName + ' السن: ' + patAge);
console.log(`اسم المريض هو ${patName} وسنه هو ${patAge}`);

let num0 = '5';
let num1 = 4;
console.log(num0 + num1);

let count = 10;
count += 20;
count++;
count--;
console.log(count);

console.log(+'5' + +'4');
console.log(Number('4'));
console.log(parseInt('4.5'));
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.round(10.6));

let medicalText = "باطنة أطفال عظام أسنان";
console.log(medicalText.toUpperCase());
console.log(medicalText.trim());
console.log(medicalText.includes('أطفال'));
console.log(medicalText.slice(0, 6));
console.log(medicalText.replace('باطنة', 'طوارئ'));

let departments = ["باطنة", "أطفال", "عظام", "أسنان"];
let deptContainer = document.getElementById("dept-list");

for (let i = 0; i < departments.length; i++) {
    let deptName = departments[i]; // حفظ اسم القسم المتغير بشكل دقيق
    let card = document.createElement("div");
    card.className = "dept-card";
    card.innerText = "قسم " + deptName;
    
    card.onclick = function() {
        document.getElementById("patientDept").value = deptName;
        let bookingSection = document.getElementById("booking-form-section");
        if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    deptContainer.appendChild(card);
}

departments.push("قسم العيون");
departments.unshift("قسم الطوارئ");
console.log(departments);

function submitBooking() {
    let inputName = document.getElementById("patientName").value;
    let inputAge = document.getElementById("patientAge").value;
    let inputDept = document.getElementById("patientDept").value;
    let resultBox = document.getElementById("result-box");

    if (inputName === "" && inputAge === "") {
        resultBox.style.display = "block";
        resultBox.style.borderColor = "#ff4d4d";
        resultBox.style.background = "#ffe6e6";
        resultBox.style.color = "#cc0000";
        resultBox.innerHTML = "خانة اسم المريض وسن المريض فارغتان، يجب ملء هذه الخانات!";
        return;
    }

    if (inputName === "") {
        resultBox.style.display = "block";
        resultBox.style.borderColor = "#ff4d4d";
        resultBox.style.background = "#ffe6e6";
        resultBox.style.color = "#cc0000";
        resultBox.innerHTML = "خانة اسم المريض فارغة، يجب ملء هذه الخانة!";
        return;
    }

    if (inputAge === "") {
        resultBox.style.display = "block";
        resultBox.style.borderColor = "#ff4d4d";
        resultBox.style.background = "#ffe6e6";
        resultBox.style.color = "#cc0000";
        resultBox.innerHTML = "خانة سن المريض فارغة، يجب ملء هذه الخانة!";
        return;
    }

    let ageNumber = Number(inputAge);

    if (ageNumber < 0) {
        resultBox.style.display = "block";
        resultBox.style.borderColor = "#ff4d4d";
        resultBox.style.background = "#ffe6e6";
        resultBox.style.color = "#cc0000";
        resultBox.innerHTML = "خطأ: لا يمكن أن يكون السن بالسالب!";
        return;
    }

    let category = "";
    if (ageNumber < 12) {
        category = "طفل (توجيه لقسم الأطفال برعاية خاصة)";
    } else if (ageNumber >= 60) {
        category = "كبار سن (أولوية في الاستقبال)";
    } else {
        category = "بالغ";
    }

    let dayNumber = 2;
    switch (dayNumber) {
        case 1:
            console.log("السبت");
            break;
        case 2:
            console.log("الأحد");
            break;
        default:
            console.log("يوم آخر");
    }

    resultBox.style.display = "block";
    resultBox.style.borderColor = "#00b4d8";
    resultBox.style.background = "#e0fbfc";
    resultBox.style.color = "#023e8a";
    resultBox.innerHTML = `
        تم تأكيد الحجز بنجاح! <br>
        - اسم المريض: ${inputName} <br>
        - السن: ${inputAge} سنة <br>
        - الفئة: ${category} <br>
        - القسم المحجوز: ${inputDept}
    `;
    
    console.log("تم تسجيل حجز للمريض: " + inputName);
}