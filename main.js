// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
    const errorElement = document.getElementById('modal');
    // error.hidden = true;
    
    const likes = document.querySelectorAll('.like span');
    
    likes.forEach(like => {
      like.addEventListener('click', () => {
        if (like.textContent === EMPTY_HEART) {
          mimicServerCall()
          .then(json => {
            // like.setAttribute('class', 'activated-heart');
            // like.innerText = FULL_HEART

            changeAttributeForAnElement(like, 'activated-heart', FULL_HEART);
          })
          .catch(error => {
            // errorElement.setAttribute('class', "");
            // errorElement.innerText = `${error.message}`
            changeAttributeForAnElement(errorElement, '', error.message);

            setTimeout(() => {
              // errorElement.setAttribute('class', "hidden");
            changeAttributeForAnElement(errorElement, 'hidden', '');

            }, 5000);
            
          });
          
        } else {
          // like.setAttribute('class', '');
          // like.innerText = EMPTY_HEART
          changeAttributeForAnElement(like, '', EMPTY_HEART);

        }
      });
    })
  
    function changeAttributeForAnElement(element, className, text){
      element.setAttribute('class', className);
      element.innerText = text;
    }
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
