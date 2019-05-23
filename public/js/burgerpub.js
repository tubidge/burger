$('#create-form').on('submit', function (event) {
    console.log('SUBMITTING')
    event.preventDefault();
    var burgerName = $('#burger-name').val().trim();
    var data = { burger_name: burgerName };
    console.log(data);
    $.ajax({
        url: '/burgers',
        method: 'POST',
        data: data,
    }).then(function () {
        console.log('Added new burger!');
        location.reload();
    });
});


$('.devour-btn').each(function (index, element) {
    console.log('attaching event listener...');
    var ele = $(this);
    console.log(ele);
    ele.on('click', devourBurger);
    //TODO: Refactor line below to use jquery objects and function
    // element.addEventListener('click', devourBurger)
})



function devourBurger() {
    var curious = $(this);
    console.log(curious)
    var burgerID = $(this).data('id');
    var data = { burger_id: burgerID };
    console.log(data)
    $.ajax({
        url: '/burgers',
        method: 'PUT',
        data: data,
    }).then(function () {
        console.log('You devoured that burger!');
        location.reload();
    });
}

// $('.devour-btn').on('click', function (event) {
//     $.ajax({
//         url: '/',
//         method: 'PUT',
//         data: $(this).data('id'),
//     }).then(function () {
//         console.log('You devoured that burger!');
//         location.reload();
//     });
// });