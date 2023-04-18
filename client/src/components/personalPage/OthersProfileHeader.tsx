import { useAction } from "../../hooks/useAction";
import { useTypeSelector } from "../../hooks/useTypedSelector";

const OthersProfileHeader = () => {


    const {auth, user, project} = useTypeSelector(state => state)
    const {refresh, logout, fetchProjectByIdAction, fetchUserByIdAction, fetchUsers} = useAction()

    console.log(auth.auth.user.id)
    return (
        <div>
            hey
        </div>
    )
}

export default OthersProfileHeader;