var show_data = document.querySelectorAll('.item-name');
[].forEach.call(show_data, function (el) {
    el.onclick = function (e) {
        for (var i = 0; i < show_data.length; i++) {
            show_data[i].classList.remove('active');
        }
        el.classList.toggle('active');
    }
});
$('#assets-02').on('click', function () {
    if ($(this).is(':checked')) {
        console.log('true');
        $('.export_report').addClass('show')
        // checkbox checked 
    } else {
        console.log('false');
        $('.export_report').removeClass('show')
        // checkbox unchecked 
    }
})




var manage_keywords_show = document.querySelectorAll('.manage_keywords_show');
var manage_keywords_block = document.querySelector('.block-table__manage-keywords');
[].forEach.call(manage_keywords_show, function (el) {
    el.onclick = function (e) {

        manage_keywords_block.classList.add('show');
    }
});
var delete_keywords = document.querySelectorAll('.delete-keywords');
var n = delete_keywords.length;

[].forEach.call(delete_keywords, function (el) {
    el.onclick = function (e) {

        if (n <= 1) {
            manage_keywords_block.classList.remove('show');
            el.parentElement.classList.remove('show');

        } else {
            el.parentElement.classList.remove('show');
            n--;
        }


    }
});

$(document).on('click', '.close-actions', function () {
    $(this).parents('.chosen-container').toggleClass('chosen-with-drop');
    $(this).parents('.chosen-container').toggleClass('chosen-container-active');
});


$(document).on('click', '.settings-btn', function () {
    $(this).parents('.settings-block').addClass('active');
    $(this).parents('.settings-block').find('.popup-content').addClass('popup-active')
});

$(document).click(function (event) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal
    if (!$(event.target).closest(".settings-btn, .popup-content .block-assets__form").length) {
        $("body").find(".settings-block").removeClass("active");
        $('.settings-block .popup-content').removeClass('popup-active')
    }
});

$(document).on('click', '.popup-close', function () {
    $(this).parents('.settings-block').removeClass('active');
});



$(document).on('click', '.popup-filter-close', function () {
    $(this).parents('.block-filter').removeClass('parent-popup-active');
    $(this).parents('.block-filter').find('.popup-content').removeClass('popup-active')
});




var active_tab = document.querySelectorAll('.choose-item');
[].forEach.call(active_tab, function (el) {
    el.onclick = function (e) {
        for (var i = 0; i < active_tab.length; i++) {
            active_tab[i].classList.remove('active');
        }
        el.classList.toggle('active');
    }
});

//Selects current tab label & shows current tab pane / content, while hiding all other labels and content that is not selected
const selectTab = element => {

    //stores the active class for tab labels
    const active = document.querySelector('.active');

    //stores visible class for tab pane / content
    const visible = document.querySelector('.content-visible');

    //refrences actual element with the corresponding tab pane / content
    //get the element's id from the href of the selected tab label
    //use split method on the href to get the id or '#' which gives us an array of the url and the selected id
    //from the array we grab the index of [1] to isolate the id we want
    const tabContent = document.getElementById(element.href.split('#')[1]);

    //the console log will show the id of the tab label selected
    //console.log(element.href.split('#')[1]);

    //first, if the active class exists on our tab label we remove it
    //    if (active) {
    //        active.classList.remove('active');
    //    }

    //add back the active class to the selected tab label
    element.classList.add('active');

    //similarly, if the visible class exists on our tab pane / content we remove it
    if (visible) {
        visible.classList.remove('content-visible');
    }

    //add back the visible class to the corresponding tab pane / content
    tabContent.classList.add('content-visible');

}

//event delegation
document.addEventListener('click', event => {

    //if a tab label is clicked
    if (event.target.matches('.choose-item')) {
        //run the selectTab function, pass in the click event target 
        selectTab(event.target);
    }
}, false);




//sorting

$(document).ready(function () {
    var options = {
        //		headerRow: 1, // bind widgets on 2nd header row
        hints: ['', '', 'cancel the ascending sort', 'cancel the descending sort']
    };
    $('#myTable').tablesort3s(options);
});








$('.add_sorting').click(function () {
    console.log('h')

    //create div for url info
    var newSortLdiv = document.createElement('div');
    newSortLdiv.setAttribute("class", "row_box");




    //add name
    var newNamediv = document.createElement('div');
    newNamediv.setAttribute("class", "form__field-holder");
    jQuery(newNamediv).append('<p class="title">Field name sorting</p><div class="form__field-holder full-width"><div class = "dropdown-select wide linking_select chosen-select select-light" id = "select-sorting"> <span class = "current" ></span><div class = "list"><ul><li class = "option selected"> None </li> <li class = "option "> None </li></ul></div></div></div>')

    //add sorting order
    var newOrderdiv = document.createElement('div');
    newOrderdiv.setAttribute("class", "form__field-holder");
    jQuery(newOrderdiv).append('<p class="title">Sorting order</p><div class="form__field-holder full-width"><div class = "dropdown-select wide linking_select chosen-select select-light" id="sorting_order"><span class = "current"></span><div class = "list"><ul><li class = "option selected"> Ascending </li><li class = "option "> Ascending </li> </ul></div></div></div>')


    //add delete btn input
    var newDeletebtn = document.createElement('a');
    newDeletebtn.setAttribute("class", "delete");
    //    newDeletebtn.setAttribute("id", "btn-delete-url");



    newSortLdiv.append(newNamediv, newOrderdiv, newDeletebtn);

    $("#addSortingdiv").append(newSortLdiv);
    n++;

})





