import {useState} from 'react'

function Form(){
  function cadastrarUsuario(e){
    e.preventDefault();
    alert(` Usuário ${name.toUpperCase()} cadastrado com a senha ${password}` )
  }

  const [name, setName] = useState()
  const [password, setPassword] = useState()

  return (
    <>
      <h1>Meu Cadastro:</h1>
        <form onSubmit = {cadastrarUsuario}>
          <div>
          <label htmlFor='name'> Nome: </label>
            <input type = 'Text' id='name' name='name' placeholder ='Digite Seu nome' onChange={(e)=> setName(e.target.value)}/>
          </div>
            <div>
            <label htmlFor='password'> Senha: </label>
            <input type = 'password' id='password' name='password' placeholder ='Digite sua senha' onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          <div>
            <input type = 'submit' value= 'cadastrar' />
          </div>
        </form>
    </>
  )
}

export default Form
