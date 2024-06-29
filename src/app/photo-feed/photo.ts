import { StaticImageData } from 'next/image'
import pic1 from './photos/pic-1.jpeg'
import pic2 from './photos/pic-2.jpeg'
import pic3 from './photos/pic-3.jpeg'

export type Photo={
  id:number,
  name:string,
  src:StaticImageData,
  description:string
}

export const photoArrey:Photo[]=[
    {
        id:1,
        name:"first",
        src:pic1,
        description:'cute girl'
    },
    {
        id:2,
        name:"first",
        src:pic2,
        description:'cute girl'
    },
    {
        id:3,
        name:"first",
        src:pic3,
        description:'cute girl'
    },
]