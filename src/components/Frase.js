import styles from './Frase.module.css'

function Frase(){
  return(
    <div className ={styles.fraseContainer}>
      <h1 className = {styles.fraseContent}>Esse é um componente frase!</h1>
    </div>
  )
}

export default Frase
