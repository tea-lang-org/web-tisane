import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, GridItem, Progress, Switch } from "@chakra-ui/react";
import { useRef, useState } from "react";

export function Header() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const cancelRef = useRef(null);

  const handleSwitchChange = () => {
    if (isSwitchOn === false && isPopupOpen === false) {
      setIsPopupOpen(true);
    } else if (isSwitchOn === true && isPopupOpen === false) {
      setIsSwitchOn(false);
    }
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setIsSwitchOn(true);
  };


  return (
    <GridItem pl="2" area={"header"} position="relative">
      <div className="title">🌺 Tisane</div>

      <div className="bar">
        <Progress height="32px" colorScheme="blue" bgColor="gray.400" value={25} />
      </div>

      <Switch
        colorScheme="blue"
        size="lg"
        position="absolute"
        top="0"
        right="0"
        mt="2"
        mr="2"
        isChecked={isSwitchOn}
        onChange={handleSwitchChange}
      />

      <AlertDialog isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} isCentered leastDestructiveRef={cancelRef}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Agree to Share Analysis?</AlertDialogHeader>
            <AlertDialogBody>By turning on this switch, you are agreeing to anonymously sharing your results to the Developer team. This helps us find errors and see what information is used.</AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={() => setIsPopupOpen(false)}>
                Cancel
              </Button>
              <Button colorScheme="blue" ml={3} onClick={handlePopupClose}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </GridItem>
  );
}