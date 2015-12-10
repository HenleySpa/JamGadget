//JS para login SAP BO /

    string userName = "Administrator";
    string password = "elegur2012";
    string auth = "secEnterprise";       
    string baseURL = " http://200.27.160.150:6405/biprws/";
    string LogonURI = baseURL + "logon/long";
    string logonToken;
    string docURL = "http://200.27.160.150:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AdW_gcRTVzlNkzWHnJIU_tU";
 
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
   
    //Returns an XmlNodeList containing a list of all descendant elements 
    //that match the specified name i.e. attr
    XmlNodeList nodelist = doc.GetElementsByTagName("attr");
//  Add the logon parameters to the attribute nodes of the document
    foreach (XmlNode node in nodelist)
    {
        if (node.Attributes["name"].Value == "userName")
            node.InnerText = userName;
 
        if (node.Attributes["name"].Value == "password")
            node.InnerText = password;
 
        if (node.Attributes["name"].Value == "auth")
            node.InnerText = auth;
    }

function Hello ()
    {
        alert("hola")
    }
