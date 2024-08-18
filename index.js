// Login area event handler

document
    .getElementById("loginBtn")
    .addEventListener('click', function () {
        document
            .getElementById('login-area')
            .style
            .display = "none";
        const transaction = document.getElementById("transaction-area");
        transaction.style.display = 'block';
    })

// Deposit area event handler

document
    .getElementById("btn-deposit")
    .addEventListener("click", function () {
        updateSpanText("deposit", getInputNumber('text-deposit'));
        updateSpanText("balance", getInputNumber('text-deposit'));
        inputPlaceholder('text-deposit')

    })
document
    .getElementById("btn-withdraw")
    .addEventListener("click", function () {
        updateSpanText("withdraw", getInputNumber('text-withdraw'));
        updateSpanText("balance", getInputNumber('text-withdraw') * -1);
        inputPlaceholder('text-withdraw')
    })

function updateSpanText(id, depositValue) {
    const total = parseFloat(document.getElementById(id).innerText) +
            depositValue;
    document
        .getElementById(id)
        .innerText = total;
}
function inputPlaceholder(id) {
    const placeholder = document
        .getElementById(id)
        .value = "";
    return placeholder;
}
function getInputNumber(id) {
    const amount = parseFloat(document.getElementById(id).value);
    return amount;
}

function updateSpanText(id, depositValue) {
    const total = parseFloat(document.getElementById(id).innerText) +
            depositValue;
    document
        .getElementById(id)
        .innerText = total;
}

// …or create a new repository on the command line

// echo "# bank-with-simple-javascript" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/shaonshafiqul/bank-with-simple-javascript.git
// git push -u origin main