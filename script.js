let text = document.getElementById('text');
let section = document.querySelector('section');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let sectionOffset = section.offsetTop;

    if (value + text.clientHeight < sectionOffset + 1000) {
        text.style.marginTop = value * 2.5 + 'px';
    } else {
        text.style.marginTop = (sectionOffset - text.clientHeight + 1000) + 'px';
    }
});
