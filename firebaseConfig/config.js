import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'


const firebaseConfig = {
    apiKey: "AIzaSyD3QkBt6QC4pVFqOmLt9ZW9EZcAkMtvl3M",
    authDomain: "sena-proyecto-final.firebaseapp.com",
    projectId: "sena-proyecto-final",
    storageBucket: "sena-proyecto-final.appspot.com",
    messagingSenderId: "445524735501",
    appId: "1:445524735501:web:fb6df1b9bae6f44318c744"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file) {
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    let url = await getDownloadURL(storageRef)
    return url

}