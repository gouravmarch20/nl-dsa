Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise =>
      promise.then((resolve, reject) => {

      }).catch(() => '')
    )
  })
}
