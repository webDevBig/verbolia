let n = 0;
let link_number = 3;

$('.add_url').click(function () {
    $(this).parent('.block-edit-template').find('.panel').addClass('remove')

    //create div for url info
    var newURLdiv = document.createElement('div');
    newURLdiv.setAttribute("class", "row-action");


    //add url input
    var newURLinput = document.createElement('div');
    newURLinput.setAttribute("class", "form__field");
    jQuery(newURLinput).append('<label>URL</label><input type="text" value="" class="url_input" id="">')


    //add Language input
    var newLangdiv = document.createElement('div');
    newLangdiv.setAttribute("class", "form__field");
    jQuery(newLangdiv).append('<label>Language</label><div class="form__field-holder full-width"><select id="select-lang" class="chosen-select select-light"><option>EN</option><option>FR</option></select></div>')

    //add Country input
    var newCounrydiv = document.createElement('div');
    newCounrydiv.setAttribute("class", "form__field");
    jQuery(newCounrydiv).append('<label>Country</label><div class="form__field-holder full-width"><select id="select-country" class="chosen-select select-light"><option>GB</option><option>GB</option></select></div>')

    //add x-default input
    var newXdiv = document.createElement('div');
    newXdiv.setAttribute("class", "form__field");
    jQuery(newXdiv).append('<label>x-default</label><input type="text" value="" class="x-default_input" id="">')

    //add delete btn input
    var newDeletebtn = document.createElement('button');
    newDeletebtn.setAttribute("class", "btn-icon btn-delete");
    newDeletebtn.setAttribute("id", "btn-delete-url");



    newURLdiv.append(newURLinput, newLangdiv, newCounrydiv, newXdiv, newDeletebtn);

    $("#addURLdiv").append(newURLdiv);
    n++;

})


$('.add_link').click(function () {

    //create div for url info
    var newSortLdiv = document.createElement('div');
    newSortLdiv.setAttribute("class", "row");

    //add Language input
    var newNamediv = document.createElement('div');
    newNamediv.setAttribute("class", "form__clm");
    jQuery(newNamediv).append('<label>Link ' + link_number + '</label><select name="" class="linking_select"><option value="1">https://demo.qa.verbolia.com/v/basilik-gaming-mouse</option><option value="2">https://demo.qa.verbolia.com/v/basilik-gaming-mouse</option><option value="3">https://demo.qa.verbolia.com/v/basilik-gaming-mouse</option><option value="4">https://demo.qa.verbolia.com/v/basilik-gaming-mouse</option></select>  <div class="dropdown-select wide linking_select" tabindex="0"><span class="current"></span><div class="list"><div class="dd-search"><input id="txtSearchValue" autocomplete="off" onkeyup="filter()" class="dd-searchbox" type="text"></div><ul><li class="option selected" data-value="1" data-display-text="" tabindex="0">https://demo.qa.verbolia.com/v/basilik-gaming-mouse</li><li class="option " data-value="2" data-display-text="" tabindex="0">https://demo.qa.verbolia.com/v/basilik-gaming-mouse</li><li class="option " data-value="3" data-display-text="" tabindex="0">https://demo.qa.verbolia.com/v/basilik-gaming-mouse</li><li class="option " data-value="4" data-display-text="" tabindex="0">https://demo.qa.verbolia.com/v/basilik-gaming-mouse</li></ul></div></div></div>')

    var newTextdiv = document.createElement('div');
    newTextdiv.setAttribute("class", "form__clm");
    jQuery(newTextdiv).append('<label>Link text</label><div class="form__field-holder full-width refresh_icon"> <input value = "Basilik gaming mouse" type = "text" ></div>')

    //add delete btn input
    var newDeletebtn = document.createElement('a');
    newDeletebtn.setAttribute("class", "delete");

    newSortLdiv.append(newNamediv, newTextdiv, newDeletebtn);

    $("#addLinkdiv").append(newSortLdiv);
    //    create_custom_dropdowns();

    n++;
    link_number++;

})



$(document).on('click', '#btn-delete-url', function () {
    n--;
    $(this).parents('.row-action').remove();
    if (n == 0) {

        $('#noUrl').removeClass('remove')
    }

});

$(document).on('click', '.delete', function () {
    n--;
    $(this).parents('.row').remove();

});




