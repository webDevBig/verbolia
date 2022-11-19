// caching the elements
var inputText = document.getElementById("addH1Text"),

    div_h1 = document.getElementById('textDiv_h1'),
    div_meta = document.getElementById('textDiv_meta'),
    div_description = document.getElementById('textDiv_description'),
    div_Links = document.getElementById('textDiv_Links'),
    //    value = document.getElementById('value')
    value = document.getElementsByClassName('value')



var textEditSpan_h1 = document.getElementById('textEditSpan_h1'),
    textEditSpan_meta = document.getElementById('textEditSpan_meta'),
    textEditSpan_description = document.getElementById('textEditSpan_description'),
    textEditSpan_Links = document.getElementById('textEditSpan_Links')


let input_text, br


//meta title


meta_input.onclick = function () {
    meta_Title.classList.toggle('show')
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

        meta_Title.classList.toggle('show')
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
// Close when clicking outside
$(document).on('click', function (event) {
    if ($(event.target).closest('#description_input').length === 0) {
        $('#description_Title').removeClass('show');
    }
    event.stopPropagation();
});


//Meta description

description_input.onclick = function () {
    description_Title.classList.toggle('show')
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

        description_Title.classList.toggle('show')
        //        description_Title.style.display = 'none';
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
// Close when clicking outside
$(document).on('click', function (event) {
    if ($(event.target).closest('#h1_input').length === 0) {
        $('#h1_title').removeClass('show');
        //        $('.dropdown-select .option').removeAttr('tabindex');
    }
    event.stopPropagation();
});






let r = $('.showAtribute').length;
$(document).on('click', '.btn-deleteAtribute', function () {
    r--;

    if (r >= 1) {

        $("#overwrite_script").prop("checked", true);
        console.log('y')
    } else {
        $("#overwrite_script").prop("checked", false);
        console.log('n')
    }
    $(this).parents('.showAtribute').remove();

});

$('.checkClick').click(function () {
    $('.showAtribute').toggleClass('hide')
    $('#btn-addAtribute').toggleClass('hide')
})

let addbutton = document.getElementById("btn-addAtribute");
addbutton.addEventListener("click", function () {
    let boxes = document.querySelector(".clone");
    let cloneToBox = document.getElementById("block-editor__content_Linking");
    let clone = boxes.cloneNode(true);
 clone.classList.remove('hide')
    clone.classList.remove('clone')
    
     // get select that has the options available
    const select = clone.querySelectorAll("[data-multi-select-plugin]");
    select.forEach(select => {

        init(select);
    });
     document.addEventListener('click', () => {
        // get select that has the options available
        const select = clone.querySelectorAll("[data-multi-select-plugin]");
        for (let i = 0; i < select.length; i++) {
            if (event) {
                var isClickInside = select[i].parentElement.parentElement.contains(event.target);

                if (!isClickInside) {
                    const wrapper = select[i].parentElement.parentElement;
                    const dropdown = wrapper.querySelector(".dropdown-icon");
                    const autocomplete_list = wrapper.querySelector(".autocomplete-list");
                    select[i].parentElement.querySelector('.search-container').classList.remove('active');
                    select[i].parentElement.classList.remove('active');
                    //the click was outside the specifiedElement, do something
                    dropdown.classList.remove("active");
                  
                    addPlaceholder(wrapper);
                }
            }
        }
    });


    cloneToBox.append(clone);
    r++;
    if (r >= 1) {

        $("#overwrite_script").prop("checked", true);
    } else {
        $("#overwrite_script").prop("checked", false);
    }

});




var number = 2;
let addCompetitors = document.getElementById("btn-addCompetitors");
addCompetitors.addEventListener("click", function () {
    let boxes = document.querySelector(".competitors_clonebox");
    let cloneToBox = document.querySelector('.competitors_box');




    //add delete btn input
    var newTitle = document.createElement('p');
    newTitle.setAttribute("class", "titleCompetitors title");

    newTitle.textContent = 'competitors #' + number;


    number++;
    let clone = boxes.cloneNode(true);



    var newDiv = document.createElement('div');
    newDiv.setAttribute("class", "deleteRow");
    newDiv.append(newTitle, clone);
    cloneToBox.appendChild(newDiv);
});

$(document).on('click', '.btn-deleteCompetitors', function () {

    $(this).parents('.deleteRow').remove();
    number--;
});

$(document).on('click', '.multi-select-component', function () {

    $(this).toggleClass('active');
    $(this).find('.search-container').toggleClass('active');
});
$(document).on('click', '.autocomplete-list_li', function () {

    $(this).toggleClass('active');
});

