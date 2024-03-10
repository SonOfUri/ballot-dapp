// First we import the necessary libraries and hooks
import { useState } from "react";
import { Box, Button, Card, Flex, Text, TextField } from "@radix-ui/themes";
import useDelegate from "../hooks/useDelegate.js";

// Component Declaration
const DelegateVote = () => {
    // We use hook to store and set state of an address to which delegate
    const [delegateToAddress, setDelegateToAddress] = useState("");
    // Custom hook that takes a delegate address and returns a function to delegate vote
    const delegate = useDelegate(delegateToAddress);

    // Handlers
    //
    // Handler for the change event on the input field
    const handleChange = (e) => {
        // We set the state as the value of the input field
        setDelegateToAddress(e.target.value);
    };

    // Handler for the click event on the button
    const handleDelegateClick = async () => {
        // We call the delegate function from the useDelegate hook
        await delegate();
        // After the vote is delegated, We clear the input field
        setDelegateToAddress('');
    };

    // Here we define what our component should render
    return (
        // We return a form within a card to delegate vote
        <Card size="2" style={{ width: 425 }}>
            <Flex gap="" align="center">
                <Box width={"100%"}>
                    <Flex direction="column" gap="3">
                        <label>
                            {/*// We have a label for the Delegate's address input*/}
                            <Text as="div" size="2" mb="1" weight="bold">
                                Delegate&apos;s Address
                            </Text>
                            {/*// Here's the text input field for the Delegate's Address*/}
                            <TextField.Input
                                placeholder="Enter Delegate's Address"
                                // The value of the input field is Bonded to our state
                                value={delegateToAddress}
                                // When the input field changes, handleChange function gets called
                                onChange={handleChange}
                            />
                        </label>
                        {/*// We have a button that will delegate the vote when clicked*/}
                        <Button onClick={handleDelegateClick}>
                            Delegate vote
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Card>
    );
};

// We export our DelegateVote component so other modules can use it
export default DelegateVote;