function showGallery(id, images){
    var container = document.getElementById(id);

    while (container.childElementCount >0){
        container.removeChild(container.firstChild);
    }
    if (images.length ===0){
        container.className = "";
    } else {
        container.classList.add("gallery");
        for (var i=0; i < images.length; i++) {
            var tile = document.createElement("div");
            tile.classList.add("gallery_tile");
            container.appendChild(tile);
            var thumb = document.createElement('img');
            thumb.src = images[i].src;
            thumb.onclick = (function(ref){return function() {onZoom(id,ref,images);}})(i);
            tile.appendChild(thumb);
        }


    }



}

function onZoom( id,img_ref , images){
    var body = document.getElementsByTagName('body')[0];
    var e = document.createElement('div');
    e.id = id + '_zoom';
    body.appendChild(e);
    var e2 = document.createElement('div');
    e2.classList.add('overlay');
    e.appendChild(e2);

    var img = document.createElement('img');
    img.classList.add('overlay_img');
    img.src=images[img_ref].src;

    e.appendChild(img);

    e2 = document.createElement('button');
    e2.classList.add('overlay_controls', 'overlay_prev');
    e2.appendChild(document.createTextNode('<'));
    e2.onclick = function(){
        if(img_ref ==0 )
        {
            img_ref = images.length -1; 
        } else {
            img_ref--;
        }
        img.src=images[img_ref].src;
    }
    e.appendChild(e2);


    e2 = document.createElement('button');
    e2.classList.add('overlay_controls', 'overlay_next');
    e2.appendChild(document.createTextNode('>'));
    e2.onclick = function(){
        img_ref++;
        if(img_ref == images.length )
        {
            img_ref = 0; 
        }
        img.src=images[img_ref].src;
    }
    e.appendChild(e2);

    e2 = document.createElement('button');
    e2.classList.add('overlay_controls', 'overlay_close');
    e2.appendChild(document.createTextNode('X'));
    e2.onclick = function() {
        body.removeChild(e);
    }
    e.appendChild(e2);


}

//winndow.addEventListener('load',showGallery, {once: true});
