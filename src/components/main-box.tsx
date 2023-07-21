import { GridItem, Tabs, TabList, Tab, TabPanels, TabPanel, Checkbox, Button, Text, Divider } from "@chakra-ui/react";

export function MainBox() {

    return (
        <GridItem pl='400z`z`z' area={'main'}>
            <Tabs variant='enclosed' className='tabs' align='center'>
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
                            <Button colorScheme='green'>Continue</Button>
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
                            <Button colorScheme='green'>Continue</Button>
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

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='main-box'>
                            <Text fontSize='xl' fontWeight='semibold'>Choose a distribution of the errors: family and link functions.</Text>
                        </div>
                    </TabPanel>

                </TabPanels>
            </Tabs>

        </GridItem>
    )
}