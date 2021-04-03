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
            
        }

     }
}

