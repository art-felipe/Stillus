import React, { useState } from "react";
import {    Button,    Modal,    Icon,    Input,        Heading,    VStack,} from "native-base";
import { Ionicons } from '@expo/vector-icons';



export default function RegisterScreen(props) {

    const { showModal, setShowModal } = props

    const handleClickToggleFirstPw = () => setShowFirstPw(!showFirstPw);
    const handleClickToggleScndPw = () => setShowScndPw(!showSndPw);
    const handlEmailChange = text => setEmail(text);
    const handlPWChange = text => setPassword(text);
    const handlScndPWChange = text => setScndPassword(text);

    const [showFirstPw, setShowFirstPw] = useState(false);
    const [showSndPw, setShowScndPw] = useState(false);
    const [emailInput, setEmail] = useState('');
    const [passwordInput, setPassword] = useState('');
    const [passwordScndInput, setScndPassword] = useState('');

    return (
        <Modal size="xl" isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Crie uma conta</Modal.Header>
                <Modal.Body>
                    <Heading size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        Bem-vindo
                    </Heading>
                    <Heading mt="1" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }} fontWeight="medium" size="xs">
                        Cadastre-se e junte-se a nós.
                    </Heading>
                    <VStack space={3} mt="5">
                        <Input value={emailInput} onChangeText={handlEmailChange} InputLeftElement={
                            <Icon as={Ionicons} name="mail-outline" size="sm" ml="2" />
                        }
                            variant="outline"
                            mx="3"
                            placeholder="E-Mail"
                        />
                        <Input value={passwordInput} onChangeText={handlPWChange} InputLeftElement={
                            <Icon as={Ionicons} name="key-outline" size="sm" ml="2" />
                        }
                            variant="outline"
                            mx="3"
                            type={showFirstPw ? "text" : "password"}
                            InputRightElement={
                                <Button
                                    size="xs"
                                    rounded="none"
                                    w="1/4"
                                    h="full"
                                    onPress={handleClickToggleFirstPw}>
                                    {showFirstPw ? "Hide" : "Mostrar"}
                                </Button>
                            }
                            placeholder="Senha" />
                        <Input value={passwordScndInput} onChangeText={handlScndPWChange} InputLeftElement={
                            <Icon as={Ionicons}
                                name="key-outline"
                                size="sm" ml="2" />
                        }
                            variant="outline"
                            mx="3"
                            type={showSndPw ? "text" : "password"}
                            InputRightElement={
                                <Button
                                    size="xs"
                                    rounded="none"
                                    w="1/4"
                                    h="full"
                                    onPress={handleClickToggleScndPw}
                                >
                                    {showSndPw ? "Hide" : "Mostrar"}
                                </Button>}
                            placeholder="Senha" />
                        <Button
                            mt="2"
                            colorScheme="primary"
                            onPress={() => {
                                if (passwordInput === passwordScndInput) {
                                    // handle signup here
                                } else {
                                    // handle error here
                                }
                            }}>
                            Cadastre-se
                        </Button>
                    </VStack>
                </Modal.Body>
            </Modal.Content>
        </Modal >
    );
}