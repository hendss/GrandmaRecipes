/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  40 mins */
    $(document).on("click", ".uib_w_9", function(evt)
    {
       document.location.href="http://www.dominos.com"; 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
