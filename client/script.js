$(function(){
   $('.Packagebtn').on('click', function(){
       $.ajax({
           url:'/api/v1/appartment',
           contentType: 'application/json',
           success: function(response){
               console.log(response)
           }
       })
   })


   $('#addContact').on('submit', function(event) {
    //prevent page from resubmitting the form
    event.preventDefault();

    let createInput = $('#create-contact');

    $.ajax({
        url: '/api/v1/contact',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ email: createInput.val() }),
        success: function(response) {
            console.log(response);
            //empty input after sending
            createInput.val('');
            $('.subscribeButton').click()
        }
    });
});



});