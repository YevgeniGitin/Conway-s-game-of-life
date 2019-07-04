let rownum;
let colnum;

function kill() {
    if (this.className === "alive")
        this.className = "dead";
    else
        this.className = "alive";
}

function createarea(event) {
    let temp1 = document.querySelector("#rows").value;
    let temp2 = document.querySelector("#cols").value;
    let tbl = document.querySelector("table");
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
            td.setAttribute("id", i + "," + j);
            td.className = "alive";
            td.addEventListener('click', kill);
            tr.appendChild(td);
        }
        tbl.appendChild(tr);
    }
}