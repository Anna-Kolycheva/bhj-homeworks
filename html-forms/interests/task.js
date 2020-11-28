const interests = document.querySelector('.interests_main');

interests.addEventListener('change', event => {
    const check = event.target.closest('.interest');
    Array.from(check.getElementsByClassName('interest__check')).forEach(element => {
        element.indeterminate = false;
        event.target.checked ? element.checked = true : element.checked = false
    })

    const parentElements = Array.from(check.parentElement.getElementsByClassName('interest__check'));
    const checkedItems = parentElements.filter(item => item.checked);

    if (check.parentElement.closest('.interest') !== null) {

        const parentItems = check.parentElement.closest('.interest').querySelector('.interest__check');

        if (parentElements.length === checkedItems.length) {
            parentItems.indeterminate = false;
            parentItems.checked = true;
            checkParentOfParent()
        } else {
            parentItems.checked = false;
            if (checkedItems.length !== 0) {
                parentItems.indeterminate = true;
                indeterminateParentOfParent(true);

            } else {
                parentItems.indeterminate = false;
                indeterminateParentOfParent(false);
                checkParentOfParent();
            }
        }

        function indeterminateParentOfParent(value) {
            checkParentOfParent()
            if (parentItems.closest('ul').closest('li') !== null) {
                parentItems.closest('ul').closest('li').querySelector('.interest__check').indeterminate = value;
            }
        }

        function checkParentOfParent() {
            if (parentItems.closest('ul').closest('li') !== null) {
                const df = Array.from(parentItems.closest('ul').closest('li').getElementsByClassName('interest__check'))
                const checkedItemsdf = df.filter(item => item.checked);
                const parentOfParent = parentItems.closest('ul').closest('li').querySelector('.interest__check');
                if (df.length - 1 === checkedItemsdf.length) {
                    parentOfParent.indeterminate = false;
                    parentOfParent.checked = true;
                } else {
                    parentOfParent.checked = false;
                }
            }
        }
    }
})