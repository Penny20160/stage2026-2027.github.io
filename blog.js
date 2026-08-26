// JavaScript source code
// JavaScript source code

function render_blog(pagina) {

    var p = 0;
    var content = document.getElementById("content");
    var pager = document.getElementById("pager");

    // verwijder de huidige inhoud
    while (content.childElementCount > 0) {
        content.removeChild(content.childNodes[0]);
    }
    while (pager.childElementCount > 0) {
        pager.removeChild(pager.childNodes[0]);
    }

    if (pagina < data.length) {
        var i, d;
        var e = document.createElement("h1");
        e.appendChild(document.createTextNode(data[pagina].label));
        content.appendChild(e);

        for (i = 0; i < data[pagina].dagen.length; i++) {
            e = document.createElement("h3");
            e.appendChild(document.createTextNode(data[pagina].dagen[i].datum));
            content.appendChild(e);
            for (d = 0; d < data[pagina].dagen[i].entries.length; d++) {
                e = document.createElement("p");
                e.appendChild(document.createTextNode(data[pagina].dagen[i].entries[d].text));
                content.appendChild(e);
            }
        }
        if (data[pagina].fotos !== undefined && data[pagina].fotos.length > 0) {
            var gallery = document.createElement("div");
            gallery.id = "gallery-" + pagina;
            content.appendChild(gallery);
            showGallery("gallery-" + pagina, data[pagina].fotos);
        }
        var e2;
        e2 = document.createElement('a');
        e2.classList.add('page-link');
        e2.href = 'javascript:void(0)';
        e2.appendChild(document.createTextNode('Eerste'));
        e2.onclick = function () { render_blog(0); };
        e = document.createElement('li');
        e.appendChild(e2);
        e.classList.add('page-item');
        if (pagina === 0) { e.classList.add('disabled'); }
        pager.appendChild(e);

        let s = 0;
        if (pagina - 2 > 0 && data.length > 5) {
            s = pagina - 2;
        }
        let m = (s + 4) < (data.length - 1) ? (s + 4) : (data.length - 1);
        var pe;
        for (pe = s; pe <= m; pe++) {

            e2 = document.createElement('a');
            e2.classList.add("page-link");
            e2.href = 'javascript:void(0)';
            e2.appendChild(document.createTextNode(pe + 1));
            e2.onclick = (function (r) { return function () { render_blog(r); } })(pe);;
            e = document.createElement('li');
            e.appendChild(e2);
            e.classList.add('page-item');
            if (pagina === pe) { e.classList.add('active'); }
            pager.appendChild(e);


        }

        e2 = document.createElement('a');
        e2.classList.add('page-link');
        e2.href = 'javascript:void(0)';
        e2.appendChild(document.createTextNode('Laatste'));
        e2.onclick = function () { render_blog(data.length - 1); };
        e = document.createElement('li');
        e.appendChild(e2);
        e.classList.add('page-item');
        if (pagina === (data.length - 1)) { e.classList.add('disabled'); }
        pager.appendChild(e);
    }
}

window.addEventListener('load', function () { render_blog(0); });