$('.add_sorting').click(function () {

    //create div for url info
    var newSortLdiv = document.createElement('div');
    newSortLdiv.setAttribute("class", "row-action");




    //add Language input
    var newNamediv = document.createElement('div');
    newNamediv.setAttribute("class", "form__field");
    jQuery(newNamediv).append('<label>Field name sorting</label><div class="form__field-holder full-width"><div class = "dropdown-select wide linking_select chosen-select select-light" id = "select-sorting"> <span class = "current" ></span><div class = "list"><ul><li class = "option selected"> None </li> <li class = "option "> None </li></ul></div></div></div>')

    //add Country input
    var newOrderdiv = document.createElement('div');
    newOrderdiv.setAttribute("class", "form__field");
    jQuery(newOrderdiv).append('<label>Sorting order</label><div class="form__field-holder full-width"><div class = "dropdown-select wide linking_select chosen-select select-light" id="sorting_order"><span class = "current"></span><div class = "list"><ul><li class = "option selected"> Ascending </li><li class = "option "> Ascending </li> </ul></div></div></div>')


    //add delete btn input
    var newDeletebtn = document.createElement('button');
    newDeletebtn.setAttribute("class", "btn-icon btn-delete");
    newDeletebtn.setAttribute("id", "btn-delete-url");



    newSortLdiv.append(newNamediv, newOrderdiv, newDeletebtn);

    $("#addSortingdiv").append(newSortLdiv);
    n++;

})

$('.popup-open').click(function () {
    $(this).parents('.block-edit-template').find('.text-js').toggleClass('hide')
})
$('.popup-close').click(function () {
    $(this).parents('.block-edit-template').find('.text-js').toggleClass('hide')
})

$('.open_cold_cont').click(function () {

    $(this).parents('.block-edit-template').find('.popup-content').toggleClass('popup-active')
    $(this).parents('.block-edit-template').toggleClass('parent-popup-active')
})
$('.close_cold_cont').click(function () {

    $(this).parents('.block-edit-template').find('.popup-content').toggleClass('popup-active')
    $(this).parents('.block-edit-template').toggleClass('parent-popup-active')
})

$(".change_btn_cont").click(function () {
    $('.changed_btn').toggleClass('black_btn');
})


// Event listeners

// Open/close
$(document).on('click', '.dropdown-select', function (event) {
    if ($(event.target).hasClass('dd-searchbox')) {
        return;
    }
    $('.dropdown-select').not($(this)).removeClass('open');
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
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
        $('.dropdown-select .option').removeAttr('tabindex');
    }
    event.stopPropagation();
});

//function filter() {
//    var valThis = $('#txtSearchValue').val();
//    $('.dropdown-select ul > li').each(function () {
//        var text = $(this).text();
//        (text.toLowerCase().indexOf(valThis.toLowerCase()) > -1) ? $(this).show(): $(this).hide();
//    });
//};
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

//$(document).ready(function () {
//    create_custom_dropdowns();
//});

function valueChanged() {
    if ($('#links').is(":checked"))
        $("#show_links").show();
    else
        $("#show_links").hide();
}
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

var width = $('.block-editor').innerWidth();
console.log(width);
$(window).scroll(function (e) {
    var $el = $('.fixedElement');
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 150 && !isPositionFixed) {
        $el.css({
            'position': 'fixed',
            'top': '0px',
            'padding': '16px 0',
            'width': width
        });
    }
    if ($(this).scrollTop() < 150 && isPositionFixed) {
        $el.css({
            'position': 'static',
            'top': '0px',
            'padding': '0px 0 16px'
        });
    }
});


let addbutton = document.getElementById("addbutton");
addbutton.addEventListener("click", function () {
    let boxes = document.getElementById("boxes");
    let clone = boxes.firstElementChild.cloneNode(true);
    boxes.appendChild(clone);
});

$(document).on('click', '.change_btn_cont', function () {

    $(this).parents('.block-options__popup').toggleClass('parent-popup-active');
    $(this).parents('.block-options__popup').find('.popup-content').toggleClass('popup-active');

});



