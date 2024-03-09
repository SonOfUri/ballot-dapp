// Importing required components and hooks
// 'Flex' component from the '@radix-ui/themes' package, a utility
// to help layout children with specified gap and alignment.
import { Flex } from "@radix-ui/themes";

// 'GiveRightToVoteComponent' from the current directory,
// which is presumably a custom component for rendering a voting feature.
import GiveRightToVoteComponent from "./GiveRightToVoteComponent";

// 'useIsChairPerson' is a custom React hook from the '../hooks' directory,
// it presumably returns a boolean indicating if the current user is a chairperson
import useIsChairPerson from "../hooks/useIsChairPerson";

// Defining a functional component named 'Header'
export default function Header() {
    // This is using the custom hook useIsChairPerson,
    // We're not sure about the implementation, but we can guess it checks
    // if the current user is a chairperson and returns true/false.
    const isChairPerson = useIsChairPerson();

    return (
        // The component returns a div with two main sections aligned at start and end.
        <div className="flex justify-between items-center">
            {/*This is branding or title displayed on the left*/}

            <div>Ballot</div>
            {/*This is a content space displayed on the right,*/}
            {/*which renders the 'GiveRightToVoteComponent' only if 'isChairPerson' is true.*/}
            <Flex gap={"4"} align={"center"}>
                {
                    isChairPerson && <GiveRightToVoteComponent />
                }

                <w3m-button />
            </Flex>
        </div>
    );
}