const url = "http://localhost:3000/api/v1/housewives"


// API REQUESTS
const getAllNames = () => { $.get(url, {franchise: "All"}, displayNames) }
function getNamesFranchise(event) {
  let city = event.target.innerHTML
  $.get(url, {franchise: city }, displayNames)
}

const getDetails = (id) => { $.get(url + "/" + id, displayDetails) }
const addNew = (serialized_form) => { $.post(url, serialized_form, displayDetails).done(getAllNames) }


// DISPLAY JSON DATA
function displayNames(housewives) {
  const names = housewives.map( function (housewife) {
    return nameHtml(housewife)
  })
  $('#housewives').html(names.join(''))
}

function displayDetails(housewife) {
  hideForm(), showDetails()
  $('#housewife-details').html( housewifeDetailsHtml(housewife) )
}

const displayForm = () => { hideDetails(), showForm() }

// HELPER FUNCTIONS
const showForm = () =>  { $('#new-housewife-div').show() }
const hideForm = () => { $('#new-housewife-div').hide() }
const hideDetails = () => { $('#housewife-details-div').hide() }
const showDetails = () => { $('#housewife-details-div').show() }

 // HTML Templates
const nameHtml = (housewife) => { return `<li> <a href="#" onclick="getDetails(${housewife.id})"> <p> ${housewife.name} </p> </a> </li>`}
function housewifeDetailsHtml(housewife){
  return  `<h4> ${housewife.name} </h4>
          <p> <img src="${housewife.photo}" class="circle responsive-img"> </p>
          <p> Which City Is She From?: ${housewife.franchise} </p>
          <p> Does She Have A S/O?: ${housewife.spouse} </p>
          <p> How Much Is She Worth?: ${housewife.net_worth} </p>
          <p> Has She Had Plastic Surgery?: ${housewife.plastic_surgery} </p>
          <p> Age: ${housewife.age} </p>`
}

// Events
$(document).ready(function () {
  getAllNames()

  $('#new_housewife').submit(function (event) {
    event.preventDefault()
    let serialized_form = $(this).serialize()
    addNew(serialized_form)
  })

})
