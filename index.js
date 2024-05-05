const email = document.getElementById('email');

const submit = document.getElementById('submit');

submit.addEventListener('click', (e)=> {
    e.preventDefault();
    const matchEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(matchEx)) {
        console.log('match');
        document.getElementById('note').style.display = 'none';
        email.style.borderColor = 'hsl(0, 0%, 59%)';
        document.getElementById('email').value = '';
        document.getElementById('submit').style.marginTop = '0px';
    } else if (screen.width <= 815) {
        document.getElementById('note').style.display = 'block';
        document.getElementById('submit').style.marginTop = '16px';
        email.style.borderColor = 'hsl(354, 100%, 66%)';
    } else {
        document.getElementById('note').style.display = 'block';
        // document.getElementById('submit').style.marginTop = '16px';
        document.getElementById('submit').style.height = '48px';
        email.style.borderColor = 'hsl(354, 100%, 66%)';
    }
})