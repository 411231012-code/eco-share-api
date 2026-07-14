const token = localStorage.getItem("token");


if(!token){

    alert("Silahkan login dulu");

    window.location.href="index.html";

}


document.getElementById("welcome").innerHTML =
"Selamat datang di Eco Share";


function logout(){

    localStorage.removeItem("token");

    window.location.href="index.html";

}