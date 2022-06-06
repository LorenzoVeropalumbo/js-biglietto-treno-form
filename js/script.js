const generateButton = document.getElementById('generate-button');
const canceledButton = document.getElementById('canceled-button');
const passengerName = document.getElementById('passenger-name');
const offertType = document.getElementById('offert-type');
const cabNumber = document.getElementById('cab-number');
const codeCp = document.getElementById('code-cp');
const ticketPrice = document.getElementById('ticket-price');

generateButton.addEventListener('click',

  function () {
    const userName = document.getElementById('mb-user-name').value;
    const userKm =  parseInt(document.getElementById('mb-km-total').value);
    const userAge = document.getElementById('mb-user-age').value;

    const price = userKm * 0.21;
    let discount = 0;
    let OffertTypes = "Biglietto Standard";

    if(userAge === 'minorenne'){
      discount = price * 20 / 100;
      OffertTypes = "Sconto Minorenni";
    }
    else if(userAge === 'over'){
      discount = price * 40 / 100;
      OffertTypes = "Sconto Over 65";
    }

    const finalPrice = price - discount;

    passengerName.innerHTML = userName;
    offertType.innerHTML = OffertTypes;
    cabNumber.innerHTML = Math.floor(Math.random() * 11);
    codeCp.innerHTML = Math.floor(Math.random() * 80000) + 40000;
    ticketPrice.innerHTML = finalPrice.toFixed(2)

    document.querySelector('.mb-ticket').classList.add('active');
  }
)

canceledButton.addEventListener('click',
  function () { 
    document.querySelector('.mb-ticket').classList.remove('active');

    document.getElementById('mb-user-name').value = '';
    document.getElementById('mb-km-total').value = '';
    document.getElementById('mb-user-age').value = 'maggiorenne';
  }
)