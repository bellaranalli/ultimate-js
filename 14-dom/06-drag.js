let id;
function creatDraggable() {
    let span = document.createElement('span');
    span.id = 'hola-mundo';
    span.innerText = 'Arrastrable';
    span.draggable = true;
    span.ondragstart = e => {
        e.target.id = id;
    }

    return span;
}

function createDroppableArea() {
    let dropArea = document.createElement('div');
    dropArea.className = 'drop';
    dropArea.ondragenter = e => {
        e.target.style.background = 'pink';
    }

    dropArea.ondragleave = e => {
        e.target.style.background = '';
    }
    dropArea.ondragover = e => e.preventDefault();

    dropArea.ondrop = e => {
        e.target.appendChild(document.getElementById(id));
    }

    return dropArea;
}

let draggable = creatDraggable();
let dropArea1 = createDroppableArea();
let dropArea2 = createDroppableArea();
document.body.append(dropArea1);
document.body.append(dropArea2);
document.body.append(draggable);
