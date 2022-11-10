const cone_volume1 = (radius:number, height:number):number | undefined => {
  if(1<=radius && radius<=100 && 1<=height && height<=100){
    return Math.floor((3.14159*radius**2*height)/3)
  }
}

console.log(cone_volume1(3,12))