(function(c, d, w){
    const inputPhotoPerfil = d.querySelector("#input-photo-perfil"),
        openFile = d.querySelector("#openFile"),
        formInputPhoto = d.querySelector("#formInputPhoto");

    openFile.addEventListener("click", function(e){
        e.preventDefault()
        // Abro el explorador de archivos de windows
        inputPhotoPerfil.click()


        // Lanzo el evento cuando se carga una imagen
        inputPhotoPerfil.addEventListener("change", function(){
            //c( d.querySelector('input[name="id_profile"]').value )
            if(this.files[0].type === "image/png" || this.files[0].type === "image/jpg" || this.files[0].type === "image/jpeg"){

                var data = new FormData()
                data.append('photo_perfil', this.files[0]);
                data.append('id_user', d.querySelector('input[name="id_profile"]').value)

                fetch('/upload-image', {
                    method: 'POST',
                    body: data
                })
                    .then(response => response.json())
                    .then(success => c(success))
                    .catch(error => c(error));
                return false;
            }else{
                c("Este tipo de archivo con Formato 'X' no puede ser cargado")
            }
        });
    });
})(console.log, document, window);
