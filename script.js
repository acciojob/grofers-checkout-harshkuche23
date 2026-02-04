const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all price cells
    const prices = document.querySelectorAll(".price");

    let total = 0;

    prices.forEach(price => {
        total += Number(price.innerText);
    });

    // Check if total row already exists (avoid duplicate rows)
    let totalRow = document.getElementById("total-row");

    if (!totalRow) {
        totalRow = document.createElement("tr");
        totalRow.id = "total-row";

        const totalCell = document.createElement("td");
        totalCell.colSpan = 2;
        totalCell.innerText = `Total Price: Rs ${total}`;

        totalRow.appendChild(totalCell);
        document.querySelector("table").appendChild(totalRow);
    } else {
        totalRow.firstChild.innerText = `Total Price: Rs ${total}`;
    }
};

getSumBtn.addEventListener("click", getSum);
