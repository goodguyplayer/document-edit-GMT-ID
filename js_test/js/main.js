// On click, run onRun
document.getElementById("run").onclick = function() {onRun()};

/**
* Function called once button run is clicked.
* Meant to go line by line and update if artifact type equals "Requirement"
* @author   Nathan
*/
function onRun(){
    var table = document.getElementById("informationandrequirements");
    for (var i = 1, row; row = table.rows[i]; i++) {

        if (row.cells[cellEnum.ARTIFACT_TYPE].innerText === "Requirement"){

            gmtBuilder(row);
        }
     }
}

/**
* Function that creates GMT ID based on requirements and update cell.
* Call other methods and connects them all, writing the cell
* @author   Nathan
* @param    {var} row    Row with the cells from the second table
*/
function gmtBuilder(row){
    
    var table = document.getElementById("gmtsource");
    var documenttype = getDocumentType(table.rows[tableEnum.TABLE_HEADER].cells);
    var level = getLevel(table.rows[tableEnum.TABLE_BODY].cells)
    var component = getComponent(table.rows[tableEnum.TABLE_BODY].cells);
    var id = getID(row.cells[cellEnum.ID]);
    row.cells[cellEnum.GMT_ID].innerHTML = documenttype + "-" +
                                            level + "-" +
                                            component + "-" +
                                            id;
}

/**
* Function that get first 3 letters from Requirements Module Document
* @author   Nathan
* @param    {var} cell    Cell that contains the document type.
* @return   {String}      Three letters of the document type. REQ, ICD, between others.
*/
function getDocumentType(cell){
    return cell[0].innerText.slice(0, 3);
}

/**
* Function that get Prefix from first table.
* @author   Nathan
* @param    {var} cell    Cell that contains the prefix.
* @return   {String}      Second part that represents level.
*/
function getLevel(cell){
    return cell[1].innerText.split("/")[1];
}

/**
* Function that get Prefix from first table.
* @author   Nathan
* @param    {var} cell    Cell that contains the prefix.
* @return   {String}      First part that represents component.
*/
function getComponent(cell){
    return cell[1].innerText.split("/")[0];
}

/**
* Function that get innerText from cell id
* @author   Nathan
* @param    {var} cell    Cell that contains id.
* @return   {String}      ID from cell.
*/
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