import { BsHeart } from "react-icons/bs"

function Footer() {
  return (
    <div className="z-[5] mb-[0] footer p-[1rem] text-center text-[#ddd] text-[14px]">
        <div className="flex justify-center items-center">
            Created with<span className="flex px-2"><BsHeart /></span> <div>by <a href="https://github.com/dhaxdev" className="underline">Houssen D. Aly</a></div>
        </div>    
    </div>
  )
}

export default Footer