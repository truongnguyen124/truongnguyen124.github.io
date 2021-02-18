var input_item = {
    name: "",
    check_status: false,
    is_new: true
}

var items = []

function display_item() {
    $.each(items, function(index, value) {
        if(value.is_new) {
            $(".to-do-list").append(`
            <div class="item" id="item-${index}">
                <input class="input-check" type="checkbox" value="${index}" name="item-check">
                <label class="item-name" id="input-check-${index}">${value.name}</label>
                <button class="delete-btn" value="${index}"><i class="fas fa-minus-square"></i></button>
            </div>
            `)
        }
        value.is_new = false

        if(value.check_status){
            $(`#input-check-${index}`).css("text-decoration", "line-through")
            $(`#item-${index}`).css("background-color", "rgb(50, 50, 50)")
        } else  {
            $(`#input-check-${index}`).css("text-decoration", "none")
            $(`#item-${index}`).css("background-color", "rgb(94, 94, 94)")
        }
    })
}

function add_item() {
    var temp = {...input_item}
    temp.name = $('#input-text').val()
    if (temp.name != "") {
        items.push(temp)
        $('#input-text').val('')
        display_item()
    }
}

function done_item() {
    $('input[name="item-check"]').click(function(){
        var index = $(this).val()
        if($(this).prop('checked')==true){
            items[index].check_status = true
        } else {
            items[index].check_status = false
        }
        display_item()
    })
}

function delete_item() {
    $(".delete-btn").click(function () {
        console.log("delete pressed")
        var index = $(this).val()
        $(`#item-${index}`).remove()
        display_item()
    })
}

$(document).ready(function () {
    display_item()

    //Add button
    $('#add').click(function () {
        add_item()
        done_item()
        delete_item()
    })

    $('#input-text').on("keypress", function (e) {            
        if (e.keyCode == 13) {
            // Cancel the default action on keypress event
            e.preventDefault(); 
            add_item()
            done_item()
            delete_item()
        }
    })
    
})

