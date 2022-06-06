import React from "react";
import ModalComponent from "react-modal";

const Modal = (props) => {
    const { children, width, modalStatus, closeModal, className } = props;

    return (
        <ModalComponent
            id="modal"
            isOpen={modalStatus}
            onRequestClose={closeModal}
            className={className}
            style={{
                overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                },
                content: {
                    padding: 0,
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    left: `calc(50% - ${width / 2}px)`,
                    width: width + "px",
                    height: "fit-content",
                    maxHeight: "750px",
                    overflow: "auto",
                    border: "none",
                    borderRadius: 12,
                    backgroundColor: "white",
                },
            }}>
            {children}
        </ModalComponent>
    );
};

export default Modal;
