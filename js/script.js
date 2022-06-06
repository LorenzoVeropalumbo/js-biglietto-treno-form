// TAKE PARAMETERS
const generateButton = document.getElementById('generate-button');
const canceledButton = document.getElementById('canceled-button');
const passengerName = document.getElementById('passenger-name');
const offertType = document.getElementById('offert-type');
const cabNumber = document.getElementById('cab-number');
const codeCp = document.getElementById('code-cp');
const ticketPrice = document.getElementById('ticket-price');

generateButton.addEventListener('click',

  function () {
    // SAVE VALUE
    const userName = document.getElementById('mb-user-name').value;
    const userKm =  parseInt(document.getElementById('mb-km-total').value);
    const userAge = document.getElementById('mb-user-age').value;

    // CALCULATE PRICE
    const price = userKm * 0.21;
    let discount = 0;
    let OffertTypes = "Biglietto Standard";

     // CALCULATE DISCOUNT
    if(userAge === 'minorenne'){
      discount = price * 20 / 100;
      OffertTypes = "Sconto Minorenni";
    }
    else if(userAge === 'over'){
      discount = price * 40 / 100;
      OffertTypes = "Sconto Over 65";
    }

    const finalPrice = price - discount;

    // CREATION TICKET
    passengerName.innerHTML = userName;
    offertType.innerHTML = OffertTypes;
    cabNumber.innerHTML = Math.floor(Math.random() * 11);
    codeCp.innerHTML = Math.floor(Math.random() * 80000) + 40000;
    ticketPrice.innerHTML = finalPrice.toFixed(2)

    // ADDING CLASS TO SHOW TICKET
    document.querySelector('.mb-ticket').classList.add('active');
  }
)

canceledButton.addEventListener('click',
  function () { 
    // REMOVE CLASS TO HIDE TICKET
    document.querySelector('.mb-ticket').classList.remove('active');

    // RESET TICKET
    document.getElementById('mb-user-name').value = '';
    document.getElementById('mb-km-total').value = '';
    document.getElementById('mb-user-age').value = 'maggiorenne';
  }
)