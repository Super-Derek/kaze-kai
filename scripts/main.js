//console.log('main.js loaded');

//Video playback error catch
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('dojoVideo');
    video.play().catch(function(error) {
      console.log("Video playback failed:", error);
    });


    console.log('Event listeners set up for hamburger menu');
});
  
//Form submission handling
const form = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmationMessage');
  
form.addEventListener('submit', function(event) {
    console.log('Form Submitted');
    event.preventDefault(); // Prevent the form from actually submitting
  
    //Simulated. Form will not actually submit
    setTimeout(function() {
        //Hide the form
        form.style.display = 'none';
        
        // how the confirmation message
        confirmationMessage.style.display = 'block'; 
        
        //Reset the form fields
        form.reset();
        
        //Hide the message and show the form again after a delay
        setTimeout(function() {
          confirmationMessage.style.display = 'none';
          form.style.display = 'block';
        }, 5000); //Hide after 5 seconds
      }, 1000); //Simulated delay for "sending" the message
});


//Function for smooth scrolling when using nav page links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const headerHeight = document.querySelector('header').offsetHeight;

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});

//Function for cta buttons to scroll page to the sign-up form
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.scroll-to-form');
    const header = document.querySelector('header');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const contactForm = document.getElementById('contact-form');
            const headerHeight = header.offsetHeight;
            const contactFormPosition = contactForm.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: contactFormPosition,
                behavior: 'smooth'
            });
        });
    });
});

//Testimonial slider carousel setup
document.addEventListener('DOMContentLoaded', function() {
    //console.log("Testimonial script loaded");
    const testimonials = [
        {
            name: "Tom, 52",
            content: "After years of neglecting my health, Kaze-Kai has been a lifesaver. The instructors tailored the training to my fitness level, and I've seen remarkable improvements in my strength and flexibility. The multigenerational aspect is amazing - training alongside people of all ages has given me a new perspective on fitness and community.",
            image: "images/testimonial_tom.jpg"
        },
        {
            name: "Aisha, 28",
            content: "What I love most about Kaze-Kai is how it's influenced my life beyond the dojo. I joined to set an example for my students about perseverance and self-improvement, and now I see them applying these principles in class. The karate community here extends beyond training - we often get together for events and volunteer work in the area.",
            image: "images/testimonial_aisha.jpg"
        },
        {
            name: "Jake, 17",
            content: "Kaze-Kai has transformed my high school experience. The discipline I've learned here improved my grades and boosted my confidence. Sensei Goral's wisdom goes beyond karate - he teaches life lessons that stick with you. The older students are great role models, always encouraging me to push my limits. It feels like a second family here.",
            image: "images/testimonial_jake.jpg"
        },
        {
            name: "Lisa, 39",
            content: "I was nervous about starting martial arts in my 30s, but Kaze-Kai made me feel welcome from day one. The instructors break down complex moves, making learning fun and achievable. The breathing techniques I've learned have even helped me stay calm during stressful situations at work.",
            image: "images/testimonial_lisa.jpg"
        }
    ];

    let currentIndex = 0;
    const intervalTime = 5000; // 5 seconds

    const testimonialPhoto = document.getElementById('testimonial-photo');
    const testimonialName = document.getElementById('testimonial-name');
    const testimonialContent = document.getElementById('testimonial-content');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    /*
    console.log("Photo:", testimonialPhoto);
    console.log("Name:", testimonialName);
    console.log("Content:", testimonialContent);
    console.log("Left Arrow:", leftArrow);
    console.log("Right Arrow:", rightArrow);
    */

    function updateTestimonial(index) {
        const testimonial = testimonials[index];
        //console.log("Updating testimonial to:", testimonial);
            // Fade out current content
        testimonialPhoto.style.opacity = 0;
        testimonialName.style.opacity = 0;
        testimonialContent.style.opacity = 0;
    
        // Wait for fade out to complete before updating content
        setTimeout(() => {
            //Update content
            testimonialPhoto.src = testimonial.image;
            testimonialName.textContent = testimonial.name;
            testimonialContent.textContent = testimonial.content;
            //console.log("Update complete");
            // Trigger reflow to ensure new content is rendered before fading in
            testimonialPhoto.offsetHeight;
            testimonialName.offsetHeight;
            testimonialContent.offsetHeight;
            
            // Fade in new content
            testimonialPhoto.style.opacity = 1;
            testimonialName.style.opacity = 1;
            testimonialContent.style.opacity = 1;
        }, 500); // This should match the transition duration in CSS
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentIndex);
    }

    // Set up auto-scrolling
    let intervalId = setInterval(nextTestimonial, intervalTime);

    // Add click events for manual navigation
    rightArrow.addEventListener('click', () => {
        console.log("Right arrow clicked");
        clearInterval(intervalId);
        nextTestimonial();
        intervalId = setInterval(nextTestimonial, intervalTime);
    });

    leftArrow.addEventListener('click', () => {
        console.log("Left arrow clicked");
        clearInterval(intervalId);
        prevTestimonial();
        intervalId = setInterval(nextTestimonial, intervalTime);
    });
});

/*Hamburger Menu Functionality*/
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    console.log('Hamburger:', hamburger);
    console.log('Nav Links:', navLinks);

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            console.log('Hamburger clicked');
            navLinks.classList.toggle('active');
            console.log('Nav Links classes:', navLinks.classList);
        });
    } else {
        console.error('Hamburger or Nav Links not found');
    }
});

//Theme toggle function
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    const body = document.body;

    //Sets initial theme
    body.classList.add('light');

    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('light')) {
            //Switch to dark theme
            body.classList.replace('light', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            //Switch to light theme
            body.classList.replace('dark', 'light');
            icon.classList.replace('fa-sun', 'fa-moon');
        }

        //Updates the toggle button colors
        updateToggleColors();
    });
    //Function to swap theme toggle icon colors
    function updateToggleColors() {
        const computedStyle = getComputedStyle(body);
        themeToggle.style.backgroundColor = computedStyle.getPropertyValue('--secondary-color').trim();
        icon.style.color = computedStyle.getPropertyValue('--main-color').trim();
    }

    //Initial color setup
    updateToggleColors();
});

