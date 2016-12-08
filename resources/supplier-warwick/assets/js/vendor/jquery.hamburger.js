
;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = 'hamburger',
        defaults = {
            propertyName: "value",
            label: "Navigation",
            speed: "fast",
            downArrow: "&darr;",
            labelAlign: "right"
        };

    // The actual plugin constructor
    function Hamburger( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    Hamburger.prototype.init = function () {
        var label, speed, downArrow, align;
        label = this.options.label;
        speed = this.options.speed;
        downArrow = this.options.downArrow;
        labelAlign = this.options.labelAlign;

        var filling, helper, bun;
        if(label !== ''){
            helper = '<div class="helper">' + label + '</div>';
        } else {
            helper = '';
        }
        bun = '<div class="bun"><span></span><span></span><span></span></div>';
        if(labelAlign == "left"){
            filling = helper + bun;
        }else{
            filling = bun + helper;
        }
        $(this.element).addClass('hamburger').prepend('<a class="burger" href="#">' + filling + '</a>').find('ul').hide();
        $('a.burger').on("click", function(event){
            event.preventDefault();
            $(this).parent().toggleClass('open');
            $(this).siblings('ul.nav').slideToggle(speed);
        });

        $.each( $('.hamburger ul.nav li'), function(){
            if( $(this).children('ul').length ){
                $(this).addClass('parent');
                $(this).prepend('<span class="dropper">' + downArrow + '</span>');
            }
        });

        $('.hamburger li.parent > .dropper').on("click", function(event){
            event.preventDefault();
            $(this).parent().toggleClass('open');
            $(this).siblings('ul').slideToggle(speed);
        });
    };

    // A really lightweight plugin wrapper around the constructor, 
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
                $.data(this, 'plugin_' + pluginName, 
                new Hamburger( this, options ));
        });
    }

})( jQuery, window, document );