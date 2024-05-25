

window.addEventListener('scroll', () => {
  const logo = document.getElementById('logo');
  if (window.scrollY > 50) {
      logo.classList.add('scrolled');
  } else {
      logo.classList.remove('scrolled');
  }
});
window.addEventListener('scroll', () => {
const nav2 = document.getElementById('nav2');
if (window.scrollY > 50) {
    nav2.classList.add('scrolled');
} else {
    nav2.classList.remove('scrolled');
}
});


        window.onload = function() {
            // Make a GET request to home.html
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'navbar.html', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // If request is successful, extract content and insert it into the about.html
                    var data = xhr.responseText;
                    document.getElementById('homeContent').innerHTML = data;
                }
            };
            xhr.send();
        };
      
       
       
