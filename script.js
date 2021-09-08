const getDOMElements = () => {
  return {
    initialPrice: document.querySelector(".initialPrice"),
    quantity: document.querySelector(".quantity"),
    currentPrice: document.querySelector(".currentPrice"),
    outputRes: document.querySelector(".outputRes"),
    container: document.querySelector(".container")
  };
}

const checkStatus = () => {
  const initialPrice = parseFloat(getDOMElements().initialPrice.value);
  const quantity = parseFloat(getDOMElements().quantity.value);
  const currentPrice = parseFloat(getDOMElements().currentPrice.value);

  if(initialPrice && currentPrice && quantity){
    let outputString = "";

    const remainder = currentPrice*quantity - initialPrice*quantity;
    const percentage = (remainder/initialPrice) * 100;
    
    if(remainder < 0){
      outputString = "Sorry, You are currently at loss at amount " + Math.abs(remainder).toString() + " with loss percentage of " + Math.abs(percentage) + "%";
      getDOMElements().container.style.backgroundColor = "#FEE2E2";
    }
    else if(remainder === 0){
      outputString = "You are currently at neutral state i.e no profit nor loss";
      getDOMElements().container.style.backgroundColor = "#F3F4F6";
    }
    else{
      outputString = "Congratulations!! You are at profit at amount " + remainder.toString() + " with profit percentage of " + Math.abs(percentage) + "%";
      getDOMElements().container.style.backgroundColor = "#D1FAE5";
    }
    getDOMElements().outputRes.innerHTML = outputString;
  }
  else{
    alert("Please enter all the details");
  }
}