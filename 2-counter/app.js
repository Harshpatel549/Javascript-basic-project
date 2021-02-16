// set initial count
let count = 0;

// select value buttons

const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn');

btn.forEach(function(item){
    item.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
            value.textContent = count;
        }
        else if(styles.contains('increase')){
            count++;
            value.textContent = count;
        }
        else{
            count = 0;
            value.textContent = count;
        }
    });
});