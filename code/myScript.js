var isClicked = false;
var id = "5bd1bb25-2d16-40f8-abb3-fa92f8829d63";
var inst = Object;

/*function Click() {
    console.log("clicked: " + inst);
    inst.closeWindow();
    inst.destroy();
    var id = "";


    //var b1 = document.getElementById("b1");
    var is
    if (isClicked == false) {
        document.querySelector('#b1').innerHTML = 'Switch to English';
        id = "838542e4-26d7-4f02-8d51-cfc569c491cf";
        isClicked = true;
    } else {
        document.querySelector('#b1').innerHTML = 'Switch to Arabic';
        id = "5bd1bb25-2d16-40f8-abb3-fa92f8829d63";
        isClicked = false;
    }

    window.loadWatsonAssistantChat({
        // hideCloseButton:true,
        // showLauncher:false,
        integrationID: id, // The ID of this integration.
        region: "eu-gb" // The region your integration is hosted in.
    }).then(function (instance) {

        //  
        instance.render();
        inst = instance;
        //instance.closeWindow();
        instance.openWindow();
    });



    console.log(isClicked + " " + id);
    return inst;

}*/

/*function DefaultAssistant() {

    window.loadWatsonAssistantChat({
        //  hideCloseButton:true,
        // showLauncher:false,
        integrationID: id, // The ID of this integration.
        region: "eu-gb" // The region your integration is hosted in.
    }).then(function (instance) {
        instance.render();
        inst = instance;
       // instance.openWindow();
        console.log("hey: " + inst);

    });

    return inst;


}*/


function Click() {
    console.log("clicked: " + inst);
    inst.closeWindow();
    inst.destroy();
    var id = "";


    //var b1 = document.getElementById("b1");
    var is
    if (isClicked == false) {
        document.querySelector('#b1').innerHTML = 'Switch to English';
        id = "838542e4-26d7-4f02-8d51-cfc569c491cf";
        isClicked = true;
    } else {
        document.querySelector('#b1').innerHTML = 'Switch to Arabic';
        id = "5bd1bb25-2d16-40f8-abb3-fa92f8829d63";
        isClicked = false;
    }

    window.watsonAssistantChatOptions = {
        integrationID: id, // The ID of this integration.
        region: "eu-gb", // The region your integration is hosted in.
        
        serviceInstanceID: "1e4a7036-7df3-4b3c-ba43-59f50310c91c", // The ID of your service instance.
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



function DefaultAssistant(){
  window.watsonAssistantChatOptions = {
      integrationID: id, // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      
      serviceInstanceID: "1e4a7036-7df3-4b3c-ba43-59f50310c91c", // The ID of your service instance.
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
window.location.href = "https://node-red-aesoi.eu-gb.mybluemix.net/ui/#!/0?socketid=aukLKOjwSWXkq0gRAAAB";
}

