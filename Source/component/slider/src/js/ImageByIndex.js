import image1 from '../images/cover-1.jpg'
import image2 from '../images/cover-2.jpg'
import image3 from '../images/cover-3.jpg'

export const images = ['/cover-1.jpg', '/cover-2.jpg', '/cover-3.jpg']

const imageByIndex = (index) => images[index % images.length]



export default imageByIndex
