export default function ModalContainer({children, setIdShowModal}) {

    const handleCloseModal = () => {
        setIdShowModal(null);
    }
    return (
        <div className='modal'>
            <div className='container_modal'>
                <div className='close_modal' onClick={() => handleCloseModal}></div>
            </div>
            {children}
        </div>
    )
}