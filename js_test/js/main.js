var cellEnum = {
    ID: 0,
    GMT_ID: 1,
    NAME: 2,
    ARTIFACT_TYPE: 3,
};

document.getElementById("run").onclick = function() {onRun()};


function onRun(){
    var table = document.getElementById("informationandrequirements");
    for (var i = 1, row; row = table.rows[i]; i++) {
        console.log(row.cells[cellEnum.ID]);

        if (row.cells[cellEnum.ARTIFACT_TYPE].innerText === "Requirement"){
            row.cells[1].innerHTML = "Test";
            gmtBuilder();
            console.log(row.cells[cellEnum.ID].innerHTML);
            
        }

     }
}

function gmtBuilder(cellId){
    var table = document.getElementById("gmtsource");
    getDocumentType(table.rows[0].cells);
    getLevel(table.rows[1].cells);
    getComponent(table.rows[1].cells);
}

function getDocumentType(cell){
    console.log(cell[0].innerText.slice(0, 3));
    return cell[0].innerText.slice(0, 3);
}

function getLevel(cell){
    console.log(cell[1].innerText.split("/")[1]);
    return cell[1].innerText.split("/")[1];
}

function getComponent(cell){
    console.log(cell[1].innerText.split("/")[0]);
    return cell[1].innerText.split("/")[0];
}