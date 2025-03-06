const users = {
    "222222": { name: "akromxoja", surname: "Akmalov", coin: 250, xp: 650, group: "F2-2065 | Akmalov Akromxoja", password: "123456" },
};


const form = document.querySelector(".form");
const idInput = document.querySelector(".inpu1");
const passwordInput = document.querySelector(".input2");
const loginButton = document.querySelector(".btn2");


function checkInputs() {
    if (idInput.value && passwordInput.value) {
        loginButton.disabled = false;
        loginButton.style.backgroundColor = "red";
    } else {
        loginButton.disabled = true;
        loginButton.style.backgroundColor = "rgb(241, 89, 89)";
    }
}


idInput.addEventListener("input", checkInputs);
passwordInput.addEventListener("input", checkInputs);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userId = idInput.value;
    const userPassword = passwordInput.value;

    if (users[userId] && users[userId].password === userPassword) {
        localStorage.setItem("user", JSON.stringify(users[userId]));
        window.location.href = "home.html";
    } else {
        alert("ID yoki parol noto'g'ri!");
    }
});
