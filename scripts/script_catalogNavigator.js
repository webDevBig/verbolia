// Modal Include
//const modals = new Modal();
//modals.listeners();

// Filters Include
const accordion = new Accordion('.navigation .collapsible');
accordion.init();

// Popup Include
const popupUserBlock = new Popup('.user-block');
popupUserBlock.init();
const popupNotificationBlock = new Popup('.notification-block');
popupNotificationBlock.init();
const popupAssetsBlock = new Popup('.block-assets');
popupAssetsBlock.init();
const popupFilter = new Popup('.block-filter');
popupFilter.init();
const popupThemeActions = new Popup('.block-theme__actions');
popupThemeActions.init();

// const soTooltip = new SoTooltip();
// soTooltip.init();

// SlideBlock Include
const popupEditor = new Popup('.block-editor__row-collapse', true);
popupEditor.init();
const popupAddContent = new Popup('.block-editor__content .add-content', true);
popupAddContent.init();
const popupTemplateEdit = new Popup('.block-edit-template', true);
popupTemplateEdit.init();
const popupThemeProject = new Popup('.block-code__project-folder', true);
popupThemeProject.init();
const popupOptions = new Popup('.block-options__popup', true);
popupOptions.init();

// Include Tab
const tabHorizontal = new TabHorizontal();
tabHorizontal.init();

const soTab = new TabHorizontal('.so-tab__nav-link', '.so-tab__nav', 'so-tab-active');
soTab.init();

// Tooltip Include
const tooltip = new Tooltip();
tooltip.init();

// Sidebar Include
if (document.querySelector('.sidebar')) {
    const mobileMenu = new MobileMenu('.sidebar');
    mobileMenu.init();
}

// Alert Include
const alerts = new Alert();
alerts.init();

// Rawler Schedule
const crawlerSchedule = new CrawlerSchedule('.block-schedule');
crawlerSchedule.init();

// Scroll To
const linkScrollToList = document.querySelectorAll('.link-scrollTo');
if (linkScrollToList) {
    linkScrollToList.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href').substring(1);
            const elementPosition = document.getElementById(id).offsetTop;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            });
        });
    });
}

// Form Include
const formEdit = new Form('.form__field-edit');
formEdit.init();

const formFieldsNumber = document.querySelectorAll('.form__field-holder input[type="number"');
if (formFieldsNumber) {
    formFieldsNumber.forEach(item => {
        item.parentElement.style.minWidth = '1px';
    });
}

const formFieldsCopyText = document.querySelectorAll('.form__field-copytext');
if (formFieldsCopyText) {
    formFieldsCopyText.forEach(item => {
        item.addEventListener('click', () => {
            const copyText = item.querySelector("input");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
        });
    });
}

// MultiSelect Include
$('select.chosen-select').chosen();
$('select.chosen-select-nosearch').chosen({
    disable_search_threshold: 10
});

// Sortable list
const sortableList = document.querySelectorAll('.list-sortable');
if (sortableList) {
    sortableList.forEach(item => {
        new Sortable(item, {
            animation: 150,
            ghostClass: 'sortable-ghost-chosen'
        });
    });
}

const chosenSortList = new ChosenPopup();
chosenSortList.init();

// Sticky Sidebar
window.onscroll = function () {
    stickySidebar();
};

const sidebar = document.querySelector('.sidebar');
let stickyMax;
const stickyMin = 26;
if (sidebar) {
    stickyMax = sidebar.offsetTop;

    if (window.pageYOffset > 0) {
        let topSidebar = stickyMax - window.pageYOffset;
        if (topSidebar <= stickyMin) {
            sidebar.style.top = stickyMin + 'px';
        } else {
            sidebar.style.top = topSidebar + 'px';
        }
    }
}

function stickySidebar() {
    let topSidebar = stickyMax - window.pageYOffset;
    if (topSidebar >= stickyMin && topSidebar <= stickyMax) {
        sidebar.style.top = topSidebar + 'px';
    }
}

// Chack All
const tableChecked = new CheckAll('.table-checked');
tableChecked.init();

// Create Table with Assets
const tableAssets = new TableCreateAssets();
tableAssets.init();

