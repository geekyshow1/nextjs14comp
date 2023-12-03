import Image from "next/image"
import MyImage from '../../public/images/secrets.png'
const LearnUseImage = () => {
  return (
    <>
      <Image src={MyImage} alt="My Image" width={200} height={300} />
    </>
  )
}

export default LearnUseImage