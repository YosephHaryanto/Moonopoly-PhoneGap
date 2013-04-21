function proc(a) {
    var name = $('#Screen_New_CompanyName').val();
    comp = new Company(name, 0, 100000000);
    //navigator.notification.alert("SSS", null, "INFO", "OK");
    state.loadProspect(a);
}

function alerts(msg){
	navigator.notification.alert(msg , null, "Alert", "OK");
}

var comp;