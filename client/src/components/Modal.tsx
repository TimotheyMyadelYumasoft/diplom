import {CloseOutlined} from '@ant-design/icons'
import {Button} from 'antd'

type Props = {
    children : string | JSX.Element | JSX.Element[];
    setIsOpen: (isOpen: boolean) => void;
    modalHeader: string
}

export default function Modal({ setIsOpen, children, modalHeader}: Props) {

    return(
        <>
            <div className="modal" onClick={() => setIsOpen(false)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>{modalHeader}</h2>
                        <Button className="close-modal-button" onClick={() => setIsOpen(false)} icon={<CloseOutlined />} />
                    </div>
                </div>
            </div>
        </>
    )
}