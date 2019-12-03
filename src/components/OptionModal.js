import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <Modal
    isOpen = {!!props.selectedOption}
    onRequestClose = {props.handleModal}
    contentLabel = "Selected Option"
    closedTimeoutMS = {200}
    className="modal"
    >
    <h3 className= "modal__title"> Selected Text</h3>
    {props.selectedOption && <p className= "modal__body"> {props.selectedOption}</p>}
    <button className = "button" onClick = {props.handleModal}>okay</button>
    </Modal>
 );

export default OptionModal;