//JS para login SAP BO /

    string userName = "administrator";
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
 
   //Making POST request to /logon/long to receive a logon token
   WebRequest myWebRequest1 = WebRequest.Create(LogonURI);
   myWebRequest1.ContentType = "application/xml";
   myWebRequest1.Method = "POST";
 
   byte[] reqBodyBytes = System.Text.Encoding.Default.GetBytes(doc.OuterXml); 
 
   Stream reqStream = myWebRequest1.GetRequestStream();
   reqStream.Write(reqBodyBytes, 0, reqBodyBytes.Length);
   reqStream.Close();
   try
   {
       WebResponse myWebResponse1 = myWebRequest1.GetResponse();
       StreamReader sr1 = new StreamReader(myWebResponse1.GetResponseStream());
       string output1 = sr1.ReadToEnd();
       doc.LoadXml(output1);
 
       XmlNodeList nodelist1 = doc.GetElementsByTagName("attr");
       if (nodelist1[0].Attributes["name"].Value== "logonToken")
       {
       //Finding the value of the logonToken
           logonToken = nodelist1[0].InnerText;
       //Encoding the logonToken
           string encodedToken = Server.UrlEncode(logonToken);
       //Appending the encoded token to the OpenDocument URL
           string finalUrl = docURL + "&X-SAP-LogonToken=" + encodedToken;
 
           Response.Redirect(finalUrl);
       }
       
   }
   catch (WebException err)
   {
       //error while accessing the network through a pluggable protocol
       Response.Write("<b>" + err.Message + "</b>");
   }
   catch (Exception err)
   {
       //generic error
       Response.Write("<b>" + err.Message + "</b>");
   }
