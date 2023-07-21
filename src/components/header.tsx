import { GridItem, Progress } from "@chakra-ui/react";

export function Header() {
    return (
        <GridItem pl='2' area={'header'}>
        <text className='title'>🌺 Tisane</text>

        <div className='bar'>
          <Progress height='32px' colorScheme='blue' bgColor='gray.400' value={25} />
        </div>
      </GridItem>
    )
}