// Charts
const blockChartBar = new ChartCustom('chartPages');
blockChartBar.init();

const blockChartLine = new ChartCustom('chartVisits');
blockChartLine.init();

const blockChartLinePositionHistory = new ChartCustom('chartPositionHistory');
blockChartLinePositionHistory.init();

const blockChartAveragePosition = new ChartCustom('chartAveragePosition');
blockChartAveragePosition.init();

const blockChartInformationVisits = new ChartCustom('chartInformationVisits');
blockChartInformationVisits.init();

const blockChartCrawlRate = new ChartCustom('chartCrawlRate');
blockChartCrawlRate.init();

// Show Hide Password
const passwordList = document.querySelectorAll('.form__field-show-password');
if (passwordList.length) {
    passwordList.forEach(item => {
        const button = item.querySelector('button.show-password');
        const password = item.querySelector('input.password');
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (password.type === 'password') {
                password.type = 'text';
                button.querySelector('i').classList.remove('icon-eye');
                button.querySelector('i').classList.add('icon-eye-off');
            } else {
                password.type = 'password';
                button.querySelector('i').classList.add('icon-eye');
                button.querySelector('i').classList.remove('icon-eye-off');
            }
        });
    });
}

// Include Daterange
const calendarList = document.querySelectorAll('.calendar');
if (calendarList.length) {
    calendarList.forEach(calendar => {
        const data = calendar.querySelector('.calendar__data');
        $(data).daterangepicker({
            opens: 'left',
            autoApply: true,
            linkedCalendars: false,
            locale: {
                format: "DD MMM, YYYY",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                firstDay: 1
            }
        });
        $(data).on('show.daterangepicker', function (ev, picker) {
            calendar.classList.add('calendar-open');
        });
        $(data).on('hide.daterangepicker', function (ev, picker) {
            calendar.classList.remove('calendar-open');
        });
        $(data).on('cancel.daterangepicker', function (ev, picker) {
            if (calendar.classList.contains('calendar-apply')) {
                calendar.classList.remove('calendar-apply');
            }
        });
        $(data).on('apply.daterangepicker', function (ev, picker) {
            calendar.classList.add('calendar-apply');
        });
    });
}

// Include File Upload
const listBlockFileUpload = document.querySelectorAll('.field-upload');
if (listBlockFileUpload.length) {
    listBlockFileUpload.forEach(block => {
        const fileUpload = block.querySelector('.file');
        const fileRemove = block.querySelector('.file-chosen .btn');

        if (fileUpload.hasAttribute('data-picture-name')) {
            const name = fileUpload.getAttribute('data-picture-name');
            block.classList.add('isUpload');
            block.querySelector('.text-file-chosen').textContent = name;
        }

        fileUpload.addEventListener('change', () => {
            block.classList.add('isUpload');
            block.querySelector('.text-file-chosen').textContent = fileUpload.files[0].name;
        });

        fileRemove.addEventListener('click', e => {
            e.preventDefault();
            block.classList.remove('isUpload');
        });
    });
}

// Include Remove Items in List Keyword
const listBtnListKeyword = document.querySelectorAll('.block-category .list-keyword .btn-icon.delete');
listBtnListKeyword.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const item = e.target.closest('li');
        item.remove();
    });
});

