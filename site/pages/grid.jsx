
  
//import styles from '../../styles/Jobs.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log('AAAAAAAAAAAa')
  return {
    props: { ninjas: data }
  }
}

const Grid = ({ ninjas }) => {
  console.log(ninjas)

  return (
    <div>
      <h1>All Ninjas</h1>
      
    </div>
  );
}
 
export default Grid;