Promise.reject(new Error('Database ds.214.53.4.12 connection timeout!'))
  .catch(error => {
    throw new Error('Internal Server Error')
  })
  .catch(error => console.info(error.message))