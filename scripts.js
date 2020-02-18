function getName() {
    var year = parseInt(document.getElementById("year").value);
    var day = parseInt(document.getElementById("date").value);
    var month = parseInt(document.getElementById("month").value);
    var male = document.getElementById("gender1")
    var female = document.getElementById("gender2");
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thuarsday", "Friday", "Saturday"];
    var maleNames = ["Kwasi", "Kwanwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosa", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var day = new Date(year + "/" + month + "/" +day);
    var birthDay = day.getDay();

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
    alert("hey, " + maleNames[birthDay] + " is your Akan name" + " since you were born on a " + weekdays[birthDay] );
    }   
     else {
    alert("hey, " + femaleNames[birthDay] + " is your Akan name" + "since you were born on a" + weekdays[bithDay])
    }
}
