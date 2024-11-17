
export const toRna = (dna: string): string => {
  let result = ""
  let map = createMap()

  for (let i = 0; i < dna.length; i++) {
    const newValue = map.get(dna[i]);

    if (!newValue) {
      throw new Error("Invalid input DNA.")
    }

    result += newValue;
  }

  return result
}

const createMap = () => {
  const map = new Map()

  map.set('C', 'G')
  map.set('G', 'C')
  map.set('A', 'U')
  map.set('T', 'A')

  return map
}