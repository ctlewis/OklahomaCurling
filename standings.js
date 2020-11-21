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
            var color;
            switch(i){
              case 1:
                color = 'bg-gold';
                break;
              case 2:
                color = 'bg-silver';
                break;
              case 3:
                color = 'bg-bronze';
                break;
            }
            
            var row = $('<tr class=' + color + '></tr>');
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
    url: "http://www.okcurling.com/resources/standings1.csv",
    dataType: "text",
    success: function (data) {
        $('#draw1').append(arrayToTable(Papa.parse(data).data));
    }
});
$.ajax({
    type:"GET",
    url: "http://www.okcurling.com/resources/standings2.csv",
    dataType: "text",
    success: function (data) {
        $('#draw2').append(arrayToTable(Papa.parse(data).data));
    }
});