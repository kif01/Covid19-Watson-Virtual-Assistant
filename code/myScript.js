var isClicked = false;
id = "<ENGLISH-VERSION-ASSISTANT-ID>" //By default, using the english version of the assistant; 
var inst = Object;


//Change the assistant when user clicks on the change langugae button
function Click() {
    console.log("clicked: " + inst);
    inst.closeWindow();
    inst.destroy();
    var id = "";

    if (isClicked == false) {
        document.querySelector('#b1').innerHTML = 'Switch to English';
        id = "<ARABIC-VERSION-ASSISTANT-ID>";
        isClicked = true;
    } else {
        document.querySelector('#b1').innerHTML = 'Switch to Arabic';
        id = "<ENGLISH-VERSION-ASSISTANT-ID>";
        isClicked = false;
    }

    window.watsonAssistantChatOptions = {
        integrationID: id, // The ID of this integration.
        region: "<REGION>", // The region your integration is hosted in.
        
        serviceInstanceID: "<SERVICE-INSTANCE-ID>", // The ID of your service instance.
        onLoad: function(instance) { 
          instance.render();
          inst = instance;
          instance.openWindow();
      
      }
      
    };
    setTimeout(function(){
      const t=document.createElement('script');
      t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
      document.head.appendChild(t);
    });

    console.log(isClicked + " " + id);
    return inst;

}



//Use this function when page is loaded to render te default assistant which is the englih version
function DefaultAssistant(){
  window.watsonAssistantChatOptions = {
      integrationID: id, // The ID of this integration.
      region: "<REGION>", // The region your integration is hosted in.
      
      serviceInstanceID: "<SERVICE-INSTANCE-ID>", // The ID of your service instance.
      onLoad: function(instance) { instance.render();
        inst = instance;
    
    }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });

  return inst;
}


function jump(){
window.location.href = "<NODE-RED-URL-APP>";
}

