let rownum;
let colnum;
let interval;

function kill() {
    if (this.className === "alive")
        this.className = "dead";
    else
        this.className = "alive";
}
//create game erea by two values from the user
function createarea(event) {
    let temp1 = document.querySelector("#rows").value;
    let temp2 = document.querySelector("#cols").value;
    let tbl = document.querySelector("table");
    //if not first time click remove the old table
    if (tbl.childElementCount !== 0)
        while (tbl.firstChild)
            tbl.deleteRow(0);
    let td;
    let tr;
    if (temp1 === "" || temp2 === "") {
        window.alert("fill all the data(rows and column)");
        return;
    }
    rownum = parseInt(temp1);
    colnum = parseInt(temp2);
    for (let i = 0; i < rownum; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < colnum; j++) {
            td = document.createElement('td');
            td.setAttribute("id", `id${i}${j}`);
            td.className = "dead";
            td.addEventListener('click', kill);
            tr.appendChild(td);
        }
        tbl.appendChild(tr);
    }
}
//change the speed of the game by using input type range
function changespeed(value) {
    clearInterval(interval);
    interval = setInterval("gameoflife()", parseInt(value));
}
//start the game
function start() {
    interval = setInterval("gameoflife()", parseInt(document.querySelector(`#rangespeed`).value));
}
//check all the 4 rules and count alive cells for each cell
function gameoflife() {
    let arr = [];
    let temp;
    let changecell;
    for (let i = 0; i < rownum; i++)
        for (let j = 0; j < colnum; j++) {
            let deadccnt = 0;
            let alivecnt = 0;
            let td = document.querySelector(`#id${i}${j}`);
            if (i === 0 && j === 0) {
                if (document.querySelector(`#id${i}${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}${j+1}`).className === "alive")
                    alivecnt++;
            } else if (i === 0 && j === colnum - 1) {
                if (document.querySelector(`#id${i}${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}${j-1}`).className === "alive")
                    alivecnt++;
            } else if (i === 0 && j !== colnum - 1 && j !== 0) {
                if (document.querySelector(`#id${i}${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}${j+1}`).className === "alive")
                    alivecnt++;
            } else if (i === rownum - 1 && j === 0) {
                if (document.querySelector(`#id${i-1}${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}${j+1}`).className === "alive")
                    alivecnt++;
            } else if (i !== 0 && i !== rownum - 1 && j === 0) {
                if (document.querySelector(`#id${i-1}${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}${j+1}`).className === "alive")
                    alivecnt++;
            } else if (i === rownum - 1 && j === colnum - 1) {
                if (document.querySelector(`#id${i-1}${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}${j-1}`).className === "alive")
                    alivecnt++;
            } else if (i === rownum - 1 && j !== colnum - 1 && j !== 0) {
                if (document.querySelector(`#id${i-1}${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}${j+1}`).className === "alive")
                    alivecnt++;
            } else if (i !== rownum - 1 && i !== 0 && j === colnum - 1) {
                if (document.querySelector(`#id${i-1}${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}${j}`).className === "alive")
                    alivecnt++;
            } else {
                if (document.querySelector(`#id${i-1}${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}${j+1}`).className === "alive")
                    alivecnt++;
            }
            //the rules
            if (td.className === "dead") {
                if (alivecnt === 3)
                    arr.push({
                        id: `#id${i}${j}`,
                        class: "alive"
                    });
            } else {
                if (alivecnt < 2 || alivecnt > 3)
                    arr.push({
                        id: `#id${i}${j}`,
                        class: "dead"
                    });
            }
        }
        //make the changes
    while (arr.length !== 0) {
        temp = arr.pop();
        changecell = document.querySelector(temp.id);
        changecell.className = temp.class;
    }
}
//make pause
function pause() {
    clearInterval(interval);
}

function randfill() {
    let numfill = parseInt(document.querySelector("#rand").value);
    let cells = parseInt(colnum) * parseInt(rownum);
    numfill = numfill * cells / 100;
    for (let k = 0; k <= numfill; k++) {
        let i = Math.floor(Math.random() * parseInt(colnum));
        let j = Math.floor(Math.random() * parseInt(rownum));
        if (document.querySelector(`#id${i}${j}`).className === "alive")
            k--;
        else
            document.querySelector(`#id${i}${j}`).className = "alive";
    }
}