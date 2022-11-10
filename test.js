const cone_volume = (radius, height) => {
  if(1<=radius && radius<=100 && 1<=height && height<=100){
    return parseInt((3.14159*radius**2*height)/3)
  }
}

console.log(cone_volume(1,12))