const listButtonOpenPanel = document.querySelectorAll('a[data-panel]');
const tableOpportunities = document.querySelector('.table-opportunities');

const DATA_TOGGLE_STATE = 'data-toggle-state';
const ROW_OFF = 'row-off';
const ICON_ON = 'icon-eye';
const ICON_OFF = 'icon-eye-off';

if(tableOpportunities) {
    const listButtonStatus = tableOpportunities.querySelectorAll(`button[${DATA_TOGGLE_STATE}]`);
    listButtonStatus.forEach(button => {
        const status = button.getAttribute(DATA_TOGGLE_STATE);
        const icon = button.querySelector('i');
        const row = button.closest('tr');
        toggleOpportunitiesStatus(row, status);
        button.addEventListener('click', e => {
            e.preventDefault();
            switch (button.getAttribute(DATA_TOGGLE_STATE)) {
                case 'on':
                    button.setAttribute(DATA_TOGGLE_STATE, 'off');
                    toggleOpportunitiesStatus(row, 'off');
                    icon.classList.remove(ICON_ON);
                    icon.classList.add(ICON_OFF);
                    break;
                case 'off':
                    button.setAttribute(DATA_TOGGLE_STATE, 'on');
                    toggleOpportunitiesStatus(row, 'on');
                    icon.classList.remove(ICON_OFF);
                    icon.classList.add(ICON_ON);
                    break;
            }
        });
    });
}

if(listButtonOpenPanel) {
    listButtonOpenPanel.forEach(buttonOpenPanel => {
        const listPanel = document.querySelectorAll('.panel-checked-action');
        const idPanel = buttonOpenPanel.getAttribute('data-panel');
        const dataOption = buttonOpenPanel.getAttribute('data-option');
        const panel = document.getElementById(idPanel);
        const buttonSelect = panel.querySelector('button.select');
        const buttonCancel = panel.querySelector('button.cancel');

        buttonOpenPanel.addEventListener('click', e => {
            e.preventDefault();
            listPanel.forEach(panel => {
                hidePanel(panel);
            });

            let listRow, listRowSecond;
            let count, countSecond;

            switch (dataOption) {
                case 'selected':
                    listRow = getActiveRow(dataOption);
                    count = getCount(listRow);
                    panel.querySelector('span.count').innerHTML = count;
                    break;
                case 'hide':
                    listRowSecond = getActiveRow('selected');
                    countSecond = getCount(listRowSecond);
                    listRow = getActiveRow(dataOption);
                    count = getCount(listRow);
                    panel.querySelector('span.count').innerHTML = countSecond;
                    panel.querySelector('span.countHide').innerHTML = count;
                    break;
            }

            tableOpportunities.querySelectorAll('tbody tr td:first-child input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
            showPanel(panel, dataOption);
            listenFilter(buttonSelect, buttonCancel, listRow, panel);
        });
    });
}

function toggleOpportunitiesStatus(row, status) {
    switch (status) {
        case 'on':
            if(row.classList.contains(ROW_OFF)) {
                row.classList.remove(ROW_OFF);
            }
            break;
        case 'off':
            if(!row.classList.contains(ROW_OFF)) {
                row.classList.add(ROW_OFF);
            }
            break;
    }
}

function showPanel(panel) {
    panel.classList.add('active');
}

function hidePanel(panel) {
    panel.classList.remove('active');
}

function getCount(listRow) {
    return listRow.length;
}

function getActiveRow(dataOption) {
    let listRow;
    switch (dataOption) {
        case 'selected':
            listRow = tableOpportunities.querySelectorAll('tbody tr:not(.row-off)');
            break;
        case 'hide':
            listRow = tableOpportunities.querySelectorAll('tbody tr.row-off');
            break;
    }
    return listRow;
}

function listenFilter(buttonSelect, buttonCancel, listRow, panel) {
    buttonSelect.addEventListener('click', e => {
        e.preventDefault();
        listRow.forEach(row => {
            row.querySelector('td:first-child input[type="checkbox"]').checked = true;
        });
        buttonSelect.classList.remove('show');
        buttonCancel.classList.add('show');
    });
    buttonCancel.addEventListener('click', e => {
        e.preventDefault();
        buttonSelect.classList.add('show');
        buttonCancel.classList.remove('show');
        listRow.forEach(row => {
            row.querySelector('td:first-child input[type="checkbox"]').checked = false;
        });
        hidePanel(panel);
    });
}
