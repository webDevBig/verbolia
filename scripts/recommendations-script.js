//sorting

$(document).ready(function () {
    var options = {
        //		headerRow: 1, // bind widgets on 2nd header row
        hints: ['', '', 'cancel the ascending sort', 'cancel the descending sort']
    };
    $('#myTable').tablesort3s(options);
});





$('.minus').click(function () {
    var $input = $(this).parent().parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.plus').click(function () {
    var $input = $(this).parent().parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});






$("#open_createRule_box").click(function () {

    $('#recommendations_main').addClass('hide')
    $('#createRule_box').removeClass('hide')

    $('#recommendations_btn_box').addClass('hide')
    $('#rule_btn_box').removeClass('hide')
})


$(document).on('click', '.products_matching_delete', function () {
    n--;
    $(this).parents('.row').parents('.box').remove();

});

$("#save_rule").click(function () {

    $('#recommendations_main').removeClass('hide')
    $('#createRule_box').addClass('hide')
    $('#noRule_box').addClass('hide')

    $('#recommendations_btn_box').removeClass('hide')
    $('#rule_btn_box').addClass('hide')
})

$("#cansel_rule").click(function () {

    $('#createRule_box').addClass('hide')
    $('#noRule_box').removeClass('hide')
})



$('#products_matching_switch').change(function () {
    if ($('#products_matching_switch:checked').is(":checked")) {
        $('.products_matching_show').addClass('active')
    } else {
        $('.products_matching_show').removeClass('active')
    }
});

$('#display_related_links').change(function () {
    if ($('#display_related_links:checked').is(":checked")) {
        $('.display_related_links_show').addClass('active')
    } else {
        $('.display_related_links_show').removeClass('active')
    }
});



let n = 0;



$('.add_parameter').click(function () {

    //create div for url info
    var newParameterdiv = document.createElement('div');
    newParameterdiv.setAttribute("class", "row_box row");


    //add product attribute
    var newProductAttribute = document.createElement('div');
    newProductAttribute.setAttribute("class", "form__field-holder");
    jQuery(newProductAttribute).append('<label>Current product attribute</label><input value="Text here" type="text" class="full_widthInput">')


    //addValue input
    var newValueInput = document.createElement('div');
    newValueInput.setAttribute("class", "form__field-holder");
    jQuery(newValueInput).append('<label>Value</label><input value="Text here" type="text" class="full_widthInput">')


    //add delete btn input
    var newDeletebtn = document.createElement('a');
    newDeletebtn.setAttribute("class", "delete");


    newParameterdiv.append(newProductAttribute, newValueInput, newDeletebtn);

    $("#addURLdiv").append(newParameterdiv);
    n++;

})

$('#addProductRule').click(function () {

    $('.cloning_tabs').clone(true).appendTo('#newProductRule');


    $("#newProductRule").find('.cloning_tabs').removeClass('cloning_tabs').removeClass('tabs_active_block')

})


//when click on "Trigger recommendations on URL"
$('#addTriggerUrl').click(function () {

    //    $('.cloningURLBox').clone(true).appendTo('#newConditionBox').removeClass('card cloningURLBox').removeAttr( "draggable");
    $('.cloningURLBox').clone(true).appendTo('#newConditionBox').removeClass('cloningURLBox');
    $('.cloneSwitcher').clone(true).appendTo('#newConditionBox').removeClass('cloneSwitcher');


})


//when click on "Trigger recommendations on current product attribute"
$('#addTriggerAtr').click(function () {


    $('.cloningTriggerAtr').clone(true).appendTo('#newConditionBox').removeClass('cloningTriggerAtr hide');
    $('.cloneSwitcher').clone(true).appendTo('#newConditionBox').removeClass('cloneSwitcher');


})

//when click on "Trigger recommendations on parameter sent to API"
$('#addTriggerAPI').click(function () {
    $('.cloningAPIBox').clone(true).appendTo('#newConditionBox').removeClass('card cloningAPIBox').removeAttr("draggable");
    $('.cloneSwitcher').clone(true).appendTo('#newConditionBox').removeClass('cloneSwitcher');

})



$(document).on('click', '.delete', function () {
    n--;
    $(this).parents('.row').parents('.box').remove();

});


$(document).on('click', '.tab_item1', function () {
    $(this).parents('.choosen-block').find('.choose-item').toggleClass('active')


});
$(document).on('click', '.tab_item2', function () {
    $(this).parents('.choosen-block').find('.choose-item').toggleClass('active')

});


