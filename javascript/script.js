var onSubmit = function (id){
    $.ajax({
        url: 'localhost:3000/api/book/' + id,
        type: 'DELETE',
        success: function (result) {
            console.log("item was deleted");
        }
    })
}