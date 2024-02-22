document.addEventListener('click', function() {
    const seatButtons = document.querySelectorAll('.seat');
    const totalSeatSpan = document.getElementById('total-seat');
    const currentSeatSpan = document.getElementById('current-seat');
    const nextButton = document.getElementById('next-btn');
    let remainingSeats = 8;
    let selectedSeats = 0;

    seatButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if (!button.disabled) {
                button.style.backgroundColor = 'rgb(29, 209, 0)';
                remainingSeats--;
                selectedSeats++;

                // see price start
                const seatName = e.target.parentNode.childNodes[0].innerText;
                const showAllNames = document.getElementById('showName');

                const tr1 = document.createElement("tr");

                const td1 = document.createElement("td");
                td1.innerText = seatName;

                const td2 = document.createElement("td");
                td2.innerText = "Economics ";
                const td3 = document.createElement("td");
                td3.innerText = "550";
                const br = document.createElement("br");

                tr1.appendChild(td1);
                tr1.appendChild(td2);
                tr1.appendChild(td3);

                showAllNames.appendChild(tr1);
                // see price end

                //total price show start

                const totalCost = document.getElementById("totalPrice").innerText;
                console.log(typeof totalCost);
                const money = 550;
                const convertedTotalCost = parseInt(totalCost);
                document.getElementById("totalPrice").innerText = convertedTotalCost + parseInt(money);

            

                totalSeatSpan.textContent = remainingSeats;
                currentSeatSpan.textContent = selectedSeats;

                if (selectedSeats == 4) {
                    nextButton.disabled = false;
                    seatButtons.forEach(function(btn) {
                        btn.disabled = true;
                    });
                } else {
                    nextButton.disabled = true;
                }
                button.disabled = true;
            }
        });
    });
});
