import Button from "./Button";

function Evento() {
  function meuEvento(){
    alert('Ativado');
  }

  function segundoEvent(){
    alert('2 evento');
  }

  return (
    <>
      <p>Clique para disparar um evento:</p>
      <Button event={meuEvento} text='Primeiro Evento'/>
      <Button event={segundoEvent} text='Segundo Evento'/>
    </>
  )
}

export default Evento
