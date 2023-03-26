let userLeft = true;
let userWatchCatMeme = false;

const watchTutorialCallBack = new Promise((resolve, reject) => {
    if (userLeft) {
        reject({
                name: "User Left",
                message: ":("
            });
    } else if (userWatchCatMeme) {
        reject({
            name: "User Watching Cat Meme",
            message: "WebDevSimplified < Cat"
        });
    } else {
        resolve("Thumbs up and Subscribe");
    }
});

watchTutorialCallBack.then(message => {
    console.log(`Sucess ${message}`);
}).catch(error => {
    console.log(`${error.name} \n ${error.message}`);
})