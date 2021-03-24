


document.querySelector('.input_sch').oninput = function () {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.gallery li');
    if (val != '') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.remove('hide');
                
            }
            else {
                elem.classList.add('hide');
                
            }
        });
    }
    else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('hide');
            
        });
    }
}
