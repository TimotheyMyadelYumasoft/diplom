import React from 'react'
import {CloseOutlined} from '@ant-design/icons'
import {Button} from 'antd'
import "../style/Modal.css"

type Props = {
    children : string | JSX.Element | JSX.Element[];
    active: boolean;
    setActive: (isOpen: boolean) => void;
    modalHeader: string
}

const Modal = ({children, active, setActive, modalHeader}: Props) => {
    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h2>{modalHeader}</h2>
                    <Button className="close-modal-button" onClick={() => setActive(true)} icon={<CloseOutlined />} />
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal;