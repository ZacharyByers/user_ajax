$(document).ready( function() {
  var $userList = $('#user-list')

  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/users',
    type: 'GET',
    dataType: 'JSON'
  }).done( function(data) {
    data.forEach( function(user) {
      $userList.append('<li>' + user.first_name + ' ' + user.last_name + ', phone: ' + user.phone_number + '</li>')
    })
  }).fail( function(user) {
    console.log(data)
  })

  $('#user-form').on('submit', function() {
    var formData = $(this)
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/users/',
      type: 'POST',
      dataType: 'JSON',
      data: {
        "user[first_name]": formData.context[0].value,
        "user[last_name]": formData.context[1].value,
        "user[phone_number]": formData.context[2].value
      }
    })
  })

})
