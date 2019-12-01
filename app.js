document.getElementById('loan-form').addEventListener('submit', function(e){
    e.preventDefault()
    // hide results
    document.getElementById('results').style.display = 'none';


    // show loader
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults, 2000);
});

function calculateResults(){

    
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
        
        // show results
        
        document.getElementById('results').style.display = 'block';
        // hide loader
        document.getElementById('loading').style.display = 'none';


    }else{
        showError("please check your numbers");
    }

}


// show  Error 

function showError(error){

     // hide results
        
     document.getElementById('results').style.display = 'none';
     // hide loader
     document.getElementById('loading').style.display = 'none';

    // create div

    const errorDiv = document.createElement('div');
    // get element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');


    errorDiv.className = " alert alert-danger";

    // create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // insert err above heading 
    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000)
}

function clearError(){
    document.querySelector('.alert').remove()
}