const interests = document.querySelector('.interests_main');

interests.addEventListener('change', event => {
    let check = event.target.closest('.interest');
    Array.from(check.getElementsByClassName('interest__check')).forEach(element => {
        event.target.checked ? element.checked = true : element.checked = false
    })

    let parentElements = Array.from(check.parentElement.getElementsByClassName('interest__check'));
    let checkedItems = parentElements.filter(item => item.checked);
    let parentItems = check.parentElement.closest('.interest').querySelector('.interest__check');

    if (parentElements.length === checkedItems.length) {
        parentItems.checked = true;
    } else {
        parentItems.checked = false;
    }
})