// Include Carousel in Dashboard page
const carouselList = document.querySelectorAll('.block-dashboard__chart .carousel');
if (carouselList.length) {
    carouselList.forEach(carousel => {
        const width = carousel.querySelector('.carousel-holder').offsetWidth;
        let widthList = 0;

        let list = carousel.querySelector('.chart-change-config');
        let listElems = carousel.querySelectorAll('.chart-change-config a');

        listElems.forEach((item, i) => {
            item.setAttribute('data-item', i + '');
            widthList += item.offsetWidth;
            if (i === 0) {
                item.setAttribute('data-active', 'true');
            } else {
                item.setAttribute('data-active', 'false');
            }
        });

        let position = 0;

        const prev = carousel.querySelector('.prev');
        prev.setAttribute('disable', 'disable');
        const next = carousel.querySelector('.next');

        prev.addEventListener('click', e => {
            e.preventDefault();
            if (!prev.hasAttribute('disable')) {
                const activeItem = carousel.querySelector('a[data-active="true"]');
                const activeIndex = +activeItem.getAttribute('data-item');

                next.removeAttribute('disable');

                if (activeIndex > 0) {
                    position -= listElems[activeIndex - 1].offsetWidth;
                    list.style.marginLeft = -position + 'px';
                    activeItem.setAttribute('data-active', 'false');
                    listElems[activeIndex - 1].setAttribute('data-active', 'true');

                    if (activeIndex - 1 === 0) {
                        prev.setAttribute('disable', 'disable');
                    }
                }
            }
        });

        next.addEventListener('click', e => {
            e.preventDefault();
            if (!next.hasAttribute('disable')) {
                const activeItem = carousel.querySelector('a[data-active="true"]');
                const activeIndex = +activeItem.getAttribute('data-item');

                prev.removeAttribute('disable');

                if (position < (widthList - width)) {
                    position += activeItem.offsetWidth;
                    list.style.marginLeft = -position + 'px';
                    activeItem.setAttribute('data-active', 'false');
                    listElems[activeIndex + 1].setAttribute('data-active', 'true');

                    if (position > (widthList - width)) {
                        next.setAttribute('disable', 'disable');
                    }
                }
            }
        });
    });
}

// Include Refresh pages buttons
const btnRefresh = document.getElementById('buttonRefresh');
const timeAnimation = 1000;
const chankAnimation = 25;
const intervalAnimation = timeAnimation / chankAnimation;

$(document).on('click', '#buttonRefresh', function () {
    $(this).parents('.refreshing-block').toggleClass('refresh-show');

    let timePassed = 0;
    let timer = setInterval(() => {
        timePassed += chankAnimation;

        if (timePassed >= timeAnimation) {
            clearInterval(timer);
            btnRefresh.classList.remove('isUpload');
            $(this).parents('.refreshing-block').toggleClass('refresh-show');

            return;
        }


    }, intervalAnimation);

});

// Include Inset Attributes
const listFieldAttributes = document.querySelectorAll('.field-inset-attributes');
if (listFieldAttributes.length) {
    listFieldAttributes.forEach(fieldAttributes => {
        const input = fieldAttributes.querySelector('input.input-attributes');
        const listAttributes = fieldAttributes.querySelectorAll('ul.list-attributes a');
        let position = 0;
        input.addEventListener('blur', () => {
            position = input.selectionStart;
        });
        listAttributes.forEach(linkAttribute => {
            linkAttribute.addEventListener('click', e => {
                e.preventDefault();
                const attribute = '[' + linkAttribute.getAttribute('data-attribute').toUpperCase() + ']';
                const stringValue = input.value;
                switch (position) {
                    case 0:
                        input.value = attribute + stringValue;
                        break;
                    case stringValue.length:
                        input.value = stringValue + attribute;
                        break;
                    default:
                        input.value = stringValue.slice(0, position) + attribute + stringValue.slice(position);
                        break;
                }
            });
        });
    });
}

// Include Feed Import
const listFormFeedImport = document.querySelectorAll('.form-feed-import');
if (listFormFeedImport) {
    listFormFeedImport.forEach(form => {
        const select = form.querySelector('.area-select-feed-import');
        const selectDefault = form.querySelector('.chosen-default span');
        const list = select.querySelectorAll('.active-result');

        list.forEach(item => {
            const link = item.querySelector('a');
            link.addEventListener('click', e => {
                e.preventDefault();
                selectDefault.innerHTML = e.target.innerHTML;
                const formTypes = link.getAttribute('data-type');
                form.setAttribute('data-type', formTypes);
                list.forEach(element => {
                    if (element.classList.contains('result-selected')) element.classList.remove('result-selected');
                });
                item.classList.add('result-selected');
            });
        });
    });
}

