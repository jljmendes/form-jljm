let Jmendes = {
    handleSubmit:(event)=>{
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

        for(let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
        }
            send = false;
            if(send){
                form.submit();
        
        }
    }   
};

let form = document.querySelector('.jmendes');
form.addEventListener('submit', Jmendes.handleSubmit);