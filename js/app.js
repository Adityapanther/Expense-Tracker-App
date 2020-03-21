const display = document.getElementById('screen');
const totalIncome = document.getElementsByName('totalIncome');
const HouseRents = document.getElementsByName('HouseRents')
const education = document.getElementsByName('education');
const other = document.getElementsByName('other');
const calculateBtn = document.getElementById('calculateBtn');


calculateBtn.addEventListener("onclick", ()=>{
    console.log(totalIncome.value);
    console.log("hi");
    
})