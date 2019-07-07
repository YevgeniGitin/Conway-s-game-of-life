let rownum;
let colnum;
let interval;
let startflag = 0; //flag for know if the game i running or not

// when we click on cell change the state and color of this cell 
function kill() {
    if (this.className === "alive")
        this.className = "dead";
    else
        this.className = "alive";
}
//create game erea by two values from the user
function createarea(event) {
    let tbl = document.querySelector("table");
    let td;
    let tr;
    //check if it is the first game if not dellete the interval
    if (startflag) {
        clearInterval(interval);
        startflag = 0;
    }
    //if not first time click remove the old table
    if (tbl.childElementCount !== 0)
        while (tbl.firstChild)
            tbl.deleteRow(0);
    //create new table
    rownum = parseInt(document.querySelector("#rows").value);
    colnum = parseInt(document.querySelector("#cols").value);
    for (let i = 0; i < rownum; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < colnum; j++) {
            td = document.createElement('td');
            td.setAttribute("id", `id${i}_${j}`);
            td.className = "dead";
            td.addEventListener('click', kill);
            tr.appendChild(td);
        }
        tbl.appendChild(tr);
    }
}
//change the speed of the game by using input type range
function changespeed(value) {
    if (startflag) { //change speed on run only in running mode on the game
        clearInterval(interval);
        interval = setInterval("gameoflife()", parseInt(value));
    }
}
//start the game
function start() {
    if (!startflag) { //check for not dubble click for solve many intervals
        interval = setInterval("gameoflife()", parseInt(document.querySelector(`#rangespeed`).value));
        startflag = 1;
    }
}
//check all the 4 rules and count alive cells for each cell
function gameoflife() {
    let arr = []; //array for save the chenges
    let temp;
    let changecell;
    for (let i = 0; i < rownum; i++)
        for (let j = 0; j < colnum; j++) {
            let alivecnt = 0;
            let td = document.querySelector(`#id${i}_${j}`);
            // for each cell check 9 cases and save alive neighbors
            if (i === 0 && j === 0) {
                if (document.querySelector(`#id${i}_${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}_${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}_${j+1}`).className === "alive")
                    alivecnt++;
            } else if (i === 0 && j === colnum - 1) {
                if (document.querySelector(`#id${i}_${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}_${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}_${j-1}`).className === "alive")
                    alivecnt++;
            } else if (i === 0 && j !== colnum - 1 && j !== 0) {
                if (document.querySelector(`#id${i}_${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}_${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}_${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}_${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}_${j+1}`).className === "alive")
                    alivecnt++;
            } else if (i === rownum - 1 && j === 0) {
                if (document.querySelector(`#id${i-1}_${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}_${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}_${j+1}`).className === "alive")
                    alivecnt++;
            } else if (i !== 0 && i !== rownum - 1 && j === 0) {
                if (document.querySelector(`#id${i-1}_${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}_${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}_${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}_${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}_${j+1}`).className === "alive")
                    alivecnt++;
            } else if (i === rownum - 1 && j === colnum - 1) {
                if (document.querySelector(`#id${i-1}_${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}_${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}_${j-1}`).className === "alive")
                    alivecnt++;
            } else if (i === rownum - 1 && j !== colnum - 1 && j !== 0) {
                if (document.querySelector(`#id${i-1}_${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}_${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}_${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}_${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}_${j+1}`).className === "alive")
                    alivecnt++;
            } else if (i !== rownum - 1 && i !== 0 && j === colnum - 1) {
                if (document.querySelector(`#id${i-1}_${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}_${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}_${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}_${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}_${j}`).className === "alive")
                    alivecnt++;
            } else {
                if (document.querySelector(`#id${i-1}_${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}_${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i-1}_${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}_${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i}_${j+1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}_${j-1}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}_${j}`).className === "alive")
                    alivecnt++;
                if (document.querySelector(`#id${i+1}_${j+1}`).className === "alive")
                    alivecnt++;
            }
            //the 4 rules
            if (td.className === "dead") {
                if (alivecnt === 3)
                    arr.push({ //push the change
                        id: `#id${i}_${j}`,
                        class: "alive"
                    });
            } else {
                if (alivecnt < 2 || alivecnt > 3)
                    arr.push({ //push the change
                        id: `#id${i}_${j}`,
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
    if (startflag) { //change running mode to pause mode of the game only if the game is running and set the mode flag
        clearInterval(interval);
        startflag = 0;
    }
}
//fill the area by random places with the prasentage that the user choose 
function randfill() {
    let numfill = parseInt(document.querySelector("#rand").value);
    let cells = colnum * rownum;
    numfill = cells * numfill / 100; //calck the number of cells to change
    for (let k = 0; k <= numfill; k++) {
        let i = Math.floor(Math.random() * colnum);
        let j = Math.floor(Math.random() * rownum);
        if (document.querySelector(`#id${i}_${j}`).className === "alive") //if the cell is alredy alive rand again
            k--;
        else
            document.querySelector(`#id${i}_${j}`).className = "alive";
    }
}