function createarea(event) {
    let rownum;
    let colnum;
    let temp1 = document.querySelector("#rows").value;
    let temp2 = document.querySelector("#cols").value;
    let tbl = document.querySelector("table");
    let tbdy = document.createElement('tbody');
    tbl.appendChild(tbdy);
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
            tr.appendChild(td);
        }
        tbdy.appendChild(tr);
    }
}