var columns = document.querySelectorAll('.card');
var draggingClass = 'dragging';
var dragSource;

Array.prototype.forEach.call(columns, function (col) {
    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('dragenter', handleDragEnter, false)
    col.addEventListener('dragover', handleDragOver, false);
    col.addEventListener('dragleave', handleDragLeave, false);
    col.addEventListener('drop', handleDrop, false);
    col.addEventListener('dragend', handleDragEnd, false);
});

function handleDragStart(evt) {
    dragSource = this;
    evt.target.classList.add(draggingClass);
    evt.dataTransfer.effectAllowed = 'move';
    evt.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(evt) {
    evt.dataTransfer.dropEffect = 'move';
    evt.preventDefault();
}

function handleDragEnter(evt) {
    this.classList.add('over');
}

function handleDragLeave(evt) {
    this.classList.remove('over');
}

function handleDrop(evt) {
    evt.stopPropagation();

    if (dragSource !== this) {
        dragSource.innerHTML = this.innerHTML;
        this.innerHTML = evt.dataTransfer.getData('text/html');
    }

    evt.preventDefault();
}

function handleDragEnd(evt) {
    Array.prototype.forEach.call(columns, function (col) {
    ['over', 'dragging'].forEach(function (className) {
            col.classList.remove(className);
        });
    });
}




// Event listeners


// Open/close
$(document).on('click', '.dropdown-select', function (event) {
    if ($(event.target).hasClass('dd-searchbox')) {
        return;
    }
    $('.dropdown-select').not($(this)).removeClass('open');
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).find('.option').attr('tabindex', 0);
        $(this).find('.selected').focus();
    } else {
        $(this).find('.option').removeAttr('tabindex');
        $(this).focus();
    }
});

// Close when clicking outside
$(document).on('click', function (event) {
    if ($(event.target).closest('.dropdown-select').length === 0) {
        $('.dropdown-select').removeClass('open');
        $('.dropdown-select').removeClass('active');
        $('.dropdown-select .option').removeAttr('tabindex');
    }
    event.stopPropagation();
});

function filter() {
    var valThis = $('#txtSearchValue').val();
    $('.dropdown-select ul > li').each(function () {
        var text = $(this).text();
        (text.toLowerCase().indexOf(valThis.toLowerCase()) > -1) ? $(this).show(): $(this).hide();
    });
};
// Search

// Option click
$(document).on('click', '.dropdown-select .option', function (event) {
    $(this).closest('.list').find('.selected').removeClass('selected');
    $(this).addClass('selected');
    var text = $(this).data('display-text') || $(this).text();
    $(this).closest('.dropdown-select').find('.current').text(text);
    $(this).closest('.dropdown-select').prev('select').val($(this).data('value')).trigger('change');
});

// Keyboard events
$(document).on('keydown', '.dropdown-select', function (event) {
    var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
    // Space or Enter
    //if (event.keyCode == 32 || event.keyCode == 13) {
    if (event.keyCode == 13) {
        if ($(this).hasClass('open')) {
            focused_option.trigger('click');
        } else {
            $(this).trigger('click');
        }
        return false;
        // Down
    } else if (event.keyCode == 40) {
        if (!$(this).hasClass('open')) {
            $(this).trigger('click');
        } else {
            focused_option.next().focus();
        }
        return false;
        // Up
    } else if (event.keyCode == 38) {
        if (!$(this).hasClass('open')) {
            $(this).trigger('click');
        } else {
            var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
            focused_option.prev().focus();
        }
        return false;
        // Esc
    } else if (event.keyCode == 27) {
        if ($(this).hasClass('open')) {
            $(this).trigger('click');
        }
        return false;
    }
});




//show any code by row

let copy_text = $('#modal_copy_text');

function star(string, token) {
    return string.replace(new RegExp(token, 'g'), '; <br>');
}
var new_text = star(copy_text.html(), ';');
copy_text.html(new_text);




//copy the code text to clipboard
const textElement = document.getElementById("modal_copy_text");
const copyButton = document.getElementById("copy");

const copyText = (e) => {
    window.getSelection().selectAllChildren(textElement);
    document.execCommand("copy");
};


copyButton.addEventListener("click", (e) => copyText(e));



//run test

$(".run").click(function () {

    $('.recomendation_box').addClass('hide')
    $('.test_result').removeClass('hide')

})