//$('.addbutton').click(function () {
//
//    //create main div
//    var newMainDiv = document.createElement('div');
//    newMainDiv.setAttribute("class", "block-options__popup block-slide-popup");
//
//
//    //create field-row
//    var newFieldRow = document.createElement('div');
//    newFieldRow.setAttribute("class", "field-row");
//
//    //create product-matching-rules__holder
//    var newProductMatching = document.createElement('div');
//    newProductMatching.setAttribute("class", "product-matching-rules__holder");
//
//    //add p.Head
//    var newP = document.createElement('p');
//    newP.setAttribute("class", "head");
//    jQuery(newP).append('Search filters')
//
//    //create div
//    var newDivBox = document.createElement('div');
//    newDivBox.setAttribute("class", "bg_box");
//
//    //create div
//    var newPopUpCont = document.createElement('div');
//    newPopUpCont.setAttribute("class", "popup-content popup-content-search_filters");
//
//
//    //add show/hide
//    var newShowHide = document.createElement('a');
//    newShowHide.setAttribute("class", "popup-open change_btn_cont");
//    //    newShowHide.setAttribute("href", "#");
//    jQuery(newShowHide).append('<i class="icon-arrow-drop"></i>')
//
//    //add Field input
//    var newField = document.createElement('div');
//    newField.setAttribute("class", "form__field");
//    jQuery(newField).append('<label>Field</label><div class="form__field-holder full-width"><div class = "dropdown-select wide linking_select chosen-select select-light chosen-container-single chosen-container-single-nosearch" > <span class = "current" ></span><div class = "list"><ul><li class = "option selected"> Product Title</li> <li class = "option "> Product Title </li></ul></div></div></div>')
//
//
//    //add Operator input
//    var newOperator = document.createElement('div');
//    newOperator.setAttribute("class", "form__field");
//    jQuery(newOperator).append('<label>Operator</label><div class="form__field-holder full-width"><div class = "dropdown-select wide linking_select chosen-select select-light" > <span class = "current" ></span><div class = "list"><ul><li class = "option selected"> Contains</li> <li class = "option "> Contains </li></ul></div></div></div>')
//
//    //add Value input
//    var newValue = document.createElement('div');
//    newValue.setAttribute("class", "form__field");
//    jQuery(newValue).append(' <label>Value</label><div class="form__field-holder full-width"><input type="text" placeholder="Value"></div>')
//
//
//
//    //add and btn input
//    var newAndbtn = document.createElement('button');
//    newAndbtn.setAttribute("class", "btn btn-black small-icon btn-add");
//    jQuery(newAndbtn).append('<i class="icon-add"></i>AND')
//
//    //add or btn input
//    var newOrbtn = document.createElement('button');
//    newOrbtn.setAttribute("class", "btn btn-orange-light small-icon btn-or");
//    jQuery(newOrbtn).append('<i class="icon-add"></i> OR')
//
//
//    //add delete btn input
//    var newDeletebtn = document.createElement('button');
//    newDeletebtn.setAttribute("class", "btn-icon btn-delete");
//
//
//    newFieldRow.append(newField, newOperator, newValue, newAndbtn, newOrbtn, newDeletebtn);
//    newProductMatching.append(newFieldRow);
//    newDivBox.append(newP, newProductMatching);
//    newPopUpCont.append(newDivBox);
//    newMainDiv.append(newShowHide, newPopUpCont);
//
//
//    $(this).parents('.popup-active').find('#boxes').append(newMainDiv);
//    //    $("#boxes").append(newMainDiv);
//    n++;
//
//})
//

// caching the elements

var div = document.getElementById('textDiv'),
    value = document.getElementById('value')



var textEditSpan = document.getElementById('textEditSpan')
textEditSpan.textContent = document.getElementById('h1_generated_text').innerHTML;

var text = textEditSpan.textContent + ' ';


let input_text, br

input.onfocus = function () {
    browsers.style.display = 'block';
};

for (let option of browsers.options) {
    option.onclick = function () {
        let option_item = document.createElement("div");
        option_item.setAttribute("class", "optionText");


        let p = document.createElement("span");
        let deleteItem = document.createElement("a");
        deleteItem.setAttribute("class", "deleteItem");


        input_text = document.createElement("span");
        input_text.setAttribute("role", "textbox");
        input_text.setAttribute("id", "textEditSpan");
        input_text.setAttribute("class", "textEdit");
        input_text.setAttribute("contenteditable", "");


        input.value = option.value;

        p.append(input.value);
        option_item.append(p, deleteItem)
        div.append(option_item);
        div.append(input_text);

        browsers.style.display = 'none';
        input.value = '';
    }
};


input.oninput = function () {
    currentFocus = -1;
    var text = input.value.toUpperCase();
    for (let option of browsers.options) {
        if (option.value.toUpperCase().indexOf(text) > -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    };
}
var currentFocus = -1;
input.onkeydown = function (e) {
    if (e.keyCode == 40) {
        currentFocus++
        addActive(browsers.options);
    } else if (e.keyCode == 38) {
        currentFocus--
        addActive(browsers.options);
    } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (browsers.options) browsers.options[currentFocus].click();
        }
    }
}

function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("active");
}

function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
}


