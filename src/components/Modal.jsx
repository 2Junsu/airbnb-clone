import React from "react";
import ModalComponent from "react-modal";

const Modal = (props) => {
    const { children, width, height, modalStatus, closeModal } = props;
    return (
        <ModalComponent
            isOpen={modalStatus}
            onRequestClose={closeModal}
            style={{
                overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                },
                content: {
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    top: `calc(50% - ${height / 2}px)`,
                    left: `calc(50% - ${width / 2}px)`,
                    width: width + "px",
                    height: height + "px",
                    borderRadius: 12,
                    backgroundColor: "white",
                },
            }}>
            {children}
        </ModalComponent>
    );
};

export default Modal;
