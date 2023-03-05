
//Animations
var parallax = document.querySelector(".text-div");
var back = document.querySelector(".img-layers");
var imgBack = 400;

var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var line3 = document.querySelector(".line3");
var line4 = document.querySelector(".line4");
parallax.addEventListener("mousemove", e => {
    var x = e.clientX;
    var y = e.clientY;

    back.style.transform = `translate(${x /imgBack}%, ${y/imgBack}%)`
});
var card = document.querySelector(".profile-img");
card.addEventListener("click", function(e){
    card.classList.toggle("is-flipped");
});
window.onscroll = () => {
    var position1 = window.scrollY - 200;
    var position2 = window.scrollY - 2000;
    line1.style.right = `${position1}px`;
    line2.style.right = `${position1}px`;
    line3.style.right = `${position2}px`;
    line4.style.right = `${position2}px`;
}




//Form 1 Section
const url = "http://localhost/backend-weekend-trip/index.php";
var fName = document.getElementById("first_name");
var sName = document.getElementById("second_name");
var email_user = document.getElementById("email_user");
var password_user = document.getElementById("password_user");
var password_checked = document.getElementById("password_check");
document.getElementById("submit_btn").onclick = function(){
    if( fName.value == "" && sName.value == "" && email_user.value == "" && password_user.value == "" && password_checked.value == ""){
        alert("Please fill this requirements");
    }else{
        if(password_user.value !== password_checked.value){
            alert("Passwords do not match");
        }
        else{
            const url1 = "http://localhost/backend-weekend-trip/index.php";
            let data = new FormData();
            data.append('first_name', fName.value);
            data.append('last_name', sName.value);
            data.append('email', email_user.value);
            data.append('password', password_user.value);

            axios.post(url, data).then(function (res) {
                alert(res.data['status']);    
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
}

//Palindrome Section
var username = document.getElementById("user_name");
var palindrome_string = document.getElementById("palindrome-result");
document.getElementById("check_palindrome").onclick = function(){
    let data = new FormData();
    data.append('string', username.value);
    if(username.value == ""){
        palindrome_string.innerHTML = "Please I need a string";
    }
    const url2 = "http://localhost/backend-weekend-trip/palindrome.php";
    axios.get(url2, {
        params:{
            'string':data
        }
    }).then((response) => {
        console.log(response.data.status);
        palindrome_string.innerHTML = response.data.status;
    }).catch((err) => {
        console.log(err);
    });
}

//Prime Number
var users_age = document.getElementById("prime_input");
var age_result = document.getElementById("prime_result");
document.getElementById("check_prime").onclick = function(){
    let data = new FormData();
    data.append("age", users_age.value);
    if(users_age.value == ""){
        age_result.innerHTML = "Please enter your age";
    }else{
        const url3 = "http://localhost/backend-weekend-trip/prime.php";
        axios.post(url3,data).then((response) => {
            console.log(response.data);
            age_result.innerHTML = response.data.status;
        }).catch((err) => {
            console.log(err);
        });
    }
}

var location_display = document.getElementById("location");
const url6 = "http://localhost/backend-weekend-trip/location.php";
axios.get(url6).then((response) => {
    console.log(response.data.status);
    location_display.innerHTML = response.data.location.city;
}).catch((err) => {
    console.log(err);
});


//IP Sum
var display_ip = document.getElementById("display-id");
const url5 = "http://localhost/backend-weekend-trip/retrieve_ip.php";
    axios.get(url5).then((response) => {
        console.log(response.data.status);
        display_ip.innerHTML = response.data.status;
    }).catch((err) => {
        console.log(err);
    });



//Reverse Number
var string_reverse = document.getElementById("reverse_string");
var input_string = document.getElementById("reverse-input");
document.getElementById("reverse-btn").onclick = function(){
    const url4 = "http://localhost/backend-weekend-trip/reverse_number.php";
    const data = new FormData();
    data.append("string", input_string.value);
    axios.get(url4, {
        params: {
            "string":data
        }
    }).then((response) => {
        console.log(response.data);
        string_reverse.innerHTML = response.data.status;
    }).catch((err) => {
        console.log(err);
    });
}
