function searchFunction() {
    var input, filter, paragraphs, i;
    input = document.getElementById('search-box');
    filter = input.value.toUpperCase();
    paragraphs = document.getElementsByTagName('p');

    for (i = 0; i < paragraphs.length; i++) {
        if (paragraphs[i].innerText.toUpperCase().includes(filter)) {
            paragraphs[i].style.display = '';
        } else {
            paragraphs[i].style.display = 'none';
        }
    }
}