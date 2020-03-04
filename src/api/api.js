import axios from 'axios'
export async function getLumber(width, height, length) {
  const lumberResults = await axios(`http://localhost:3000/lumber/${width}/${height}/${length}`) 
  return lumberResults
}
