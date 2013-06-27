        // JQuery plugin 
        (function($) {
            $.fn.commentSystem = function() {                  
                createContainer();
                createLink();              
                $(".container").on("click",".link",function(e){
				    // Create a new form (commenting form) 
                    var newform = $("<div class='Form'> \
                            <div class='row'>\
                                Name  \
                            </div> \
                            <div class='row'> \
                                <input type='text' id='name'> \
                            </div> \
                            <div class='row'> \
                                Email \
                            </div> \
                            <div class='row'> \
                                <input type='text' id='email'> \
                            </div> \ 
                            <div class='row'> \
                                Website  \
                            </div> \
                            <div class='row'> \
                                <input type='text' id='website'> \
                            </div> \
                            <div class='row'> \
                                Comments \
                            </div> \
                            <div class='row'> \
                                <textarea id='comments' rows='10' cols='30'></textarea> \
                            </div> \
                            <div class='row'> \
                                <button class='btnPostButton'> Post Comment  </button> \
                            </div>                \
                        </div>                \
                        <div class='comment row comments'> \
                        </div>            \
                        <div class='comment row clink'> \
                            <a href='#'>Reply</a> \
                        </div>");                  
                newform.insertAfter(e.currentTarget);                    
                $(".clink").remove();  // Remove the link that appears below the form (Not required)
                onPostButtonClick(); // When the user submits the form
                });                     
            }
            
            
            
        // Create container to hold all the elements
        function createContainer(){
            $("body").append("<div class='container'></div>");
        }
        
         
            
            
        // This function will hide the form
        function hideForm(){
            $(".Form").hide();
        }
        
    
        
        // This function will create the link at run-time
        function createLink(){   
            $(".container").append("<div class='link row comment'><a href='#'>Reply</a></div>");    
        }  
        
        
        // This function will execute, when the 'post button' button is clicked
        function onPostButtonClick(){
            $(".btnPostButton").click(function(){
                var comment = $("#comments").val();
                hideForm();
                displayComments(comment); // Pass the comment to the 'displayComments' function
            });
        }
        
        // This function will display the comments
        function displayComments(comment){   
            var newcomment = $("<div class='comment row comments'></div>"); // This will hold the comment
            newcomment.text(comment);    // Append the comment
            $(".link").append(newcomment); // Display the comment
            var newlink = $("<div class='comment row commentlink'><a href='#'>Reply</a></div>"); // This will create a reply link below the comment
            newcomment.after(newlink);      // Display the link
        }
        }(jQuery));