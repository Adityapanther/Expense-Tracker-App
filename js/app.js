const display = document.getElementById('screen');
const totalIncome = document.getElementById('totalIncome').value;
const HouseRents = document.getElementById('houseRents').value;
const education = document.getElementById('education').value;
const other = document.getElementById('other').value;
const calculateBtn = document.getElementById('calculateBtn');


calculateBtn.addEventListener('click',(event) => {
   event.preventDefault();
   console.log("hi");
   

});

function calculation(){
   let expense = HouseRents + education + other
   let result = totalIncome + expense
   display.innerHTML = result

   console.log(result);
   
}
