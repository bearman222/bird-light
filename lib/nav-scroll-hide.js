document.addEventListener("DOMContentLoaded", function () {
    const el_autohide = document.querySelector('.autohide');

    /* // add padding-top to body (if necessary) */
    var navbar_height = document.querySelector('.navbar').offsetHeight;
    var scroll_elem = document.getElementById('scroll-view');
    scroll_elem.style.paddingTop = navbar_height + 'px';

    if (el_autohide) {
        let last_scroll_top = 0;
        function handleScroll() {
            let scroll_top = scroll_elem.scrollTop;
            if (scroll_top === 0) {
                console.log('thats the top');
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            } else if (scroll_top < last_scroll_top) {
                // console.log('scrolled up');
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            } else {
                // console.log('scrolled down');
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
        }

        function debounce(method, delay) {
            clearTimeout(method._tId);
            method._tId = setTimeout(function () {
                method();
            }, delay);
        }

        scroll_elem.addEventListener('scroll', function () {
            debounce(handleScroll, 200);
        });
    }
});
