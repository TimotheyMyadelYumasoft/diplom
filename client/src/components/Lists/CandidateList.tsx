import { useEffect } from "react"
import { useAction } from "../../hooks/useAction"
import { useTypeSelector } from "../../hooks/useTypedSelector"
import EmployerItem from "../Items/EmployerItem"
import { IUser } from "../../types/user-type"
import '../../style/Lists.css'

type Props = {
    employers: IUser[]
}

const CandidateList = ({employers}: Props) => {
    const {auth, isAuth} = useTypeSelector(state => state._auth)
    const {fetchUserByIdAction, fetchUsers, fetchStatusCandidates} = useAction()
    const {statusCandidate, statusCandidates} = useTypeSelector(state=> state._statusCandidate)

    const {users} = useTypeSelector(state => state._user)
    useEffect(()=> {
        fetchStatusCandidates()
    }, [])

    return (
        <div style={{display: 'flex', msFlexDirection: 'column', flexWrap: 'wrap'}}>
            <div style={{backgroundColor: '#f2f2f2'}}>
                <div className="candidate__header__reject">
                    <h2>Кандидат отклонен</h2>
                </div>
                <div>
                    {employers?.map( employer =>
                    <>{statusCandidates.map(status =>
                        <div className="candidate__item">
                          {employer.statusCandidate==status._id && status.name == 'Отклонен' ?  <EmployerItem empl={employer} /> : ''}
                        </div>
                    )}
                    </>
                )}
                </div>
            </div>
            <div>
                <div className="candidate__header__wait">
                    <h2>Ожидает собеседования</h2>
                </div>
                <div>
                    {employers?.map( employer =>
                    <>{statusCandidates.map(status =>
                        <div className="candidate__item">
                          {employer.statusCandidate==status._id && status.name == 'Ожидает' ?  <EmployerItem empl={employer} /> : ''}
                        </div>
                    )}
                    </>
                )}
                </div>
            </div>
            <div style={{backgroundColor: '#f2f2f2'}}>
                <div className="candidate__header__review">
                    <h2>Кандидат рассматривается</h2>
                </div>
                <div>
                    {employers?.map( employer =>
                    <>{statusCandidates.map(status =>
                        <div className="candidate__item">
                          {employer.statusCandidate==status._id && status.name == 'Рассматривается' ?  <EmployerItem empl={employer} /> : ''}
                        </div>
                    )}
                    </>
                )}
                </div>
            </div>
            <div>
                <div className="candidate__header__accept">
                    <h2>Найм кандидата</h2>
                </div>
                <div>
                    {employers?.map( employer =>
                    <>{statusCandidates.map(status =>
                        <div className="candidate__item">
                          {employer.statusCandidate==status._id && status.name == 'Приглашен' ?  <EmployerItem empl={employer} /> : ''}
                        </div>
                    )}
                    </>
                )}
                </div>
            </div>
        </div>
    )
}

export default CandidateList