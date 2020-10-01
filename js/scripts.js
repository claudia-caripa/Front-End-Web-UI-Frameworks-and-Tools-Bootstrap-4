$(document).ready(function(){
    //JavaScript to pause and play carousel
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }

    });

    //JavaScript using the modal methods to toggle the showing and hiding of the modals
    $('#reserveButton').click(function(){
        $('#reservationModal').modal('toggle');
    });

    $('#loginLink').click(function(){
        $('#loginModal').modal('toggle');
    });
});