// Include Stop Words
const formStopWords = document.querySelector('.form__stop-words');
if (formStopWords) {
    const fieldList = formStopWords.querySelectorAll('.field');
    fieldList.forEach(field => {
        addStopWords(field);
    });

    const btnAddRow = formStopWords.nextElementSibling.querySelector('button.add-field-row');
    btnAddRow.addEventListener('click', e => {
        e.preventDefault();
        const row = formStopWords.querySelector('.row-cloning');
        const cloneRow = row.cloneNode(true);
        cloneRow.classList.remove('row-cloning');
        cloneRow.classList.add('field-row');
        formStopWords.appendChild(cloneRow);
        $('.field-row select').chosen({
            disable_search_threshold: 10
        });
        const field = cloneRow.querySelector('.field');
        addStopWords(field);
    });
}

function addStopWords(field) {
    const btnClose = `<a href="#"><i class="icon-close"></i></a>`;
    const input = field.querySelector('input[type="text"]');
    input.addEventListener('input', e => {
        const inputValue = e.target.value;
        const lastSymbol = inputValue.substr(inputValue.length - 1);
        if (lastSymbol === ',') {
            const stringStopWords = inputValue.slice(0, -1);
            const element = document.createElement('span');
            element.classList.add('badge');
            element.innerHTML = stringStopWords + btnClose;
            field.insertBefore(element, input);
            e.target.value = '';

            const listBtnClose = field.querySelectorAll('.badge a');
            if (listBtnClose) {
                listBtnClose.forEach(btn => {
                    btn.addEventListener('click', btnClose => {
                        btnClose.preventDefault();
                        btnClose.target.closest('.badge').remove();
                    });
                });
            }
        }
    });
}

const formAddSynonyms = document.querySelector('#addSynonyms');
if (formAddSynonyms) {
    const panelBadge = formAddSynonyms.nextElementSibling;

    formAddSynonyms.addEventListener('focus', () => {
        formAddSynonyms.classList.add('on-focus');
    });

    formAddSynonyms.addEventListener('blur', () => {
        formAddSynonyms.classList.remove('on-focus');
    });

    window.addEventListener('keydown', keyDown => {
        if (keyDown.keyCode === 13 && formAddSynonyms.classList.contains('on-focus')) {
            const btnClose = `<a href="#"><i class="icon-close"></i></a>`;
            if (formAddSynonyms.value.length) {
                const element = document.createElement('span');
                element.classList.add('badge', 'green', 'badge-small');
                element.innerHTML = formAddSynonyms.value + btnClose;
                panelBadge.appendChild(element);
            }
            formAddSynonyms.value = '';

            const listBtnClose = panelBadge.querySelectorAll('.badge a');
            if (listBtnClose) {
                listBtnClose.forEach(btn => {
                    btn.addEventListener('click', btnClose => {
                        btnClose.preventDefault();
                        btnClose.target.closest('.badge').remove();
                    });
                });
            }
        }
    });
}

// Include form-add-new-tag
const listFormAddNewTag = document.querySelectorAll('.form-add-new-tag');
if (listFormAddNewTag) {
    listFormAddNewTag.forEach(formAddNewTag => {
        const panel = formAddNewTag.querySelector('.panel');
        const select = document.getElementById('add-new-tag');
        const btnClose = `<a href="#"><i class="icon-close"></i></a>`;
        $(select).chosen().change((e, params) => {
            const element = document.createElement('span');
            element.classList.add('badge');
            element.innerHTML = params.selected + btnClose;
            panel.insertBefore(element, panel.childNodes[0]);
            e.target.value = '';
            if (!panel.classList.contains('show-badge')) {
                panel.classList.add('show-badge');
            }

            const listBtnClose = panel.querySelectorAll('.badge a');
            if (listBtnClose) {
                listBtnClose.forEach(btn => {
                    btn.addEventListener('click', btnClose => {
                        btnClose.preventDefault();
                        btnClose.target.closest('.badge').remove();
                        if (panel.querySelectorAll('.badge a').length === 0 && panel.classList.contains('show-badge')) {
                            panel.classList.remove('show-badge');
                        }
                    });
                });
            }
        });
    });
}

