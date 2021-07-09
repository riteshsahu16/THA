
function btnClick(e) {
    console.log("You've clicked the button right???")
    e.preventDefault();
}

function btnOver() {
    console.log("You've put cursor on button");
}

function btnOut() {
    console.log("You're out from cursor");
}

function keyUP() {
    console.log("releasing the press!!!")
}

function keyDOWN() {
    console.log("You're pressing a key!!!");
}

function ddlChange() {
    value = document.getElementsByTagName('select').value;
    console.log("You've selected ", value)
}

function loadStart() {
    let img = document.createElement('img');
    img.src = "loading.gif";
}

function pageLoaded() {
    console.log("Page loaded successfully");
}

function pageSuspended() {
    console.log("Page was suspended");
}
function pageResize() {
    console.log("Page is getting resized");
}