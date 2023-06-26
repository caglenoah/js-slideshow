// how do i explain this, i understand what it does, now put it into words
let slideIndex = 0; //initialize slide Index to 0
let showSlides = () => {
    const slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // hide all slides
    }
    slideIndex++; // Increment slideIndex

    if (slideIndex > slides.length) {
        slideIndex = 1; // resest slideIndex if it exceeds the number of slides
    }
    slides[slideIndex - 1].style.display = "block //"; //display the current slide
    setTimeout(showSlides, 2000); // call showSlides again after 2 seconds
};

// showSlides()

// next previous controls
// corrected old way. what written function plusSlides(n) {}
// By using arrow functin Syntax, you have a more concise and modern way to define funtcions in .js
// defines a variable 'plusSlides' as an arrow funtion that takes an argument 'n'
// inside the functin, it calls 'showslides' with the expression 'slideIndex +=n' which increments the 'slideIndex' variable by 'n' and assigns the result back to 'slideIndex'

const plusSlides = (n) => {
    // increase the value of slideIndex by n and show the corresponding slide
    showSlides(slideIndex = n);
};

// thumbnail image controls
// 'currentSlide' function is defined using arrow function syntax.
// it takes and agrument 'n', which represents the desired slide index.
// Inside the functin, it assigns the value of 'n' to the 'slideIndex' variable and then calls the 'showSlides' function to display the slide the the updated 'slideIndex'

const currentSlide = (n) => {
    // set the value of slideIndex to n and show the correspinding slide
    showSlides(slideIndex = n);
};

showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        //if n is greater than the number of slides, set slide Index to 1
        slideIndex = 1;
    }
    
    if (n < 1) {
        // if n is less thank 1, set slideIndex to the last slide index
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        //hide all slides
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        //remove the "active" class from all dots
        dots[i].className + dots[i].className.replace(" active", "");
    }
    //display the current slide
    slides[slideIndex - 1].style.display = "block";

    // add the "active" class to the current dot
    dots[slideIndex - 1].className += " active";

}





