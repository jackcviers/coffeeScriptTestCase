require ('underscore')
require ('Backbone')

window.$(
        ()->
                $=window.$
                _=window._
                Backbone = window.Backbone
                logMessageToDetail = (msg) -> $('p#detail').html( $( 'p#detail' ).html() + '<p>'+msg+'</p>')

                logMessageToDetail 'Testing jQuery existence succeeded.'
                logMessageToDetail 'Testing underscore existence:'
                _.each( [ 'a', 'b', 'c', 1, 2, 3 ], ((item)->logMessageToDetail item), @)
                logMessageToDetail 'Testing underscore existence succeeded.'
                logMessageToDetail 'Testing Backbone existence:'
                $( 'p#detail').html( $( 'p#detail').html() + '<article id="myView"></article>')
                view = new Backbone.View( el:$ ('article#myView') );

                logMessageToDetail 'Testing Backbone succeeded.'

                view.render()
)