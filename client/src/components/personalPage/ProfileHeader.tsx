import React, { useEffect, useRef, useState } from 'react'
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'
import Modal from '../Modal';
import EditUserFrom from '../Forms/EditUserFrom';
import ProjectItem from '../Items/ProjectItem';
import {Tag } from 'antd'

const ProfileHeader = () => {

    const [modalActive, setModalActive] = useState(false);
    const {auth, user, project} = useTypeSelector(state => state)


    // const hiddenBackgroundInput = useRef<HTMLInputElement>(null)
    const {fetchUserByIdAction , fetchUsers, fetchProjectByIdAction} = useAction()

    const userProjects = [{
        _id: "643b852116870e6de902f736",
        title: "asdfasd",
        country: "BLR",
        userId: [
            "643b7c482197e811f647b346",
            "643b7c482197e811f647b34a"
        ]
    },
    {
        _id: "643b881476a53a80cf4c9545",
        title: "Ultrade",
        country: "USA",
        userId: [
            "643b7c482197e811f647b346",
            "643b7c482197e811f647b34a"
        ]
    }]


    // const uploadBackground =(e: any) =>{
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     // reader.onload = () = {
    //     //     setProfileImage()
    //     // }
    // }
    return(

        <Card>
            <Image src='https://www.yumasoft.com/fonts/svg/yumasoft_logo.svg' style={{width: '100%', height: '300px'}}/>
            <table >
                <thead>
                    <tr>
                        <th><Image src='https://www.yumasoft.com/fonts/svg/yumasoft_logo.svg'
                            style={{width: '250px', height: '250px', borderRadius: '150px', backgroundColor: 'black'}} /></th>
                        <th></th>
                        <th><div>
                            <Button onClick={() => setModalActive(true)}>Изменить пользователя</Button></div></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{display: 'flex', marginLeft: '10px', marginTop: '10px'}}><h2>Skills</h2></td>
                        <td><h5>День рождения</h5><h3>{user.user?.birthDay?.split('T')[0]}</h3></td>
                        <td><h5>День найма</h5><h3>{user.user?.hiredDate?.split('T')[0]}</h3></td>
                        { user.user?.firedDate ? <td><h5>День увольнения</h5><h3>{user.user?.firedDate?.split('T')[0]}</h3></td> : ''}
                    </tr>
                    <tr>
                        <td style={{display: 'flex', marginLeft: '10px'}}>
                            {user.user.skills?.map((skill) => (<Tag key={skill}>{skill}</Tag>))}
                        </td>
                        <td><h5>Имя:</h5><h3>{user.user?.firstname}</h3></td>
                        <td><h5>Фамилия:</h5><h3>{user.user?.secondname}</h3></td>
                        <td><h5>Пол: </h5><h3>{user.user?.gender}</h3></td>
                    </tr>
                    <tr>
                        <td style={{display: 'flex', marginLeft: '10px', marginTop: '10px'}}><h2>Projects</h2></td>
                        <td><h5>Email:</h5><h3>{user.user?.email}</h3></td>
                        <td><h5>Телефон:</h5><h3>{user.user?.phoneNumber}</h3></td>
                        <td><h5>Отдел:</h5><h3>{user.user?.departament}</h3></td>
                    </tr>
                    <tr>
                        <td style={{display: 'block', marginLeft: '10px', width: '150px'}}>{project.projects?.map(proj =>
                                // <h4 style={{marginRight: '10px', border: 'solid 2px', borderRadius:'15px', padding:'2px 2px'}}>{proj.title}</h4>)}
                                <Tag key={proj.title}>{proj.title}</Tag>)}
                        </td>
                        <td>
                            {/* {isOpen && <Modal setIsOpen={setIsOpen} modalHeader='Editing'><EditUserFrom setIsOpen={setIsOpen} /></Modal>} */}
                            <Modal active={modalActive} setActive={setModalActive} modalHeader='Изменить пользователя'><EditUserFrom setIsOpen={setModalActive}/></Modal>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Card>
    )
}

export default ProfileHeader;