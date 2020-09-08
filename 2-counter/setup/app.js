// set intitial
let count = 0;

// select value and button
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        console.log(styles);
        if (styles.contains('increase')) {
            count++;
        } else if (styles.contains('decrease')) {
            count--;
        } else {
            count = 0;
        }
        if (count > 0) {
            // go green
            value.style.color = 'green';
        }
        if (count < 0) {
            // go red
            value.style.color = 'red';
        }
        if (count === 0) {
            // go black
            value.style.color = '#222'
        }
        value.textContent = count;
    });
});