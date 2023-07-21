import { GridItem, UnorderedList, ListItem } from "@chakra-ui/react";

export function Box() {
    return (
        <GridItem pl='2' area={'nav'}>
        <div className='tips-box'>
            <b>Variables expressed in query:</b>
            <br />
            DV: Weight
            <br />
            IVs: <br />
            <UnorderedList>
            <ListItem>
              Time
            </ListItem>
            </UnorderedList>
            <br />
            <b>Variables added:</b>
            <br />
            <b><i>No interactions to add</i></b>
            <br />
            <b>Clustering</b>
            <UnorderedList>
            <ListItem>
              Time
            </ListItem>
            <ListItem>
              Litter (with random intercept)
            </ListItem>
            <ListItem>
              Pig (with random intercept)
            </ListItem>
              Time (with random intercept)
            </UnorderedList>
            <br />
            <b>Data Distribution:</b>
            <br />
            Link:

        </div>
        </GridItem>
    )
}