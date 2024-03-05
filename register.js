//console.log("Hello World.", 43, 409.23, true, false, ["banana", 43, true]);

// string = "Eduard June", "Padolina", "18"
// number = 12345, 40.2 60.4
// boolean = true, false, 1 or 0 -1 = false, >0
// object = ["Apple","Banana", "Grapes"]
// [1, 2, 3, 4]

// undefiend= null

//console.log("Hello World."),123,true, ["apple", "banana"]
//console.error("Hello World")
//console.warn("Hello World")
//console.table(["Eduard June", "Padolina","Eiji","EJ"])

//let name = true
//console.log(typeof(name))

let txtUsername = document.querySelector("#txtUsername")
let txtPassword = document.querySelector("#txtPassword")
let txtConfirmPassword = document.querySelector("#txtConfirmPassword")
let btnRegister = document.querySelector("#btnRegister")

btnRegister.onclick = function () {
    register(txtUsername.value, txtPassword.value, txtConfirmPassword.value)
}

function register (username, password, confirmpassword) {
    // If...else if ...else
    // Conditional Operators (Greater Than >, Less Than <, Equal==,Not !,)
    // Greater Than or Equal >=, Less Than or Equal <=
    // Not Equal !=

    if(password == confirmpassword && password != "" && confirmpassword != ""){
        console.log("Password match!")
    } else if (password == "" || confirmpassword == ""){
        return console.log("Password must not be empty.")
    }
    else {
        return console.log("Password does not match.")
    }
    console.log(username, password, confirmpassword)
}