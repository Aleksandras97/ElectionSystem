import { ref, watch } from "vue"

export function useImageUpload() {

    const photo = ref('')
    const photoUrl = ref('')

    function uploadFile(event){
        if (event.target.files.lenght === 0) {
            photo.value = "";
            photoUrl.value = "";
            return;
        }
        photo.value = event.target.files[0];
    }

    watch(photo, (photo) => {

        if (!photo instanceof File) {
            return;
        }
        let fileReader = new FileReader();

        fileReader.readAsDataURL(photo);

        fileReader.addEventListener("load", () => {
            photoUrl.value = fileReader.result;
            console.log(photoUrl.value);
        })
    })

    return {
        photo,
        photoUrl,
        uploadFile,
    }

}