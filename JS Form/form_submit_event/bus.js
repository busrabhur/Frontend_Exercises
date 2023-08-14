const form=document.querySelector('.signupForm');
form.addEventListener('submit',e=>{
    e.preventDefault();//bunu koymazsan sayfa keydettiğin an refresh olur ve form gönderildi yazısını göremezsin
    console.log("Form gönderildi.");
})//submit eventi kullanılınca sayfa otomatik refresh oluyor bunu engellemenin yolu preventDefaut();
