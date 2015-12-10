//JS para login SAP BO /

function login(username,password) {
      $.ajax({url: server + '/biprws/logon/long', type: 'POST', contentType: 'application/xml',
                dataType: 'xml',
                crossDomain: true,

data: '<attrs xmlns="http://www.sap.com/rws/bip"><attr name="cms" type="string">localhost</attr>' +
         '<attr name="userName" type="string">'+username+'</attr><attr name="password" type="string">'+password+'</attr>' +
         '<attr name="auth" type="string" possibilities="secEnterprise,secLDAP,secWinAD">secEnterprise</attr></attrs>',

                         complete: function(xhr, status) {
                                if (status != 'error' && xhr.responseText) {
                                                 logonToken = "\""+tokenRE.exec(xhr.responseText)[1].replace(/&amp;/g, '&')+"\""; }
                                },
                                error:function(xhr, textStatus, errorThrown) { console.log("Error connecting to BOE server");},
                                success:function(xhr, textStatus, errorThrown) { console.log("Successfully logged on to BOE server");},
                                beforeSend:function(xhr)  { xhr.setRequestHeader("Access-Control-Allow-Origin", "*");}  
            });
    }
