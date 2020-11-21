function arrayToTable(tableData) {
    var table = $('<table class="table table-striped text-center"></table>');
    $(tableData).each(function (i, rowData) {
        //If this is the first row, treat it as a header
        if(i===0){
            var row = $('<thead class="thead-dark"><tr></tr></thead>');
            $(rowData).each(function (j, cellData) {
                row.append($('<th scope="col">'+cellData+'</th>'));
            });}
        else{
            var row = $('<tr></tr>');
            $(rowData).each(function (j, cellData) {
                if(j===0){row.append($('<th scope="row">'+cellData+'</th>'));}
                else{row.append($('<td>'+cellData+'</td>'));}
            });}
        
        table.append(row);
    });
    return table;
}

$.ajax({
    type:"GET",
    url: "http://www.okcurling.com/resources/schedule1.csv",
    dataType: "text",
    success: function (data) {
        $('#draw1').append(arrayToTable(Papa.parse(data).data));
    }
});
$.ajax({
    type:"GET",
    url: "http://www.okcurling.com/resources/schedule2.csv",
    dataType: "text",
    success: function (data) {
        $('#draw2').append(arrayToTable(Papa.parse(data).data));
    }
});