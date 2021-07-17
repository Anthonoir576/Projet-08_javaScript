const main = document.querySelector('.main');


// lorsque je click sur dragX, ca influence sur le flex 
document.addEventListener('mousedown', (e) => {

    if (e.target.className == 'drag-x' && (window.event != null)) {

        let box1 = document.querySelector('.box-1');

        document.onmousemove = (e) => {
            e == null ? e = window.event : '';        
            box1.style.flex = "0 0" + e.clientX / (main.clientWidth / 100) + "%";

        }

        stopBug(e);

    } else if (e.target.className == 'drag-y' && (window.event != null)) {

        let top = document.querySelector('.top');

        document.onmousemove = (e) => {
            e == null ? e = window.event : '';
            top.style.flex = "0 0" + e.clientY / (main.clientHeight / 100) + "%";

        } 
        
        stopBug(e);

    }

});

// Stopper levenement du click lorsqu'on relache la souris
document.addEventListener('mouseup', (e) => {

    if (e.target != null) {

        document.onmousemove = null;
        document.onselectstart = null;
        e.target.ondragstart = null;

    }

});

// Stopper les mauvais comportements de la souris, certain bug etc
const stopBug = (e) => {

    document.onselectstart = () => {return false};
    document.ondragstart = () => {return false};

    return false

}