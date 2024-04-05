
let ratingNums = document.querySelectorAll('.rating-number span');
let rating;

function handleRatingClick(nums) {
    ratingNums.forEach((element) => {
        element.classList.remove('clicked');
    });
    nums.classList.add('clicked');

    return nums.classList.contains('clicked') ? nums.innerHTML : null;
}


let btn = document.querySelector('.js-btn');

ratingNums.forEach((nums) => {
    nums.addEventListener('click', () => {
        rating = handleRatingClick(nums);
    });
});

btn.onclick = () => {

    if (!rating) {
        alert('Please select a rating before submitting.');
        return; 
    }
    
    const html = `
        <div class="container">
            <img src="images/illustration-thank-you.svg" alt="" />
            <span class="js-rating">You selected ${rating} out of 5</span>
            <h1>Thank you!</h1>
            <p class='text'>
                We appreciate you taking the time to give a rating. if you ever need
                more support, don't hesitate to get in touch!
            </p>
        </div>
    `;
    const container = document.createElement('div');
    container.innerHTML = html;

    const ratingCard = document.querySelector('.rating-card');
    
    document.body.appendChild(container);

    ratingCard.style.display = 'none';
    container.style.display = 'flex';
};


