import { GridItem, Tabs, TabList, Tab, TabPanels, TabPanel, Checkbox, Button, Text, Divider, useDisclosure, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { LinkIcon } from "@chakra-ui/icons";


export function MainBox() {
    const [activeTab, setActiveTab] = useState(0);
    const [progressValue, setProgressValue] = useState(0);

    const handleContinue = () => {
        if (activeTab < 3) {
            setActiveTab(activeTab + 1);
            setProgressValue(progressValue + 25);
        }
    };

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef(null)


    return (
        <GridItem pl='400z`z`z' area={'main'}>
            <Tabs variant='enclosed' className='tabs' align='center' index={activeTab} onChange={setActiveTab}>
                <TabList>
                    <Tab>IVs</Tab>
                    <Tab>Interactions</Tab>
                    <Tab>Clustering</Tab>
                    <Tab>Data Distributions</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div className='main-box'>
                            <Text fontSize='xl' fontWeight='semibold'>Main Independent Variables</Text>
                            <i>Main independent variables are variables whose influence on the dependent variable you are interested in.</i>
                            <br /> <br />
                            Tisane derives main independent variables based on the <text className='snippet'>causes</text> and <text className='snippet'>associates_with</text> relationships you specified in your Tisane program.
                            <br /> <br />
                            <Checkbox>Time</Checkbox>
                            <br /> <br />
                            <Button colorScheme='green' onClick={handleContinue}>Continue</Button>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='main-box'>
                            <Text fontSize='xl' fontWeight='semibold'><i>No interaction</i>s</Text>
                            <Text fontWeight='bold'>There are no interaction effects that make sense given the variable relationships you specified in your Tisane program!</Text>
                            Interaction effects represent relationships where one or more variables moderate the effect another independent variable has on a dependent variable.
                            You didn't specify any moderating relationships!
                            <br />  <br />
                            <i>If you believe you omitted a moderating relationship</i>, go back to your program and specify it using the <text className='snippet'>moderates</text> function call.
                            <br /> <br />
                            <Button colorScheme='green' onClick={handleContinue}>Continue</Button>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='main-box'>
                            <Text fontSize='xl' fontWeight='semibold'>Accounting for data clustering</Text>
                            <i>Accounting for data clusters</i> helps us control for data clusters that arise due to how data were
                            collected. For example, if there are multiple observations from the same unit (i.e., repeated
                            measures), data are hierarchical, or there are multiple ways to group observations that might
                            overlap (i.e., non-nesting).
                            <br /> <br />
                            Tisane infers clustering based on the variable relationships you have declared and
                            automatically includes them whenever necessary to maximize generalizability.
                            <br /> <br />

                            <Divider orientation='horizontal' />
                            <Button colorScheme='green' onClick={handleContinue}>Continue</Button>

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='main-box'>
                            <Text fontSize='xl' fontWeight='semibold'>Choose a distribution of the errors: family and link functions.</Text>
                            <br />
                            <Button onClick={onOpen} leftIcon={<LinkIcon />} colorScheme='blue'>Share results</Button>
                            <AlertDialog
                                isOpen={isOpen}
                                leastDestructiveRef={cancelRef}
                                onClose={onClose}
                            >
                                <AlertDialogOverlay>
                                    <AlertDialogContent>
                                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                            Share Results 🌺
                                        </AlertDialogHeader>

                                        <AlertDialogBody>
                                            This will generate a shareable link to your results. Are you sure you want to share?
                                        </AlertDialogBody>

                                        <AlertDialogFooter>
                                            <Button ref={cancelRef} onClick={onClose}>
                                                Cancel
                                            </Button>
                                            <Button colorScheme='blue' onClick={onClose} ml={3}>
                                                Share
                                            </Button>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialogOverlay>
                            </AlertDialog>

                        </div>
                    </TabPanel>

                </TabPanels>
            </Tabs>

        </GridItem>
    )
}