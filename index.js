let telInput = document.querySelector("#tel");
let telDisplay = document.querySelector("#display");
let error = document.querySelector("#err_msg");
let img = document.querySelector("#img");

// List of prefixes for telecom service providers

const mtn_pref = [0803, 0806, 0810, 0813, 0814, 0816, 0903, 0906, 0913, 0703, 0706]
const glo_pref = [0805, 0807, 0811, 0705, 0815, 0905]
const airtel_pref = [0808, 0802, 0708, 0701, 0902, 0901, 0907, 0812]
const etisalat_pref = [0809, 0817, 0818, 0908, 0909]

document.querySelector(".container").style.display = "flex"
// Validation

const validate = () => {
  if (isNaN(telInput.value)) {
    error.innerHTML = "Please type in numbers only!"
  } else if (telInput.value.charAt(0) !== "0") {
    error.innerHTML = "Please start number with 0!"
  } else if (telInput.value.length < 4 || telInput.value.length > 11) {
    error.innerHTML = "Number must be at least 4 digits and not more than 11 digits!"
  } else {
    error.innerHTML = ""
  }
}

// checking condition

const checkPrefix = () => {
  let phone = `0${telInput.value.slice(0, 4)
    }`
  phoneNum = Number(phone)
  if (mtn_pref.includes(phoneNum)) {
    telDisplay.innerHTML = "This is an MTN number."
    telDisplay.style.color = "yellow"
    img.src = "./img/mtn.svg"
  } else if (glo_pref.includes(phoneNum)) {
    telDisplay.innerHTML = "This is a GLO number."
    telDisplay.style.color = "green"
    img.src = "./img/Glo.svg"
  } else if (airtel_pref.includes(phoneNum)) {
    telDisplay.innerHTML = "This is an Airtel number."
    telDisplay.style.color = "red"
    img.src = "./img/airtel.svg"
  } else if (etisalat_pref.includes(phoneNum)) {
    telDisplay.innerHTML = "This is a 9mobile number."
    telDisplay.style.color = "green"
    img.src = "./img/9mobile.svg"
  } else {
    telDisplay.innerHTML = ""
    img.src = "./img/AltSchool.svg"
  }
}

telInput.addEventListener("input", () => {
  validate()
  checkPrefix()
})
