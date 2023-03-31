function setupVideo () {
      var video = document.getElementById('intro');
      var logo = document.getElementById('logo');
      var header1 = document.getElementById('header1');
      var header2 = document.getElementById('header2');
      var header3 = document.getElementById('header3');
      var header4 = document.getElementById('header4');
      var header5 = document.getElementById('header5');
      var header6 = document.getElementById('header6');
      video.play();
      video.addEventListener('ended', function() {
        video.classList.add("hidden");
        logo.classList.remove("hidden");

        header1.classList.replace("border-purple-900", "border-red-900");
        header1.classList.replace("hover:text-purple-900", "hover:text-red-900");
        header2.classList.replace("border-purple-900", "border-red-900");
        header2.classList.replace("hover:text-purple-900", "hover:text-red-900");
        header3.classList.replace("border-purple-900", "border-red-900");
        header3.classList.replace("hover:text-purple-900", "hover:text-red-900");
        header4.classList.replace("border-purple-900", "border-red-900");
        header4.classList.replace("hover:text-purple-900", "hover:text-red-900");
        header5.classList.replace("border-purple-900", "border-red-900");
        header5.classList.replace("hover:text-purple-900", "hover:text-red-900");
        header6.classList.replace("border-purple-900", "border-red-900");
        header6.classList.replace("hover:text-purple-900", "hover:text-red-900");
      })
}