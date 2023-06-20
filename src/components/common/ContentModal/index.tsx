import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../../hooks";
import HtmlContent from "../HtmlContent";

type Props = {
  showContent: boolean;
  setShowContent: (showContent: boolean) => void;
};

const index = ({ showContent, setShowContent }: Props) => {
  const program = useAppSelector((state) => state.edu.selectedProgram);
  return (
    <Modal
      isOpen={showContent}
      onClose={() => setShowContent(false)}
      size={"5xl"}
    >
      <ModalOverlay />
      <ModalContent h={"85%"} overflow={"scroll"} padding={"1%"}>
        <ModalHeader>{program?.TITL_NM}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display={"flex"} justifyContent={"center"}>
          <HtmlContent content={program ? program.CONT : ""} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default index;
