$(document).ready(function () {
  getIndexView()


  $('#new_housewife').submit(function (event) {
        event.preventDefault()
        let values = $(this).serialize()
        let posting = $.post('http://localhost:3000/api/v1/housewives', values)
        $('#new_housewife').trigger("reset")
        posting.done(function (data) {
            console.log(data)
            showDetails(data)
            getIndexView()
        })
      })
})



const index_url = "http://localhost:3000/api/v1/housewives"

function getIndexView() {
  $.ajax({
    url: index_url,
    success: function(response){
      console.log(response)
    const lis = response.map(function(housewife) {
      return `<li><a href = "#" onclick="getDetails(${housewife.id})">${housewife.name}</a></li>`
    })
    $('#housewives').html(lis.join(''))
    }
  })
}

function getDetails(id) {
  $.ajax({
    url: index_url + "/" + id,
    success: function(response){
      console.log(response)
      showDetails(response)
    }
  })
}

function showDetails(housewife) {
  const details =
    `<h4> ${housewife.name} </h4>
    <p><img src="${housewife.photo}" class="circle responsive-img"></p>
    <p>Which City Is She From?: ${housewife.franchise}</p>
    <p>Does She Have A S/O?: ${housewife.spouse}</p>
    <p>How Much Is She Worth?: ${housewife.net_worth}</p>
    <p>Has She Had Plastic Surgery?: ${housewife.plastic_surgery}</p>
    <p>Age: ${housewife.age}</p>`
  $('#housewife-details').html(details)
}
