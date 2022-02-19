import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';


function Link(props) {

    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deleteLink() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
            <h2>{ props.text }</h2>
            <a href={ props.location } target="_blank">{ props.text + " Website"}</a>
            <div className='actions'>
                <button className='btn' onClick={deleteLink}>Delete</button>
            </div>
            { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
            { modalIsOpen && <Backdrop onCancel={closeModalHandler} /> }
        </div>
    );
}

export default Link;
