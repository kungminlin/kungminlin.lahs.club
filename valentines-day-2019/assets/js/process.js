// Listeners
$(document).ready(function() {
  $('#fortune-form input[type="button"]').click(function() {
    processLoveFortune($('#fortune-form').serializeArray())
  })
})

function processLoveFortune(d) {
  var data;
  d.forEach(function(entry) {
    data[entry.name] = entry.value;
  })
}
