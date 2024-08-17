const incrementbtn = document.querySelector(`.counter .increment`);
const cartvalue = document.querySelector(`.counter input`);

const increment = () => {
  let oldvalue = Number(cartvalue.value);
  let newvalue = oldvalue + 1;
  cartvalue.value = newvalue;
  decrementbtn.classList.remove("disable")
};

incrementbtn.addEventListener("click", increment);

const decrementbtn = document.querySelector(`.counter .decrement`);

const decrement = () => {
  let oldvalue = Number(cartvalue.value);
  if(oldvalue > 1)
  cartvalue.value = Number(cartvalue.value) - 1;

  if (cartvalue.value <= 1) {
    decrementbtn.classList.add("disable")
  }

};

decrementbtn.addEventListener("click", decrement);

//* Range Slider Input

const rangeslider = document.querySelector(".rangeslider input")
const rangeheading = document.querySelector(".rangeslider h2")

const updateslidervalue = () => {
 rangeheading.innerHTML = rangeslider.value
}

rangeslider.addEventListener("input",updateslidervalue )

//* Range Slider Input Ends

//* Passtoggler 

const togglerbtn = document.querySelector(".passtoggler button")
const password = document.querySelector(".passtoggler input")


const  passwordtoggler = () => {
  if (password.type == "password") {
    password.type ="text" 
    togglerbtn.innerHTML = `<i class="bi bi-eye"></i>`;
  } else {
    password.type ="password"
    togglerbtn.innerHTML = `<i class="bi bi-eye-slash"></i>`;
 }

}
togglerbtn.addEventListener("click",passwordtoggler)
const showtogglerbtn = () => {
if (password.value.length >= 2) {
  togglerbtn.classList.add(`show`)
} else
togglerbtn.classList.remove(`show`)
}
password.addEventListener(`keyup`,showtogglerbtn)