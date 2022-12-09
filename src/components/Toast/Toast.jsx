import { createStandaloneToast } from '@chakra-ui/react';
const { toast } = createStandaloneToast();

export function ToastSuccess() {
  return toast({
    title: 'Account created.',
    description: "We've created your account for you.",
    status: 'success',
    duration: 2000,
    isClosable: true,
    position: 'bottom-right',
  });
}
export function ToastSuccessAddContact() {
  return toast({
    title: 'Added successfully',
    description: "We've new contact for you.",
    status: 'success',
    duration: 2000,
    isClosable: true,
    position: 'bottom-right',
  });
}
export function ToastSuccessDeleteContact() {
  return toast({
    title: 'Deleted successfully',
    description: 'Delete your  contact.',
    status: 'success',
    duration: 2000,
    isClosable: true,
    position: 'bottom-right',
  });
}
export function ToastSuccessLogin() {
  return toast({
    title: 'login successful',
    description: "We've created your account for you.",
    status: 'success',
    duration: 2000,
    isClosable: true,
    position: 'bottom-right',
  });
}

export function ToastFailed() {
  return toast({
    title: 'Something going wrong...',
    description: `Incorrect Login or password. Pls try one more time`,
    status: 'error',
    duration: 2000,
    isClosable: true,
    position: 'bottom-right',
  });
}

export function ToastFailedRegistration() {
  return toast({
    title: 'Something going wrong...',
    description: `Pls try one more time`,
    status: 'error',
    duration: 2000,
    isClosable: true,
    position: 'bottom-right',
  });
}

export function ToastFailedContact(name) {
  return toast({
    title: 'Same name',
    description: `${name} is already in contacts`,
    status: 'error',
    duration: 2000,
    isClosable: true,
    position: 'bottom-right',
  });
}
