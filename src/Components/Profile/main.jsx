import { ProfileData } from "../../Data/info"
import {Image, Name, Parraf} from "./style"

const Profile = () => {
    const {icon, name, ocupation} = ProfileData
    return (
        <div>
            <Image src={icon}></Image>
            <Name>{name}</Name>
            <Parraf>{ocupation}</Parraf>
        </div>
    )
}


export default Profile