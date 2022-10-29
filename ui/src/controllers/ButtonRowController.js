import ButtonRow from "../components/ButtonRow"
import { useUser } from "../contexts/UserContext"
export default function ButtonRowController(){
    const {userData} = useUser();
    const loggedIn = userData.username ? true : false;
    return(
        <ButtonRow {...{loggedIn}}/>
    )
}