import { useContext } from "react";
import { PokemonCardContext } from "../context/PokemonCardContext";
import { Container, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, } from "@chakra-ui/react";

import { Texte, TitleM } from "./ModalPokemonStyled";



export const ModalPokemon = () => {

  const { modalPokemon, setModalPokemon, modalStatus } =
    useContext(PokemonCardContext);

  return (
    <>
      <Modal isOpen={modalPokemon} onClose={() => setModalPokemon(false)}>
        <ModalOverlay />
        <ModalContent top={"16rem"}>
          <ModalCloseButton />
          <Flex
            style={{ borderRadius: "10rem" }}
            height={"25vh"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {modalStatus === 0 ? (
              <Container
                display={"flex"}
                height={"25vh"}
                width={"100%"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <ModalBody
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={".5em"}
                >
                  <TitleM>Gotcha!</TitleM>
                  <Texte>O Pokémon foi adicionado a sua Pokédex</Texte>
                </ModalBody>
              </Container>
            ) : (
              <>
                <ModalBody
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={".5em"}
                >
                  <TitleM>Oh, no!</TitleM>
                  <Texte>O Pokémon foi excluido da sua Pokédex</Texte>
                </ModalBody>
              </>
            )}
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
