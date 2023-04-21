const slides = [{
        id: 1,
        image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
        title: "Lorem Ipsum",
        isActive: true
    }, {
        id: 2,
        image: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
        title: "Lorem Ipsum",
        isActive: false
    },
    {
        id: 3,
        image: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
        title: "Lorem Ipsum",
        isActive: false
    },
    {
        id: 4,
        image: "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
        title: "Lorem"
    }
]
let id = 5;
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const sliderImage = document.getElementById("slider_image")
const sliderTitle = document.getElementById("slider__title")
const submitBtn = document.getElementById("btn")
const fileInp = document.getElementById("sliderItems")
render()

next.onclick = function (e) {
    let activeSlider = slides.find(slide => slide.isActive == true)
    activeSlider.isActive = false
    let indexOfActiveSlider = slides.indexOf(activeSlider)
    let nextSlide
    if (indexOfActiveSlider == slides.length - 1) {
        nextSlide = slides[0]
    } else {
        nextSlide = slides[indexOfActiveSlider + 1]
    }
    nextSlide.isActive = true
    sliderImage.src = nextSlide.image
    sliderTitle.innerHTML = nextSlide.title
}

function render() {
    let target = slides.find(slide => slide.isActive == true)
    sliderImage.src = target.image
    sliderTitle.innerHTML = target.title
}

prev.onclick = function (e) {
    let activeSlider = slides.find(slide => slide.isActive == true)
    activeSlider.isActive = false
    let indexOfActiveSlider = slides.indexOf(activeSlider)
    let prevSlide
    if (indexOfActiveSlider == 0) {
        prevSlide = slides[slides.length - 1]
    } else {
        prevSlide = slides[indexOfActiveSlider - 1]
    }
    prevSlide.isActive = true
    sliderImage.src = prevSlide.image
    sliderTitle.innerHTML = prevSlide.title
}

function addSlide(image, title) {
    let newSlide = {
        id: id,
        image: image,
        title: title,
        isActive: false
    }
    slides.push(newSlide)
}
btn.addEventListener("click", function (e) {
    e.preventDefault()
    let image = prompt("image :")
    let text = prompt("text")
    addSlide(image, text)
    console.log(slides)
})