const loanAmountEl = document.getElementById("loanAmount");
const interestRateEl = document.getElementById("interestRate");
const loanTermEl = document.getElementById("loanTerm");
const monthlyPaymentEl = document.getElementById("monthlyPayment");

const calculateLoan = () => {
  const loanAmount = loanAmountEl.value;
  const interestRate = interestRateEl.value;
  const loanTerm = loanTermEl.value;

  interest = (loanAmount * interestRate * 0.01) / loanTerm;

  const monthlyPayment = (loanAmount / loanTerm + interest).toFixed(2);

  monthlyPaymentEl.innerHTML = monthlyPayment;
};
calculateLoan();
