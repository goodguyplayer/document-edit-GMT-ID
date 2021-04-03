// On click, run onRun
document.getElementById("run").onclick = function() {onRun()};

// Iterates cell, proceeding if Artifact type equals "Requirement"
function onRun(){
    var table = document.getElementById("informationandrequirements");
    for (var i = 1, row; row = table.rows[i]; i++) {

        if (row.cells[cellEnum.ARTIFACT_TYPE].innerText === "Requirement"){

            gmtBuilder(row);
        }
     }
}

// Create GMT ID based on requirements and update cell
function gmtBuilder(row){

    var table = document.getElementById("gmtsource");
    row.cells[cellEnum.GMT_ID].innerHTML = getDocumentType(table.rows[tableEnum.TABLE_HEADER].cells) + "-" +
            getLevel(table.rows[tableEnum.TABLE_BODY].cells) + "-" +
            getComponent(table.rows[tableEnum.TABLE_BODY].cells) + "-" +
            getID(row.cells[cellEnum.ID]);
}

// Get first 3 letters from Requirements Module Document
function getDocumentType(cell){
    return cell[0].innerText.slice(0, 3);
}

// Get Prefix and returns the Level
function getLevel(cell){
    return cell[1].innerText.split("/")[1];
}

// Get Prefix and returns the component
function getComponent(cell){
    return cell[1].innerText.split("/")[0];
}

// Get innerText from cell id
function getID(cell){
    return cell.innerText;
}

// Facilitate in identifying what number represents in cell line
var cellEnum = {
    ID: 0,
    GMT_ID: 1,
    NAME: 2,
    ARTIFACT_TYPE: 3,
};

// Facilitate in identifying what number represents in table line
var tableEnum = {
    TABLE_HEADER: 0,
    TABLE_BODY: 1
};