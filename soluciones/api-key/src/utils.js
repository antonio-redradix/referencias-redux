export function createID(){
  return Math.random().toString(36).substr(2, 5)
}

export function fakeRegen(){
  const rand = () => (Math.random().toString(36)+'00000000000000000').slice(2, 14+2)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        access:  `${rand()}-${rand()}`,
        secret:  `${rand()}${rand()}`
      })
    }, 1000)
  })
}
