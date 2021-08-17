// sanity test
//console.log("peanut butter and jelly")

class cookiePictures
{
    // constructor function for the ENTIRE project.

    clicks = 0; //amount of clicks
    timeShown = 0; // amount of times of image

    // Initial constructor (Must be named CONSTUCTOR)
    constructor (name , imageSrc)
    {
        this.name = name; // image name
        this.imageSrc = imageSrc; // the source to the image
    };
}

//my variables
let leftImageOnThePage = null;
let middleImageOnThePage = null;
let rightImageOnThePage = null;
let totalClicks = 0;
const MAX_CLICKS_ALLOWED = 15;

//pictures
let AllcookiePictures = 
{
    new: busmallPictures('white-chocolate-macadamia-nut-cookies', './pictures/white-chocolate-macadamia-nut-cookies.jpg'),
    new: busmallPictures('Snickerdoodle-Cookie-Recipe', './pictures/Snickerdoodle-Cookie-Recipe.jpg '),
    new: busmallPictures('Chocolate_Chip_Cookie', './pictures/Chocolate_Chip_Cookie.jpg'),
};