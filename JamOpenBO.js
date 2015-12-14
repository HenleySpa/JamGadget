//JS JAM OPEN BO

//Función para abrir la URL


function gettoken()
{
	var userName="Administrator";
	var password="elegur2012";
	var auth = "secEnterprise";
	var baseURL = "http://200.27.160.150:6405/biprws/";
	var LogonURI = baseURL + "logon/long";
	var docURL = 'http://200.27.160.150:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AdW_gcRTVzlNkzWHnJIU_tU&token=';
	var login;
	var dtoken;
	var sxml= '<?xml version="1.0"?><attrs xmlns="http://www.sap.com/rws/bip"><attr name="userName" type="string">'+userName+'</attr><attr name="password" type="string">'+password+'</attr><attr name="auth" type="string" possibilities="secEnterprise,secLDAP,secWinAD">secEnterprise</attr></attrs>';
	
	if (window.XMLHttpRequest)//Navegadores que siguen el estandar
	{
		var ptoken = new XMLHttpRequest();
	}else if(window.ActiveXObject){
		var ptoken= new XMLHttpRequest("Microsoft.XMLHTTP");	//Navegadores obselotos
		}
	
	ptoken.open('POST',LogonURI,false);
	ptoken.setRequestHeader('X-PINGARUNER', 'pingpong');
    ptoken.setRequestHeader('Content-Type', 'application/xml');
		
	ptoken.send(sxml);
	dtoken=encodeURIComponent(ptoken.getResponseHeader('X-SAP-LogonToken'));
	//dtoken=dtoken.replace("\"B","B");
	dtoken=dtoken.replace("%22","\"");
	dtoken=dtoken.replace("%2C",",");
    dtoken=dtoken.replace("%22","\"");
    dtoken=dtoken.replace("%7B","{");
    dtoken=dtoken.replace("%7D","}");
    dtoken=dtoken.replace("%3A",":");
    dtoken=dtoken.replace("%5D","]");
    dtoken=dtoken.replace("%5B","[");
    dtoken=dtoken.replace("%20"," ");
	dtoken=dtoken.replace(/['"]+/g, '');
    //alert(dtoken);
	login=docURL+dtoken;
	//alert(login);
	openurl(login);

}

function openurl(url)
{
	var reporte;
	   	//reporte=window.open(url,'', 'directories =yes, menubar =yes, status=yes, toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
	   	//if (window.focus) {reporte.focus()}
	   	//win.focus();
		//reporte=window.open (url,'_self',false)
		var dimensions = gadgets.window.getViewportDimensions();
    		var html = "Height: " +  dimensions.height + " Width: " + dimensions.width;
    		//document.getElementById("content_div").innerHTML = html;
		document.location.href = url;
}

