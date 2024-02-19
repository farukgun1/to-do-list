document.addEventListener('DOMContentLoaded', function () {
    let formDOM = document.querySelector('#formList');
    let buttonDOM = document.querySelector('#buttonId');
    let ulListDOM = document.querySelector('#ulList');
    let inputDOM = document.querySelector('#inputId');

    buttonDOM.addEventListener('click', function () {
        if (inputDOM.value) {
            addItem(inputDOM.value);
            inputDOM.value = ""; // Formun temizlenmesi 
        }
    });

    function addItem(text) {
        let liDOM = document.createElement('li');
        liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        let spanDOM = document.createElement('span');
        spanDOM.classList.add('checkbox-label');

        let checkboxDOM = document.createElement('input');
        checkboxDOM.type = 'checkbox';

        let deleteButtonDOM = document.createElement('button');
        deleteButtonDOM.textContent = 'Sil';
        deleteButtonDOM.classList.add('delete-button', 'btn-danger', 'btn-sm');
        deleteButtonDOM.addEventListener('click', function () {
            // Silme işlemi burada yapılır
            ulListDOM.removeChild(liDOM);
        deleteButtonDOM.onclick = function() {
            showHide('danger');
        }  
        });

        spanDOM.appendChild(checkboxDOM);
        spanDOM.appendChild(document.createTextNode(text));

        liDOM.appendChild(spanDOM);
        liDOM.appendChild(deleteButtonDOM);
        ulListDOM.appendChild(liDOM);

        checkboxDOM.addEventListener('change', function () {
            if (checkboxDOM.checked) {
                spanDOM.style.textDecoration = 'line-through';
            } else {
                spanDOM.style.textDecoration = 'none';
            }
        });
    }
});

const showHide = (status) => {
    const toastContainerEl = document.querySelector(".toast__container");
    if (toastContainerEl.classList.contains("hide"))
        toastContainerEl.classList.remove("hide");
    toastContainerEl.classList.add("show");
    toastContainerEl.classList.add(status);


    setTimeout(() => {
        toastContainerEl.classList.remove("show");
        toastContainerEl.classList.remove(status);
        toastContainerEl.classList.add("hide");
    }, 5000);
};