// Open/close
$(document).on('click', '.dropdown-select', function (event) {

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
        $('.dropdown-select .option').removeAttr('tabindex');
    }
    event.stopPropagation();
});


//$(document).on('click', '.form__field-holder', function () {
//    $(this).find('.dropdown-select').addClass('active');
//});

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

$(".chosen-container::before").click(function () {
    console.log('h')
})











// caching the elements
var inputText = document.getElementById("addH1Text"),

    div_h1 = document.getElementById('textDiv_h1'),
    div_meta = document.getElementById('textDiv_meta'),
    div_description = document.getElementById('textDiv_description'),
//    value = document.getElementById('value')
    value = document.getElementsByClassName('value')



var textEditSpan_h1 = document.getElementById('textEditSpan_h1'),
 textEditSpan_meta = document.getElementById('textEditSpan_meta'),
 textEditSpan_description = document.getElementById('textEditSpan_description')


let input_text, br



//h1 title
h1_input.onfocus = function () {
    h1_title.style.display = 'block';
};

for (let option of h1_title.options) {
    option.onclick = function () {
        let option_item = document.createElement("div");
        option_item.setAttribute("class", "optionText");


        let p = document.createElement("span");
        let deleteItem = document.createElement("a");
        deleteItem.setAttribute("class", "deleteItem");
        
        
        input_text = document.createElement("span");
        input_text.setAttribute("role", "textbox");
        input_text.setAttribute("id", "textEditSpan_h1");
        input_text.setAttribute("class", "textEdit");
        input_text.setAttribute("contenteditable", "");


        h1_input.value = option.value;

        p.append(h1_input.value);
        option_item.append(p, deleteItem)
        div_h1.append(option_item);
        div_h1.append(input_text);

        h1_title.style.display = 'none';
        h1_input.value = '';
    }
};


h1_input.oninput = function () {
    currentFocus = -1;
    var text = h1_input.value.toUpperCase();
    for (let option of h1_title.options) {
        if (option.value.toUpperCase().indexOf(text) > -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    };
}
var currentFocus = -1;
h1_input.onkeydown = function (e) {
    if (e.keyCode == 40) {
        currentFocus++
        addActive(h1_title.options);
    } else if (e.keyCode == 38) {
        currentFocus--
        addActive(h1_title.options);
    } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (h1_title.options) h1_title.options[currentFocus].click();
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
$(document).on('click', '.deleteItem', function () {

    $(this).parents('.optionText').remove();
   
});





//meta title

meta_input.onfocus = function () {
    meta_Title.style.display = 'block';
};

for (let option of meta_Title.options) {
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


        meta_input.value = option.value;

        p.append(meta_input.value);
        option_item.append(p, deleteItem)
        div_meta.append(option_item);
        div_meta.append(input_text);

        meta_Title.style.display = 'none';
        meta_input.value = '';
    }
};


meta_input.oninput = function () {
    currentFocus = -1;
    var text = meta_input.value.toUpperCase();
    for (let option of meta_Title.options) {
        if (option.value.toUpperCase().indexOf(text) > -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    };
}

meta_input.onkeydown = function (e) {
    if (e.keyCode == 40) {
        currentFocus++
        addActive(meta_Title.options);
    } else if (e.keyCode == 38) {
        currentFocus--
        addActive(meta_Title.options);
    } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (meta_Title.options) meta_Title.options[currentFocus].click();
        }
    }
}


//Meta description

description_input.onfocus = function () {
    description_Title.style.display = 'block';
};

for (let option of description_Title.options) {
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


        description_input.value = option.value;

        p.append(description_input.value);
        option_item.append(p, deleteItem)
        div_description.append(option_item);
        div_description.append(input_text);

        description_Title.style.display = 'none';
        description_input.value = '';
    }
};


description_input.oninput = function () {
    currentFocus = -1;
    var text = description_input.value.toUpperCase();
    for (let option of description_Title.options) {
        if (option.value.toUpperCase().indexOf(text) > -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    };
}

description_input.onkeydown = function (e) {
    if (e.keyCode == 40) {
        currentFocus++
        addActive(description_Title.options);
    } else if (e.keyCode == 38) {
        currentFocus--
        addActive(description_Title.options);
    } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (description_Title.options) description_Title.options[currentFocus].click();
        }
    }
}

