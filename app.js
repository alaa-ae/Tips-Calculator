//Getting the values of the input fields
let bill_Value = document.getElementById("bill");
let tip_btn = document.getElementsByClassName("tip-btn");
let custom_tip = document.getElementById("custom");
let numOfPeople = document.getElementById("number");
let tip_amount = document.getElementById("tipAmount");
let total = document.getElementById("total");

let errorMsg = document.getElementById("error_msg");
let reset_btn = document.getElementById("reset_btn");

// Get the input of the selected tip button
let tipPercent = 0;
for (let btn of tip_btn) {
        btn.addEventListener('click', function () {
                tipPercent = Number.parseInt(btn.textContent);
        });
}

function cal() {

        if (+numOfPeople.value === 0) {
                errorMsg.style.visibility = 'visible';
                numOfPeople.style.border = "1px solid red";

                reset_btn.setAttribute('disabled', true);
        } else {
                errorMsg.style.visibility = 'hidden';
                numOfPeople.style.border = "1px solid  hsl(172, 67%, 45%)";
                reset_btn.setAttribute('disabled', false);
                reset_btn.style.opacity = 1;

                if (custom_tip.value !== '') {
                        tipPercent = +custom_tip.value;
                }

                const billAmount = +bill_Value.value;
                const people = +numOfPeople.value;

                const tip = billAmount * tipPercent / 100;

                const totalamount = billAmount + (tip);

                tip_amount.textContent = '$' + (tip / people).toFixed(2);
                total.textContent = '$' + (totalamount / people).toFixed(2);

                reset_btn.removeAttribute('disabled');
        }
}
numOfPeople.addEventListener('input', cal);

//reset btn
function reset1() {
        bill_Value.value = tip_btn.value = numOfPeople.value = '';
        tip_amount.textContent = total.textContent = '$0.00';
        tipPercent = 0;

        reset_btn.setAttribute('disabled', true);
        reset_btn.style.opacity = 0.2;
}
reset_btn.addEventListener('click', reset1);


