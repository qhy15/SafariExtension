if (window.top === window) { // inject only once!
    // alert("add event listners [injected.js]");
    safari.self.addEventListener("message", handleGextText, false);
}

function handleGextText(event) {
	
    var messageName = event.name;
    var messageData = event.message;
	
    if (messageName === "XQDB_getselection") { 
		var selected =  window.getSelection().toString();
		safari.self.tab.dispatchMessage("XQDB_theselection",selected);
		// alert("send"+selected);
	 }
 
 }