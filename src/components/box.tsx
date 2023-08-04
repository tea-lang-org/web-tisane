import * as react from "@chakra-ui/react";
import { UploadFileBox } from "./uploadfilebox";

export function Box() {
  let variables = [
    { type: "DV", name: "Weight" },
    { type: "IV", name: "Time" },
    { type: "IV", name: "Litter" },
    { type: "IV", name: "Pig" },
    { type: "IV", name: "Time" },
  ]

  return (
    <react.GridItem pl='2' area={'nav'}>
      <div className='tips-box'>
        <UploadFileBox />
        <br />
        <b>Variables expressed in query:</b>
        {variables.map((v) => (
          <react.Box m={1} bg='#a1afc0' p={0.5} key={v.name} className='tips-box__variable'>
            <react.Text fontSize='12px' >{v.name}</react.Text>
          </react.Box>
        ))}
        <br />
        <b>Variables added:</b>
        <br />
        <b><i>No interactions to add</i></b>
        <br />
        <b>Clustering</b>
          {variables.map((v) => (
            <react.Box m={1} bg='#83b5e2' p={0.5} key={v.name} className='tips-box__variable'>
              <react.Text fontSize='12px' >{v.name}</react.Text>

            </react.Box>

          ))}
        <br />
        <b>Data Distribution:</b>
        <br />
        Link:

      </div>
    </react.GridItem>
  )
}