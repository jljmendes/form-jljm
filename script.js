let Jmendes = {
    handleSubmit:(event)=>{
        event.preventDefault();
    }
};

let form = document.querySelector('.jmendes');
form.addEventListener('submit', Jmendes.handleSubmit);