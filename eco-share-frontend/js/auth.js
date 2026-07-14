const API_URL = "http://localhost:3000/api";


// ================= REGISTER =================

const registerForm = document.getElementById("registerForm");


if(registerForm){

registerForm.addEventListener("submit", async function(e){

    e.preventDefault();


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    try {

        const response = await fetch(`${API_URL}/auth/register`, {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        username: name,
        email: email,
        password: password
    })

});

        const data = await response.json();


        console.log(data);


        if(response.ok){

            alert("Register berhasil!");

            window.location.href = "index.html";

        }else{

            alert(data.message || "Register gagal");
            console.log(data.message)

        }


    } catch(error){

        console.log(error);

        alert("Backend tidak terhubung");

    }


});

}



// ================= LOGIN =================


const loginForm = document.getElementById("loginForm");


if(loginForm){


loginForm.addEventListener("submit", async function(e){

    e.preventDefault();


    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;



    try {


        const response = await fetch(`${API_URL}/auth/login`, {


            method:"POST",


            headers:{
                "Content-Type":"application/json"
            },


            body:JSON.stringify({

                email,
                password

            })


        });



        const data = await response.json();



        console.log(data);



        if(response.ok){


            localStorage.setItem(
                "token",
                data.token
            );


            alert("Login berhasil");


            window.location.href="dashboard.html";


        }else{


            alert(data.message || "Login gagal");


        }



    }catch(error){


        console.log(error);

        alert("Backend tidak terhubung");


    }


});


}