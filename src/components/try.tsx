import { Button, Code, Text } from "@chakra-ui/react";
import { useState } from "react";

export const Try = () => {
    const [response, setResponse] = useState('')
    const [clicks, setClicks] = useState(0)
    
    const fetchExample = () => {
        setClicks(clicks + 1)
        if (clicks > 3) {
            return
        }
        fetch('https://api.liteproxy.collinkleest.com/proxy?url=https://jsonplaceholder.typicode.com/comments?postId=1').then((response) => {
            return response.json();
        }).then((json) => {
            setResponse(JSON.stringify(json))
        })
    }

  return (
    <>
      <Button onClick={fetchExample} my={2}size='sm'>Try it now</Button>

      <Text>
        <Code>
          https://api.liteproxy.collinkleest.com/proxy?url=https://jsonplaceholder.typicode.com/comments?postId=1
        </Code>

      </Text>

      {response && <Code variant={'outline'}>
        {response}
      </Code>
}
    </>
  );
};
