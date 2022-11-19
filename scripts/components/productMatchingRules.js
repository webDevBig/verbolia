const parentProductMatchingRules = document.querySelector('.product-matching-rules');
const listProductMatchingRules = document.querySelectorAll('.product-matching-rules__holder');

//if(parentProductMatchingRules) {
//    const btnAddRule = parentProductMatchingRules.querySelector('button.btn-add-rule');
//    btnAddRule.addEventListener('click', e => {
//        e.preventDefault();
//        const block = parentProductMatchingRules.querySelector('.second.hide');
//        block.classList.remove('hide');
//    });
//}

if(listProductMatchingRules) {
    listProductMatchingRules.forEach(productMatchingRules => {
        initProductMatchingRule(productMatchingRules);
    });
}

function initProductMatchingRule(productMatchingRules) {
    const listBtnOpen = productMatchingRules.querySelectorAll('.field-row button.btn');
    const listBtnDelete = productMatchingRules.querySelectorAll('.field-row button.btn-delete');

    const btn_add_rule = productMatchingRules.querySelectorAll('button.btn-add-rule');
    
    listBtnOpen.forEach(button => {
        button.addEventListener('click', createProductMatchingRule, false);
    });

    listBtnDelete.forEach(button => {
        button.addEventListener('click', deleteProductMatchingRule, false);
    });
    
//    listBtnOpen.forEach(button => {
//        button.addEventListener('click', addProductMatchingRule, false);
//    });
}

//function addProductMatchingRule(e) {
//    e.preventDefault();
//    const button = e.target;
//    const row = parentProductMatchingRules.querySelector('.block-options__popup_clonning');
//    const cloneRow = row.cloneNode(true);
//    const parent = button.closest('.block-options__popup');
//    cloneRow.classList.remove('block-options__popup_clonning');
//    cloneRow.classList.add('block-options__popup');
//   
//    parent.after(cloneRow);
//    $('.field-row select').chosen({
//        disable_search_threshold: 10
//    });
//    initProductMatchingRule(button.closest('.product-matching-rules__holder'));
//}

function createProductMatchingRule(e) {
    e.preventDefault();
    const button = e.target;
    const row = parentProductMatchingRules.querySelector('.row-cloning');
    const cloneRow = row.cloneNode(true);
    const parent = button.closest('.field-row');
    cloneRow.classList.remove('row-cloning');
    cloneRow.classList.add('field-row');
    if(button.classList.contains('btn-add')) {
        cloneRow.classList.add('field-add');
    }
    if(button.classList.contains('btn-or')) {
        cloneRow.classList.add('field-or');
    }
    parent.after(cloneRow);
    $('.field-row select').chosen({
        disable_search_threshold: 10
    });
    initProductMatchingRule(button.closest('.product-matching-rules__holder'));
}

function deleteProductMatchingRule(e) {
    e.preventDefault();
    const button = e.target.parentNode;
    const row = button.closest('.field-row');
    initProductMatchingRule(button.closest('.product-matching-rules__holder'));
    row.remove();
}
