//JS JAM OPEN BO

//Función para abrir la URL
function popupwebi(url)
{
	var newwindow;
	newwindow=window.open(url,'_blank', 'directories =yes, menubar =yes, status=yes, toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
	//if (window.focus) {newwindow.focus()}
	win.focus();
}


function gettoken()
{
	var userName="Administrator";
	var password="elegur2012";
	var auth = "secEnterprise";
	var baseURL = "http://200.27.160.150:6405/biprws/";
	var LogonURI = baseURL + "logon/long";
	var docURL = "http://200.27.160.150:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AdW_gcRTVzlNkzWHnJIU_tU";
	var login;
	var dtoken;
	//var sxml= '<?xml version="1.0"?><attrs xmlns="http://www.sap.com/rws/bip"><attr name="userName" type="string">'+userName+'</attr><attr name="password" type="string">'+password+'</attr><attr name="auth" type="string" possibilities="secEnterprise,secLDAP,secWinAD">secEnterprise</attr></attrs>';
	//var ptoken= new XMLHttpRequest();
	//ptoken.open('POST',LogonURI,false);
	//ptoken.setRequestHeader('X-PINGARUNER', 'pingpong');
    	//ptoken.setRequestHeader('Content-Type', 'application/xml');
	//ptoken.send(sxml);
	//dtoken=encodeURI(ptoken.getResponseHeader('X-SAP-LogonToken'));
	popuwebi(docURL);
	//alert(ptoken.responseText);
        //login=docURL+'&'+dtoken;
	//alert(login);

}
