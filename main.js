//sanity test
// console.log("unicorns");

class cookiePictures 
{
    clicks = 0; 
    timesShown = 0; 
  
    constructor(
      nameofPicture,
      imageSrc 
    ) {
      this.nameofPicture = nameofPicture;
      this.imageSrc = imageSrc;
    }
  };
  
  let allcookiePics =
  [
    new cookiePictures("white-chocolate-macadamia-nut-cookies", "./pictures/white-chocolate-macadamia-nut-cookies.jpg"),
    new cookiePictures("Snickerdoodle-Cookie", "./pictures/Snickerdoodle-Cookie-Recipe.jpg"),
    new cookiePictures("Chocolate_Chip_Cookie", "./pictures/Chocolate_Chip_Cookie.jpg"),
    new cookiePictures("Fortune-Cookies", "./pictures/Fortune-Cookies.jpg"),
    new cookiePictures("Gingerbread-Cookie", "./pictures/Gingerbread-Cookie.jpg"),
    new cookiePictures("Macaron-Cookies", "./pictures/Macaron-Cookies.jpg"),
    new cookiePictures("Oatmeal-Raisin-Cookies", "./pictures/Oatmeal-Raisin-Cookies.jpg"),
    new cookiePictures("Shortbread-Cookies", "./pictures/Shortbread-Cookies.jpg")
  ];

