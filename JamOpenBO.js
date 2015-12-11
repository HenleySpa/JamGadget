//JS JAM OPEN BO
// Al cargarse el archivo JavaScript, se muestra un mensaje
//alert("Hola Mundo!");
 
// Despues del primer mensaje, se muestra otro mensaje seguido
//alert("Soy el primer script");

//Función para abrir la URL
function popupwebi(url)
{
	var newwindow;
	newwindow=window.open(url,'_blank', 'directories =yes, menubar =yes, status=yes, toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
	//if (window.focus) {newwindow.focus()}
	win.focus();
}

function getwebiurl()
{
	var userName="Administrator";
	var password="elegur2012";
	var auth = "secEnterprise";
	var baseURL = "http://200.27.160.150:6405/biprws/";
	var LogonURI = baseURL + "logon/long";
	var docURL = "http://200.27.160.150:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AdW_gcRTVzlNkzWHnJIU_tU";
	var login;
	popupwebi(docURL);
	//popupwebi(LogonURI);


	
	
	
	
}
