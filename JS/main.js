let userEmail = document.querySelector("#useremail")
let userPass = document.querySelector("#userpass")
let logbtn = document.querySelector("#logbtn")
let errMess = document.querySelector("#errMess")
let succMess = document.querySelector("#succMess")
let form = document.querySelector("form")

let QuestionsNum = document.querySelector("#questionsNum")
let strTestBtn = document.querySelector("#strTestBtn")

let testScreen = document.querySelector("#testScreen")
let testSection = document.querySelector("#test")

let result = document.querySelector("#result")

let cartona = ''
let correctAnswers = []


// login
logbtn.addEventListener("click", (e) => {

    e.preventDefault()

    if (userEmail.value != "aa@" || userPass.value != "1234") {

        errMess.classList.replace("d-none", "d-block")

    } else {

        errMess.classList.replace("d-block", "d-none")
        succMess.classList.replace("d-none", "d-block")

        localStorage.setItem("Islogin", "True")

        setTimeout(GoToTestPage, 1000)
    }

})


// go to test page
function GoToTestPage() {

    testSection.classList.replace("d-none", "d-block")

    form.classList.add("d-none")

}


// start test
strTestBtn.addEventListener("click", (e) => {

    e.preventDefault()

    cartona = ''
    correctAnswers = []

    let num = QuestionsNum.value

    for (let i = 1; i <= num; i++) {

        let num1 = Math.floor(Math.random() * 10)
        let num2 = Math.floor(Math.random() * 10)

        correctAnswers.push(num1 + num2)

        cartona += `
        <div class="mb-2">
            <label>${i}) ${num1} + ${num2} = </label>
            <input type="number" class="form-control answer">
        </div>
        `
    }


    // submit + logout buttons
    cartona += `
    <div class="mt-3">
        <button id="submitTest" class="btn btn-success me-2">Submit</button>
        <button id="logoutBtn" class="btn btn-danger">Logout</button>
    </div>
    `

    testScreen.innerHTML = cartona

})


// submit and logout
testScreen.addEventListener("click", function (e) {

    
    if (e.target.id == "submitTest") {

        let inputs = document.querySelectorAll(".answer")

        let score = 0

        for (let i = 0; i < inputs.length; i++) {

            if (Number(inputs[i].value) === correctAnswers[i]) {

                score++

            }

        }

        result.innerHTML = `Your score is ${score} / ${correctAnswers.length}`

    }


    
    if (e.target.id == "logoutBtn") {

        localStorage.removeItem("Islogin")

        testSection.classList.replace("d-block", "d-none")

        form.classList.remove("d-none")

        testScreen.innerHTML = ""

        result.innerHTML = ""

        userEmail.value = ""
        userPass.value = ""

    }

})