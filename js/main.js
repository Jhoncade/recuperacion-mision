
const users= async ()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/users')
    const users= await response.json()
    console.log(users)
    localStorage.setItem('users',JSON.stringify(users))
}
users()

const entradaform=document.querySelector("#fomulario");
entradaform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const email=document.querySelector('#email').value
    const user=document.querySelector('#user').value
    usuarios=JSON.parse(localStorage.getItem('users'))
    const validar=usuarios.find(usuario=>usuario.email===email && usuario.username===user)
    if(!validar){
    return mostrar()
    
    }
    else{8
    alert (`bienvenido ${validar.name}`)
    window.location.href="../html/home.html"
    }

})
function mostrar(){
    document.getElementById("erroneos").style.display='block';
    email.value=""
    user.value=""
    }
    

    
