function arrayToTable(tableData) {
    var table = $('<table class="table table-striped text-center"></table>');
    var i = 0;
    tableData.forEach(function(rowData){
        //If this is the first row, treat it as a header
        if(i===0){
            var row = $('<thead class="thead-dark"><tr></tr></thead>');
            rowData.forEach(function(cellData) {
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
            var j = 0;
            rowData.forEach(function(cellData) {
                if(j===0){row.append($('<th scope="row">'+cellData+'</th>'));}
                else{row.append($('<td>'+cellData+'</td>'));}
                j++;
            });}
        
        table.append(row);
        i++;
    });
    return table;
}

$.getJSON ("https://sheets.googleapis.com/v4/spreadsheets/1Obk0rj1LvyCW9G9d57C4flvnmS6tHkE2iEQcnjiBBaM/values/Draw1!A2:F20?key=AIzaSyBDKCSGO39d8AVVGoTRDKtVjYL7-1ux3Jg", function(result){
    $('#draw1').append(arrayToTable(result.values))
});

$.getJSON ("https://sheets.googleapis.com/v4/spreadsheets/1Obk0rj1LvyCW9G9d57C4flvnmS6tHkE2iEQcnjiBBaM/values/Draw2!A2:F20?key=AIzaSyBDKCSGO39d8AVVGoTRDKtVjYL7-1ux3Jg", function(result){
    $('#draw2').append(arrayToTable(result.values))
});