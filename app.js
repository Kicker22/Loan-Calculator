document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e){
    e.preventDefault();

    
    // UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPaymenty = document.getElementById('monthly-payment');
    const totalPayment= document.getElementById('total-payment');
    const totalInterest= document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calulatedPayments = parseFloat(years.value) * 12;
    
    // compute monthly payments 
    const x = Math.pow(1 + calculatedInterest, calulatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);


    if(isFinite(monthly)){
        monthlyPaymenty.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calulatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calulatedPayments) - principal).toFixed(2);
    }else{
        console.log('Please Check your Numbers');
    }

}