import React from "react";
import {confirmAlert} from "react-confirm-alert";


interface ModalProps {
    children: React.ReactNode
}

export default function modal(props: ModalProps) {
    setTimeout(() => {
        confirmAlert({
            overlayClassName: 'modal-overlay',
            customUI: () => {
                return props.children
            }
        })
    },0)
}