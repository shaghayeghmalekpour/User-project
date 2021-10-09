     const formDataContainer = document.getElementById("frmCreatPost");
    formDataContainer.addEventListener("submit" , getDataForm);

    function getDataForm(e){
        e.preventDefault();
        const formData = Object.fromEntries( new FormData(e.target));
        console.log(formData);
        return false;
    }