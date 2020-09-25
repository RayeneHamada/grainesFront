const counters = document.querySelectorAll('.chiffres');
const speed = 20;
const container = document.querySelector('.quelqueChiffres .container');

const Start = () => {

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 50);
            } else {
                count.innerText = target;
            }
        }
        updateCount();
    })
    container.removeEventListener('mouseover', Start)
}
// container.addEventListener('click')
container.addEventListener("mouseover", Start)