// Include Exclusion Rules
const formExclusionRules = document.querySelector('.form-exclusion-rules');
if (formExclusionRules) {
    const btnAdd = formExclusionRules.querySelector('.add-rules');
    const listRules = formExclusionRules.querySelector('.list-rules');
    let listButtonRemove;
    btnAdd.addEventListener('click', e => {
        e.preventDefault();
        const field = formExclusionRules.querySelector('.field-cloning .row');
        const cloneField = field.cloneNode(true);
        listRules.appendChild(cloneField);
        $('.list-rules select').chosen({
            disable_search_threshold: 10
        });
        listButtonRemove = listRules.querySelectorAll('.remove-rules');
        if (listButtonRemove) {
            listButtonRemove.forEach(buttonRemove => {
                buttonRemove.addEventListener('click', e => {
                    e.preventDefault();
                    buttonRemove.closest('.row').remove();
                });
            });
        }
    });
}

// Include form-product-import
const formProductImport = document.querySelector('.form-product-import');
if (formProductImport) {
    if (formProductImport.classList.contains('first-boot')) {
        formProductImport.previousElementSibling.classList.add('hide');
    }
    const select = formProductImport.querySelector('select');
    const button = formProductImport.querySelector('.button');
    const fieldSelect = formProductImport.querySelector('.field-select');
    const fieldId = formProductImport.querySelector('.field-id');
    button.addEventListener('click', e => {
        e.preventDefault();
        if (formProductImport.classList.contains('first-boot')) {
            formProductImport.classList.remove('first-boot');
            formProductImport.previousElementSibling.classList.remove('hide');
        }
        if (fieldSelect.classList.contains('active') && !fieldId.classList.contains('active')) {
            if (select.value) {
                fieldSelect.classList.remove('active');
                fieldId.classList.add('active');
                button.querySelector('strong').innerHTML = 'Update';
                if (button.classList.contains('transparent')) {
                    button.classList.remove('transparent');
                }
            }
        } else {
            fieldSelect.classList.add('active');
            fieldId.classList.remove('active');
            button.classList.add('transparent');
        }
    });
}

// Include Code Mirror
let codeMirror = CodeMirror(document.getElementById('codeMirror'), {
    value: "function myScript(){return 100;}\n",
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true
});

// Include slide block
const listBtnSlide = document.querySelectorAll('.button-slide');
if (listBtnSlide) {
    listBtnSlide.forEach(btnSlide => {
        btnSlide.addEventListener('click', e => {
            e.preventDefault();
            const id = btnSlide.getAttribute('data-slide');
            $(`#${id}`).slideToggle().toggleClass('active');
            if (document.querySelector(`#${id}`).classList.contains('active')) {
                // Include Circle Progress
                const listProgressCircle = document.querySelectorAll('.progress-circle');
                if (listProgressCircle) {
                    listProgressCircle.forEach(progress => {
                        const count = progress.getAttribute('data-count');
                        const animateProgressCircle = () => {
                            progress.setAttribute('data-progress', count);
                        };
                        setTimeout(animateProgressCircle, 200);
                    });
                }
            }
        });
    });
}

// Include Validate Query
const btnValidateList = document.querySelectorAll('.btn-validate');
const textValidateList = document.querySelectorAll('.text-validate');
if (btnValidateList && textValidateList) {
    const text_validate = '2 product(s) filtered from 7 product(s)';
    btnValidateList.forEach(btnValidate => {
        btnValidate.addEventListener('click', e => {
            e.preventDefault();
            const dataBtn = btnValidate.getAttribute('data-validate');
            textValidateList.forEach(textValidate => {
                const dataText = textValidate.getAttribute('data-validate');
                if (dataBtn === dataText) {
                    textValidate.innerHTML = text_validate;
                }
            });
        });
    });
}

// Include switch show status
const listSwitchShowStatus = document.querySelectorAll('.switch-showStatus');
if (listSwitchShowStatus) {
    listSwitchShowStatus.forEach(switchStatus => {
        const checkBox = switchStatus.querySelector('input[type="checkbox"]');
        setSwitchStatus(switchStatus, checkBox.checked);
        checkBox.addEventListener('change', () => {
            setSwitchStatus(switchStatus, checkBox.checked);
        });
    });
}

function setSwitchStatus(block, status) {
    if (status) {
        block.nextElementSibling.innerHTML = "Activated"
    } else {
        block.nextElementSibling.innerHTML = "Deactivated"
    }
}
