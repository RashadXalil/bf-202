// console.log($("h3"))
// console.log($(".list li"))
// console.log($("#item"))
// $("h3").css("color", "red")
// $("#btn").on("click", function () {
//     $("h3").css({
//         fontSize: "50px",
//         color: "red",
//         backgroundColor: "black"
//     })
// })

// $("#btn").on("click", function () {
//     // $("#item").text("sagol")
// })
// $("#name").on("change", function (e) {
//     console.log($("#name").val())
// })


// $("#off").on("click", function () {
//     $("#screen").hide("slow")
//     $("#screen").css("backgroundColor", "orangeRed")

// })
// $("#on").on("click", function () {
//     $("#screen").show("fast")
//     $("#screen").css("backgroundColor", "black")
// })
// $("#toggle").on("click", function () {
//     $("#screen").toggle("fast")
// })

// $("#off").on("click", function () {
//     $("#screen").addClass("disable")
// })
// $("#on").on("click", function () {
//     $("#screen").removeClass("disable")
// })
// $("#toggle").on("click", function () {
// $("#screen").toggleClass("disable")
// })

// $("#on").on("click", function () {
//     $("#screen").fadeIn()
// })
// $("#off").on("click", function () {
//     $("#screen").fadeOut()
// })
// $("#off").on("click", function () {
//     $("#screen").slideUp()
// })
// $("#on").on("click", function () {
//     $("#screen").slideDown(2000, function () {
//         alert("animation bitdi")
//     })
// })
// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 5
//         }
//     }
// })
// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 5
//         }
//     }
// })
let counter = 0
$("#plus").on("click", function () {
    counter++
    $("#div").text(counter)
})
$("#minus").on("click", function () {
    counter--
    $("#div").text(counter)
})
$("#Reset").on("click", function () {
    $("#div").text(counter = 0)
})