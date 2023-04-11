function Saudacao({nome}) {

  function gerarSaudacao(algumNome){
    return `Olá, ${algumNome}, tudo bem?`
  }

  return (
    <>
    {nome.length > 0 ? ( 

      <p>{gerarSaudacao(nome)}</p>)
    : (
      <p>Olá, digite seu nome.</p>
    )
    }

    {
      nome && <p>{gerarSaudacao(nome)}</p>
    }
    </>
  )
}

export default Saudacao
