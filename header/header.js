function showDropdown() {
    document.querySelector('.dropdown-content').style.display = 'block';
}

function hideDropdown() {
    document.querySelector('.dropdown-content').style.display = 'none';
}

function myFunction(x) {
    x.classList.toggle("change");
}
function loadHeaderAndFooter() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../header/header.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("header").innerHTML = xhr.responseText;
        }
    };
    xhr.send();

    var xhrFooter = new XMLHttpRequest();
    xhrFooter.open("GET", "../footer/footer.html", true);
    xhrFooter.onreadystatechange = function () {
        if (xhrFooter.readyState == 4 && xhrFooter.status == 200) {
            document.getElementById("footer").innerHTML = xhrFooter.responseText;
        }
    };
    xhrFooter.send();
}

// Seite geladen: Header und Footer laden
window.onload = loadHeaderAndFooter;