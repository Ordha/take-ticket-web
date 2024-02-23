document.addEventListener('click', function() {
    const seatButtons = document.querySelectorAll('.seat');
    const totalSeatSpan = document.getElementById('total-seat');
    const currentSeatSpan = document.getElementById('current-seat');
    const nextButton = document.getElementById('next-btn');

    const couponCodeInput = document.getElementById('coupon-code');
    const applyCouponButton = document.getElementById('apply-coupon');

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
                const money = 550;
                const convertedTotalCost = parseInt(totalCost);

                const sum = convertedTotalCost + parseInt(money);

                // document.getElementById("totalPrice").innerText = sum;
                setInnerText("totalPrice",sum);
                
                const grandCost = document.getElementById("grandPrice").innerText;
                const convertedGrandCost = parseInt(grandCost);
                const sum2 = convertedGrandCost + parseInt(money);
                setInnerText("grandPrice",sum2);


                totalSeatSpan.textContent = remainingSeats;
                currentSeatSpan.textContent = selectedSeats;

                if (selectedSeats == 4) {
                    applyCouponButton.disabled = false;
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


document.getElementById('apply-coupon').addEventListener('click', function() {
    applyCoupon();
});

function applyCoupon() {
    const couponCode = document.getElementById('coupon-code').value;
    const totalPriceElement = document.getElementById('totalPrice');
    const grandPriceElement = document.getElementById('grandPrice');
    let totalPrice = parseInt(totalPriceElement.innerText);

    if (couponCode =='NEW15' || couponCode =='Couple20') {
        if(couponCode == 'NEW15'){
            
        const discountedPrice = totalPrice * 0.15;
        grandPriceElement.innerText = totalPrice - discountedPrice;
        document.getElementById('apply-coupon').disabled = true;
        }
        else{
            const discountedPrice = totalPrice * 0.2;
        grandPriceElement.innerText = totalPrice - discountedPrice;
        document.getElementById('apply-coupon').disabled = true;
        }
    }
    
    else{
                alert("Invalid coupon code");
            }
}

document.getElementById('next-btn').addEventListener('click', function() {

});

function modal() {
    const modal = document.getElementById('myModal');
    function openModal() {
        modal.classList.remove('hidden');
    }

    // Function to close modal
    function closeModal() {
        modal.classList.add('hidden');
    }
}



function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}

