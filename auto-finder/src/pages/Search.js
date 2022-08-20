import React, { useEffect, useState } from "react";

const Search = () => {
  
  const [cars, setCars] = useState(null)


  useEffect(() => {
    fetch('http://54.90.185.211/car')
      .then(res => {
        return res.json()
      })
      .then(data=> {
        // console.log(data)
        setCars(data)
      })
  }, []);
  
  let carItem = () => {
    for(let i in cars){
      // console.log(cars[i].car)
      let carList = cars[i].car
      return carList
      // for(let i in carList){
      //   // console.log(carList[i])
      //   let carItem = carList[i]
      //   return carItem
      // }
    }
  }

  
  

  // let arrFun = () => {
  //   let carArr = []
  //   for(let i in carItem){
  
  //     carArr.push(carItem[i])
  //     return carArr
  //   }
    
  // }

  let carFun = () => {
    for(let i in carItem()){return carItem()[i]}
  }

  // carFun()


  
 let cardata = JSON.stringify(carItem())


 let cardata2 = () => {
  for(let i in cardata){
    return cardata[i].car_make
  }
 }

 console.log(cardata2())



  return(
    <main>
      <div>{cardata}</div>
    </main>
  )

  
};



export default Search;
