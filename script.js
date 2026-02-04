const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select prices using the class expected by tests
    const prices = document.querySelectorAll(".prices");

    let total = 0;
    prices.forEach(p => {
        total += Number(p.innerText);
    });

    let ansRow = document.getElementById("ans");

    if (!ansRow) {
        ansRow = document.createElement("tr");
        ansRow.id = "ans";

        const td = document.createElement("td");
        td.colSpan = 2;
        td.innerText = total;

        ansRow.appendChild(td);
        document.querySelector("table").appendChild(ansRow);
    } else {
        ansRow.firstChild.innerText = total;
    }
};

getSumBtn.addEventListener("click", getSum);
