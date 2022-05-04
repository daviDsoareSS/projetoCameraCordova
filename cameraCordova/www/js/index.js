document.addEventListener('deviceready', onDeviceReady, false);

function onSucces(imageURI){
    let tagImg = document.getElementById("imgHtmlTag");
    tagImg.src = "data:image/jpeg;base64,"+imageURI;
}

function onFail(){
    alert("Falha ao tirar a foto");
}


function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    let btnAbreCamera = document.getElementById("tirarFoto");

    var opcoes = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        allowEdit: false,
            saveToPhotoAlbum: false,
            cameraDirection: 1,
            sourceType: Camera.PictureSourceType.CAMERA
    }
    

    btnAbreCamera.addEventListener('click', function(){
        alert("O App irá usar a sua câmera!");    
        navigator.camera.getPicture(onSucces, onFail, opcoes);

    })
}
