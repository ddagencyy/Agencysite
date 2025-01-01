document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
    const videos = [
        { id: 1, title: "AI SAAS Project", thumbnail: "Assets/AI project.mp4" },
        { id: 2, title: "Real Estate Project", thumbnail: "Assets/real estate.mp4" },
        { id: 3, title: "Doctor Appoinment Project", thumbnail: "Assets/Doctor project.mp4" },
        { id: 4, title: "Bar Project", thumbnail: "Assets/bar project.mp4" }
    ];

    const videoContainer = document.querySelector('.video-container');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function renderVideos() {
        videoContainer.innerHTML = videos.map(video => `
            <div class="video-item">              
                <video autoplay muted loop src="${video.thumbnail}" type="video.mp4" label="${video.title}"></video>
                <div class="overlay">
                    <h3>${video.title}</h3>
                </div>
            </div>
        `).join('');
    }

    function showVideo(index) {
        videoContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextVideo() {
        currentIndex = (currentIndex + 1) % videos.length;
        showVideo(currentIndex);
    }

    function prevVideo() {
        currentIndex = (currentIndex - 1 + videos.length) % videos.length;
        showVideo(currentIndex);
    }

    renderVideos();
    showVideo(currentIndex);

    nextButton.addEventListener('click', nextVideo);
    prevButton.addEventListener('click', prevVideo);


    // Testimonials
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO",
            company: "TechStart Inc",
            content: "AMC transformed our digital presence completely. Their attention to detail and innovative solutions exceeded our expectations.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Product Manager",
            company: "InnovateCo",
            content: "Working with AMC was a game-changer for our product launch. Their expertise in both design and development is unmatched.",
            rating: 5
        },
        {
            name: "Emma Williams",
            role: "Marketing Director",
            company: "GrowthBox",
            content: "The team at AMC delivered our project on time and with exceptional quality. They're now our go-to development partner.",
            rating: 4
        }
    ];

    const testimonialsGrid = document.querySelector('.testimonials-grid');

    function renderTestimonials() {
        testimonialsGrid.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <div class="star-rating">
                    ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
                </div>
                <div class="testimonial-content">
                    "${testimonial.content}"
                </div>
                <div class="testimonial-author">
                    <img src="https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}" alt="${testimonial.name}">
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role} at ${testimonial.company}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderTestimonials();

  });


  AOS.init({
    // Global settings:
    duration: 1000,
    offset: 110,
  });
  
      
      