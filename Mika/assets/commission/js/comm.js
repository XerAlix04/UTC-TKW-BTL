var check_email = /^\w+@\w{3,}\.com$/i; 

function commentForm(f)
{
    if(f.email.value.length == 0) {
        alert("Email must be not null");
        f.email.focus();
        return ;
    }
    if(check_email.test(f.email.value) == false) {
        alert("Email is not valid");
        f.email.focus();
        return;
    }
    if(f.com.value.length == 0 ) {
        alert("Comment must be not null");
        f.com.focus();
        return;
    }
    alert("Success"); 
}

window.addEventListener('scroll', function() {
    var element = document.querySelector('.comm-text');
    var opacity = 1 - window.scrollY / 10;
  
    element.style.opacity = opacity;
});
  