import { useEffect } from "react"
import { useAction } from "../../hooks/useAction"
import { useTypeSelector } from "../../hooks/useTypedSelector"
import EmployerItem from "../Items/EmployerItem"
import { IUser } from "../../types/user"
import '../../style/Lists.css'

type Props = {
    employers: IUser[]
}

const CandidateList = ({employers}: Props) => {
    const {auth, isAuth} = useTypeSelector(state => state.auth)
    const {fetchUserByIdAction, fetchUsers} = useAction()

    const {users} = useTypeSelector(state => state.user)
    useEffect(()=> {
        fetchUsers();
    },[users])

    return (
        <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
            <div >
                <div className="candidate__header__reject">
                    <h2>Кандидат отклонен</h2>
                </div>
                    {employers?.map( employer =>
                    <div className="candidate__item">
                        {!employer.password && employer.statusCandidate=='rejected' ? <EmployerItem empl={employer} /> : ''}
                    </div>
                )}
            </div>
            <div>
                <div className="candidate__header__wait">
                    <h2>Ожидает собеседования</h2>
                </div>
                <div>
                    {employers?.map( employer =>
                    <div className="candidate__item">
                    {!employer.password && !employer.statusCandidate || !employer.password && employer.statusCandidate=='wait' ?  <EmployerItem empl={employer} /> : ''}
                    </div>
                )}
                </div>
            </div>
            <div>
                <div className="candidate__header__review">
                    <h2>Кандидат рассматривается</h2>
                </div>
                <div>
                    {employers?.map( employer =>
                    <div className="candidate__item">
                    {!employer.password && employer.statusCandidate=='review' ?  <EmployerItem empl={employer} /> : ''}
                    </div>
                )}
                </div>
            </div>
            <div>
                <div className="candidate__header__accept">
                    <h2>Найм кандидата</h2>
                </div>
                <div>
                    {employers?.map( employer =>
                    <div className="candidate__item">
                    {employer.statusCandidate=='accepted' ? <EmployerItem empl={employer} /> : ''}
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default CandidateList