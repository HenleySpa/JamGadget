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
	//popupwebi(docURL,"Reporte Ejemplo");
	//popupwebi(LogonURI);
	//Making GET Request to  /logon/long to receive XML template.
    WebRequest myWebRequest = WebRequest.Create(LogonURI);
    myWebRequest.ContentType = "application/xml";
    myWebRequest.Method = "GET";
	//Returns the response to the request made
    WebResponse myWebResponse = myWebRequest.GetResponse();
//Creating an instance of StreamReader to read the data stream from the resource
    StreamReader sr = new StreamReader(myWebResponse.GetResponseStream());
//Reads all the characters from the current position to the end of the stream and store it as string
    string output = sr.ReadToEnd();
    //Initialize a new instance of the XmlDocument class
    XmlDocument doc = new XmlDocument();
//Loads the document from the specified URI
    doc.LoadXml(output);
	escribir=document.getElementID(output);
	
	
	
	
}
