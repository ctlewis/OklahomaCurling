$.get("/Templates/headerTemplate.html", function(data){
    $("#header-placeholder").replaceWith(data);
});
$.get("/Templates/navTemplate.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});
$.get("/Templates/footerTemplate.html", function(data){
    $("#footer-placeholder").replaceWith(data);
});