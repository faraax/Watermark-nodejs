const Jimp = require('jimp');

let filesName = [
    'City of Baker.JPG',
    'Democracy prep  logo_SEW.jpg',
    'EBR 2.jpg',
    'EBR.jpg',
    'GEO NEXT GENERATION .JPG',
    'geo prep academy June 2021_Sew.jpg',
    'GEO PREP BAKER.JPG',
    'Geo Prep Mid City logo8_Sew.jpg',
    'Glen Oaks Middle .jpg',
    'Inspire Academy Logo_Sew.jpg',
    'logo capitol.JPG',
    'Madison Prep logo_Sew.jpg',
    'Martin Luther King SaSew75869.JPG',
    'Scotlandville high logo3_sew.JPG',
    'South baton rouge_sew.jpg',
    'steam logo MASK_sEW.JPG',
    'Tara High logo 4_Sew.JPG',
    'Thrive Logo_SEW.jpg',
    'W LOGO 2_Sew.JPG',
    'WhatsApp Image 2023-06-09 at 3.25.43 PM (1).jpeg',
    'WhatsApp Image 2023-06-09 at 3.25.43 PM (2).jpeg',
    'WhatsApp Image 2023-06-09 at 3.25.43 PM.jpeg',
    'WhatsApp Image 2023-06-18 at 9.46.06 PM (2).jpeg',
    'WhatsApp Image 2023-06-18 at 9.46.06 PM.jpeg',
    'WhatsApp Image 2023-07-02 at 7.43.33 PM.jpeg',
    'WhatsApp Image 2023-07-02 at 8.57.52 PM (1).jpeg',
    'WhatsApp Image 2023-07-02 at 8.57.52 PM.jpeg'
]

for (fileName of filesName) {
    // Path to the input image
    const imagePath = `../${fileName}`;

    // Path to the output image (with watermark)
    const outputImagePath = `./${fileName}`;

    // Path to the watermark image
    const watermarkPath = '../google.png';
    // Load the input image
    Jimp.read(imagePath)
        .then(image => {
            // Load the watermark image
            return Jimp.read(watermarkPath)
                .then(watermark => {
                    // Resize the watermark image to a suitable size
                    watermark.resize(image.bitmap.width / 2, Jimp.AUTO);

                    // Add the watermark to the bottom right corner of the image
                    const x = Math.floor((image.bitmap.width - watermark.bitmap.width) / 2);
                    const y = Math.floor((image.bitmap.height - watermark.bitmap.height) / 2);
                    image.composite(watermark, x, y, {
                        mode: Jimp.BLEND_SCREEN,
                        opacitySource: 1
                    });

                    // Save the image with watermark
                    image.write(outputImagePath, () => {
                        console.log(`${fileName}'s Watermark added successfully!`);
                    });
                });
        })
        .catch(err => {
            console.error('Error:', err);
        });
}


// const fs = require('fs');

// Path to the folder
// const folderPath = '../';

// fs.readdir(folderPath, (err, files) => {
//     if (err) {
//         console.error('Error:', err);
//         return;
//     }

//     const imageExtensions = ['.jpg', '.jpeg', '.JPG'];
//     let filesNames = files.map((file, i) => {
//         let ext = file.slice(file.lastIndexOf('.')).toLowerCase()
//         if (imageExtensions.includes(ext)) {
//             return files[i]
//         }
//     })
//     // files.forEach(file => filesName.push(file))
//     // return filesName = filesNames
//     console.log(filesNames);
// });

// console.log(filesName);