//console.log(allcookiePics); // Sanity test to figure out if the objects show up on the console.
  
  //variables
  let leftcookiePic = null; //What image would appear on the left.
  let middlecookiePic = null; // What image will appear in the middle.
  let rightcookiePic = null; // what image would appear on the right
  let totalClicks = 0; //total amount of clicks
  const MAX_CLICKS = 10; // amount of clicks allowed
  

  // Setting up all of our elements in the DOM to manipulate them
  const cookietrain_header = document.getElementById("cookietrain-header");
  const cookietrain_section = document.getElementById("cookietrain-section");
  
  //LEFT BUSMALL IMAGE AND TEXT
  const LEFT_COOKIE_IMAGE = document.getElementById("left-cookie-img");
  const LEFT_COOKIE_TEXT = document.getElementById("left-cookie-text");
  
  //MIDDLE BUSMALL IMAGE AND TEXT
  const MIDDLE_COOKIE_IMAGE = document.getElementById("middle-cookie-img");
  const MIDDLE_COOKIE_TEXT = document.getElementById("middle-cookie-text");
  
  //RIGHT BUSMALL IMAGE AND TEXT
  const RIGHT_COOKIE_IMAGE = document.getElementById("right-cookie-img");
  const RIGHT_COOKIE_TEXT = document.getElementById("right-cookie-text");
  
  //will display our final scores in the browser
  const FINAL_SCORE = document.getElementById("finalScores");
  
  // create our button in the JAVASCRIPT because we don't want it to show up right now
  const RESULTS_BUTTON = document.createElement("button");
  RESULTS_BUTTON.className = "btn btn-primary";
  RESULTS_BUTTON.innerText = "Click me to see results";

  const ADD_BUTTON = document.createElement("button");
  ADD_BUTTON.className = "btn btn-primary";
  ADD_BUTTON.innerText = "Add here";
   
  let randomPhotoClick = function () 
  { 
    let randomPhotoLeft = Math.floor(Math.random() * allcookiePics.length); // generates a random photo on the left side of the page
    let randomPhotoMiddle = Math.floor(Math.random() * allcookiePics.length); // generates a random photo in the middle of the page
    let randomPhotoRight = Math.floor(Math.random() * allcookiePics.length); // generates a random photo on the right side of the page
  
  for (i = 0; i < MAX_CLICKS; i++) //We want to randomize between 0 to the given clicks
  {
    if(randomPhotoLeft === randomPhotoMiddle)
    {
     randomPhotoMiddle = Math.floor(Math.random() * allcookiePics.length); // middle is set to another random pic
  
    }
    
    
      else if (randomPhotoRight === randomPhotoLeft)
      {
        randomPhotoLeft = Math.floor(Math.random() * allcookiePics.length); // left is set to another random pic
      }
      
      else if (randomPhotoMiddle === randomPhotoRight)
      {
        randomPhotoRight = Math.floor(Math.random() * allcookiePics.length); // right is set to another random pic
      }
    
  }
  
    // Update left cookie picutres to show up in DOM. the random photo is generated inside of the square brackets
    LEFT_COOKIE_IMAGE.src = allcookiePics[randomPhotoLeft].imageSrc;
    LEFT_COOKIE_TEXT.innerText = allcookiePics[randomPhotoLeft].nameofPicture;
  
    // Update Middle cookie picutres to show up in DOM. the random photo is generated inside of the square brackets
    MIDDLE_COOKIE_IMAGE.src = allcookiePics[randomPhotoMiddle].imageSrc;
    MIDDLE_COOKIE_TEXT.innerText = allcookiePics[randomPhotoMiddle].nameofPicture;
  
    // Update Right cookie picutres to show up in DOM. the random photo is generated inside of the square brackets
    RIGHT_COOKIE_IMAGE.src = allcookiePics[randomPhotoRight].imageSrc;
    RIGHT_COOKIE_TEXT.innerText = allcookiePics[randomPhotoRight].nameofPicture;
  
    // We store our cookie pics inside of our variables!!
    leftcookiePic = allcookiePics[randomPhotoLeft];
    middlecookiePic = allcookiePics[randomPhotoMiddle];
    rightcookiePic = allcookiePics[randomPhotoRight];
  
   
  };
  
  const handleClickOnPicture = function (evt)
  {
    // a function is stored inside of a variable we use to handle the picture clicked
    console.log(`You clicked this target element id ${evt.target.id}`);
    // if they can still click, do clicky things
    if (totalClicks < MAX_CLICKS) {
      // condition to check if the total clicks the user generates is less than the amount WE SPECIFY.
  
      const thingWeClickedOn = evt.target; //.notation;
      const id = thingWeClickedOn.id; // to check what we have clicked! it checks the 'ID' of each PICTURE!
  
      // Mark that they were shown
      leftcookiePic.timesShown++; //increments the amount of times it has been clicked on the page!
      middlecookiePic.timesShown++; //increments the amount of times it has been clicked on the page!
      rightcookiePic.timesShown++; //increments the amount of times it has been clicked on the page!
  
      //console log to check if the numbers are incrementing each time we click:
  
      console.log
      (
        `Left pic ${leftcookiePic.nameofPicture} has been shown ${leftcookiePic.timesShown}, 
        middle pic ${middlecookiePic.nameofPicture} has been shown ${middlecookiePic.timesShown}, 
        and the right pic ${rightcookiePic.nameofPicture} has been shown ${rightcookiePic.timesShown} so far.`
      );
  
      // Check which was clicked and update counter
      if (
        id === "left-cookie-img" ||
        id === "right-cookie-img" ||
        id === "middle-cookie-img"
      ) {
        //track the pictures from the ids we recieved from the DOM.
  
        if (id === "left-cookie-img") {
          // clicked on the left image
          leftcookiePic.clicks++; // adds to the amount of clicks!
          console.log(
            `Left pic ${leftcookiePic.nameofPicture} has ${leftcookiePic.clicks} so far`
          );
        }
  
        if (id === "middle-cookie-img") {
          // clicked on the middle image
          middlecookiePic.clicks++; //adds to the amount of clicks!
          console.log(
            `Middle pic ${middlecookiePic.nameofPicture} has ${middlecookiePic.clicks} so far`
          );
        }
  
        if (id === "right-cookie-img") {
          // clicked on the right image
          rightcookiePic.clicks++; //adds to the amount of clicks!
          console.log(
            `Right pic ${rightcookiePic.nameofPicture} has ${rightcookiePic.clicks} so far`
          );
        }
  
        //after we update the old, pick new pictures to reset!
      }
      randomPhotoClick();
    }
  
    // increments amount of total clicks in all.
    totalClicks++;
    //when they reach total max clicks, remove the click function
    if (totalClicks === MAX_CLICKS) {
      COOKIETRAIN_SECTION.removeEventListener("click", handleClickOnPicture); // stops the user from clicking any more pictures in the section.
      console.log("You picked 5 pictures, thanks!"); //sanity test to check if the max amount of clicks is documented
  
      // button to click to show results
      // button appears in if statement
      COOKIETRAIN_SECTION.appendChild(RESULTS_BUTTON); // make the button appear in our DOM.
      RESULTS_BUTTON.addEventListener("click", finalResultsTotal); // Wrap the total results in a function and use an addevent listener to call the button!
      function finalResultsTotal() {
        makeAChart(); // call the function make a chart
        updateLocalData();
  
        // display the clicks to the page
        for (let index = 0; index < allcookiePics.length; index++) {
          //for loop to go through all of the pictures to see what was clicked
          // Probably can do this on one line with dot notation/nesting
          let newLiScore = document.createElement("li");
          newLiScore.className = "list-group-item"
          newLiScore.innerText = `${allcookiePics[index].nameofPicture}: ${allcookiePics[index].clicks}`; // the name of the pic, and how many times it was clicked
          FINAL_SCORE.appendChild(newLiScore); // Add score
        }
      }
    }
  };
  
  //creating charts and arrays
  
  function makeAChart()
  {

    let storeTheNamesArray = [];
    let storeTheTotalsArray = []; // empty array because we will push all the totals inside of this.
    let timesShownArray = [];
  
    for (i = 0; i < allcookiePics.length; i++) 
    {
      
      storeTheTotalsArray.push(allBusmallPics[i].clicks); 
      storeTheNamesArray.push(allBusmallPics[i].nameofPicture); 
      timesShownArray.push(allBusmallPics[i].timesShown); 
    }
  
    console.log(storeTheNamesArray); //debugging
    console.log(storeTheTotalsArray); //debugging
    console.log(timesShownArray); //debugging
    
    //creating a bar chart
    const labelsForChart = storeTheNamesArray;
    const data = 
    {
      labels: labelsForChart, 
      datasets:
      [
        {
          label: "Clicks", 
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: storeTheTotalsArray, 
        
          label: "Times Image Is Shown", 
          backgroundColor: "#99FF99",
          borderColor: "#99FF99",
          data: timesShownArray, 
        },
      ],
    };
  
    const configTheData = {
      type: "bar",
      data,
      options: {},
    };
  
    //   POE:
    let mycookieChart = new Chart( 
      document.getElementById("myChart"),
      configTheData
    );
  
  };
  
 // COOKIETRAIN_SECTION.addEventListener("click", handleClickOnPicture); 
 // randomPhotoClick(); 
  
  //JSON AND LOCAL STORAGE FUNCTION
  
  function updateLocalData() 
  { 
    const arrayString = JSON.stringify(allcookiePics); 
    //  console.log(`${arrayString}`) //debugging works. shows up in console.
    
    localStorage.setItem("allproducts", arrayString); 
  }
  
  function getLocalStorage() 
  {
   
    const oldData = localStorage.getItem("allproducts");
  
    // console.log(` old data is ${oldData}`); // debugger works
  
    const allProductData = JSON.parse(oldData);
  
   
    if (allProductData !== null) {
      allcookiePics = allProductData;
    } else {
      console.log("Local Storage ready...");
    }
  }
  
  getLocalStorage(); 
  