$(document).on('click', '.edit_h1_close', function () {
    text = div.innerHTML;
    console.log(div.textContent)
    document.getElementById("h1_generated_text").innerHTML = text

});


$(document).on('click', '.deleteItem', function () {

    $(this).parents('.optionText').remove();

});




// Meta description
var divDescription = document.getElementById('textDivDescription'),
    valueDescription = document.getElementById('valueDescription')



var textEditSpanDescription = document.getElementById('textEditSpanDescription')
textEditSpanDescription.textContent = document.getElementById('Description_generated_text').innerHTML;

var textDescription = textEditSpanDescription.textContent + ' ';


let input_textDescription

inputDescription.onfocus = function () {
    browsersDescription.style.display = 'block';
};

for (let option of browsersDescription.options) {
    option.onclick = function () {
        let option_item = document.createElement("div");
        option_item.setAttribute("class", "optionText");


        let p = document.createElement("span");
        let deleteItem = document.createElement("a");
        deleteItem.setAttribute("class", "deleteItem");
        
        
        input_textDescription = document.createElement("span");
        input_textDescription.setAttribute("role", "textbox");
        input_textDescription.setAttribute("id", "textEditSpan");
        input_textDescription.setAttribute("class", "textEdit");
        input_textDescription.setAttribute("contenteditable", "");


        inputDescription.value = option.value;

        p.append(inputDescription.value);
        option_item.append(p, deleteItem)
        divDescription.append(option_item);
        divDescription.append(input_textDescription);

        browsersDescription.style.display = 'none';
        inputDescription.value = '';
    }
};


inputDescription.oninput = function () {
    currentFocus = -1;
    var text = inputDescription.value.toUpperCase();
    for (let option of browsersDescription.options) {
        if (option.value.toUpperCase().indexOf(text) > -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    };
}
var currentFocus = -1;
inputDescription.onkeydown = function (e) {
    if (e.keyCode == 40) {
        currentFocus++
        addActive(browsersDescription.options);
    } else if (e.keyCode == 38) {
        currentFocus--
        addActive(browsersDescription.options);
    } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (browsersDescription.options) browsersDescription.options[currentFocus].click();
        }
    }
}

function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("active");
}

function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
}


$(document).on('click', '.edit_Description_close', function () {
    text = divDescription.innerHTML;
    console.log(divDescription.textContent)
    document.getElementById("Description_generated_text").innerHTML = text

});






// Meta Title
var divTitle = document.getElementById('textDivTitle'),
    valueTitle = document.getElementById('valueTitle')



var textEditSpanTitle = document.getElementById('textEditSpanTitle')
textEditSpanTitle.textContent = document.getElementById('Title_generated_text').innerHTML;

var textTitle = textEditSpanTitle.textContent + ' ';


let input_textTitle

inputTitle.onfocus = function () {
    browsersTitle.style.display = 'block';
};

for (let option of browsersTitle.options) {
    option.onclick = function () {
        let option_item = document.createElement("div");
        option_item.setAttribute("class", "optionText");


        let p = document.createElement("span");
        let deleteItem = document.createElement("a");
        deleteItem.setAttribute("class", "deleteItem");
        
        
        input_textTitle = document.createElement("span");
        input_textTitle.setAttribute("role", "textbox");
        input_textTitle.setAttribute("id", "textEditSpan");
        input_textTitle.setAttribute("class", "textEdit");
        input_textTitle.setAttribute("contenteditable", "");


        inputTitle.value = option.value;

        p.append(inputTitle.value);
        option_item.append(p, deleteItem)
        divTitle.append(option_item);
        divTitle.append(input_textTitle);

        browsersTitle.style.display = 'none';
        inputTitle.value = '';
    }
};


inputTitle.oninput = function () {
    currentFocus = -1;
    var text = inputTitle.value.toUpperCase();
    for (let option of browsersTitle.options) {
        if (option.value.toUpperCase().indexOf(text) > -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    };
}
var currentFocus = -1;
inputTitle.onkeydown = function (e) {
    if (e.keyCode == 40) {
        currentFocus++
        addActive(browsersTitle.options);
    } else if (e.keyCode == 38) {
        currentFocus--
        addActive(browsersTitle.options);
    } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (browsersTitle.options) browsersTitle.options[currentFocus].click();
        }
    }
}

function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("active");
}

function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
}


$(document).on('click', '.edit_Title_close', function () {
    text = divTitle.innerHTML;
    console.log(divTitle.textContent)
    document.getElementById("Title_generated_text").innerHTML = text

});

