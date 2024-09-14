const email = document.getElementById('email'); //inputuri functionale (de exemplu: input de tip text/range/number/radio/checkbox, select, textarea);
const namee = document.getElementById('name');
const age = document.getElementById('age');
const gender = document.getElementsByName('gender');
const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const age_error = document.getElementById('age_error');
const gender_error = document.getElementById('gender_error');
const form = document.getElementById('form');

function saveFormData() {
    localStorage.setItem('name', namee.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('age', age.value);
    let genderValue;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderValue = gender[i].value;
            break;
        }
    }
    localStorage.setItem('gender', genderValue);
}

function displayFormData() {
    namee.value = localStorage.getItem('name') || ''; //folosirea localStorage (sa se pastreze in localStorage o colectie de elemente); 
    email.value = localStorage.getItem('email') || '';
    age.value = localStorage.getItem('age') || '';
    const storedGender = localStorage.getItem('gender');
    if (storedGender === 'male') {
        document.getElementById('gender_male').checked = true;
    } else if (storedGender === 'female') {
        document.getElementById('gender_female').checked = true;
    }
}

form.addEventListener('submit', function(event)  {
    let ok = true;

    if (namee.value === '' || namee.value == null) {
        event.preventDefault();
        name_error.innerHTML = "Introdu un nume valid";
        ok = false;
    } else {
        name_error.innerHTML = "";
    }

    var email_check = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; //validarea datelor dintr-un formular folosind expresii regulate;
    if (!email.value.match(email_check)) {
        event.preventDefault();
        email_error.innerHTML = "Introdu o adresă de email validă";
        ok = false;
    } else {
        email_error.innerHTML = "";
    }

    if (age.value === '' || age.value < 1 || age.value > 120) {
        event.preventDefault();
        age_error.innerHTML = "Introdu o vârstă validă";
        ok = false;
    } else {
        age_error.innerHTML = "";
    }

    let genderSelected = false;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        event.preventDefault();
        gender_error.innerHTML = "Selectează genul tău";
        ok = false;
    } else {
        gender_error.innerHTML = "";
    }

    if (ok) {
        saveFormData(); 
    }
});
displayFormData();
