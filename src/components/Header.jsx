import { BsGithub } from "react-icons/bs"
import { FaCloudSun } from "react-icons/fa"

function Header() {
  return (
    <div className="xs:flex justify-center fixed w-full shadow-md shadow-[#222] t-[0] header p-[1rem] z-[100]">
        <div className="flex justify-between sm:w-[700px] items-center xs:w-[350px]">
            <a href=""><h1 className="text-[yellow] flex gap-2 items-center text-[22px]"> <FaCloudSun className="" />IjeryMétéo</h1></a>
            <a href="https://github.com/dhaxdev/weather-app" className="text-[#fff]"><BsGithub className="text-[25px]"/></a>
        </div>
    </div>
  )
}

export default Header