import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../../hooks";

type Props = {
  showContent: boolean;
  setShowContent: (showContent: boolean) => void;
};

const index = ({ showContent, setShowContent }: Props) => {
  const program = useAppSelector((state) => state.edu.selectedProgram);
  return (
    <Modal isOpen={showContent} onClose={() => setShowContent(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>{program && program.CONT}</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default index;
