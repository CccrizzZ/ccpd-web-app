import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

type AlertModalProps = {
  open: boolean
  onOpenChange: () => void
  msg: string
  title: string
}

const AlertModal: React.FC<AlertModalProps> = (props: AlertModalProps) => {
  return (
    <Modal
      backdrop='transparent'
      isOpen={props.open}
      onOpenChange={props.onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      placement="center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{props.title}</ModalHeader>
            <ModalBody>
              <p>{props.msg}</p>
            </ModalBody>
            <ModalFooter>
              {/* <Button color="secondary" variant="light" onPress={onClose}>
                Close
              </Button> */}
              <Button color="warning" onPress={onClose}>
                OK
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default AlertModal