// General DOM Elements Listeners
$(document).ready(function() {
  // Click outside to lose focus (does not yet work)
  // $(document).on('click', function(e) {
  //   if (!$(e.target).closest('.modal').length > 0) {
  //     $('#wrapper').css('filter', '');
  //     $('.modal').animate({'height':'toggle'}, function() {
  //       $('.modal').remove();
  //     })
  //   }
  // })

  $(document).on('click', '.close-modal', function() {
    $('#wrapper').css('filter', '');
    $('.modal').animate({'height': 'toggle'}, function() {
      $('.modal').remove();
    })
  })
})

function createModal(message) {
  $('.modal').remove();
  $modal = $.parseHTML("<div class='modal' style='display:none'><span class='icon fa-close close-modal'></span>><div class='modal-content'><header><h1></h1></header><hr><article></article></div></div>");
  $($modal).find('header h1').text(message.title);
  $($modal).find('article').html(message.message);
  $('body').append($modal);
  $('#wrapper').css('filter', 'blur(5px)');
  $('.modal').animate({'height': 'toggle'});
}
