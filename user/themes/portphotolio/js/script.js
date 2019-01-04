// Floating label headings for the contact form
// $(function() {

// });

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    $('.tag[data-toggle="active"]').click(function(){
        var that = $(this);
        var tag = that.data('value');

        $('.tag[data-toggle="active"').each(function(){
            $(this).removeClass('active');
        });
        that.addClass('active');

        $(".content.category > div").each(function(){
            if($(this).data('tags').indexOf(tag) < 0){
                if(!$(this).hasClass('hidden')){
                    $(this).addClass('hidden');
                }
            }else{
                $(this).removeClass('hidden');
            }
        });
    });
});
