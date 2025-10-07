const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        tabs.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
      });
    });



const btn = document.querySelector('.btn-admin'); 
btn.addEventListener('click', (e)=> {
    // e.preventDefault(); 
    const textAdmin = document.querySelector(".user-admin-input");
    const passAdmin = document.querySelector(".password");
    const resAdmin = document.querySelector('.res-login-admin');
    if(textAdmin.value == "admin" && passAdmin.value == "123") {
        const form = document.querySelector('#login-admin');
        form.setAttribute('action', 'admin.html')
        console.log(form)
        resAdmin.textContent = "";
    } else {
        e.preventDefault(); 
        resAdmin.textContent = "ACESSO NEGADO";
        resAdmin.classList.add('msg-negado')
    }
    [textAdmin, passAdmin].forEach((input)=> {
        input.addEventListener('input', ()=> {
            if(resAdmin.textContent !== "") {
                resAdmin.textContent = "";
                resAdmin.classList.remove("msg-negado")
            }
        })
    })
})
