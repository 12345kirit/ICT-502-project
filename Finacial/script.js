function calculateLoan() {
  const amount = parseFloat(document.getElementById('amount').value);
  const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
  const years = parseFloat(document.getElementById('years').value) * 12;
  const x = Math.pow(1 + rate, years);
  const monthly = (amount * x * rate) / (x - 1);

  if (isFinite(monthly)) {
    document.getElementById('result').innerHTML =
      `<p>Monthly Payment: $${monthly.toFixed(2)}</p>`;
  } else {
    document.getElementById('result').innerHTML = '<p>Please enter valid numbers.</p>';
  }
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your consultation request has been sent!');
});
