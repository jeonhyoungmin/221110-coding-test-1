def cone_volume(radius, height):
    if(1<=radius<=100 and 1<=height<=100):
        return int((3.14159*radius**2*height)/3)


print(cone_volume(3,12))