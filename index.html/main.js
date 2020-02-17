function getname() {
    var year, month, day= parseInt(document.getElementById ("day").value);
    var date = new Date('${year}-${month-1}-${day}');
    var date = new Date(year, month, day);
    var dob = date.getDay()
    var male = document.getElementById("gender1")
    var female = document.getElementById("gender2");
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thuarsday", "Friday", "Saturday"];
    var maleNames = ["Kwasi", "Kwanwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosa", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (male.checked == false && female.checked == false) {
        alert("kindly identify your gender");
    } 
    else if (year == "" || year.lenghth < 4 || year.length > 4){
        alert("kindly enter a valid year")
    }   
     if (month < 1 || month > 12 || month == 2 && day > 29){
    alert("kindly enter a valid month");
    }
     else if (day < 1 || day > 31) {
    alert("kindly enter a valid day")
    }
     else if (male.checked === true){
    alert("hey, " + maleNames[dob] + " is your Akan name" + " since you were born on a " + weekdays[dob]);
    }   
     else {
    alert("hey, " + femaleNames[dob] + " is your Akan name" + "since you were born on a" + weekdays[dob])
     }
    }
