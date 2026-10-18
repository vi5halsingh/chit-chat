import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null,path.join(import.meta.dirname,'../../public/uploads'))
    },

    filename : (req, file, cb) => {
        cb(null, `${file.originalname}-${Date.now()}`);
    },
    
})


const fileFilter =  (req, file, cb)=> {
    const imageFIleSize = 2 * 1024 * 1024;
    const pdfFIleSize = 10 * 1024 * 1024

    const approxContentLength = parseInt(req.headers['content-length'])
    if(file.mimetype === 'image/avif' || file.mimetype === 'image/webp'){
        if(approxContentLength > imageFIleSize){
           return cb(new Error("file size must be under 2 MB", false))
        }
        cb(null, true)
    }


    else  if(file.mimetype === 'application/pdf'){
        if(approxContentLength > pdfFIleSize){
            return cb(new Error("file size must be under 10 MB", false))
        }
        cb(null, true)
    }

    else{
         cb(new Error("Unsupported file type"), false)
    }

}

const upload = multer(
    {storage : storage,
    fileFilter : fileFilter
    }
)

export default upload 