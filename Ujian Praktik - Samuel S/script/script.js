
function LoginVerification(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username=="UPRAKTIK" && password=="UPRAKTIK"){
        window.alert("Login Berhasil");
        window.location="cv.html";
    }
    else if (username == "" || password == "" ){
        window.alert("Masukkan Email Atau password")
    }
    else {
        window.alert("Login Gagal");
    }
}

function Clear(){
    document.getElementById("username").value="";
    document.getElementById("password").value="";
}
