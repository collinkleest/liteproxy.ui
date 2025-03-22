import { Button, Code, Field, Input, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

export const Try = () => {
  const DEFAULT_VALUE =
    "https://jsonplaceholder.typicode.com/comments?postId=1";
  const [response, setResponse] = useState("");
  const [inputValue, setInputValue] = useState<string>(DEFAULT_VALUE);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchExample = () => {
    const proxyUrl = inputRef.current?.value;
    fetch(`https://api.liteproxy.collinkleest.com/proxy?url=${proxyUrl}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setResponse(JSON.stringify(json));
      });
  };

  return (
    <>
      <Text>
        <Code>
          https://api.liteproxy.collinkleest.com/proxy?url={"<"} desired url you
          want to proxy to {">"}
        </Code>
      </Text>

      <Field.Root required>
        <Field.Label>
          Proxy Url <Field.RequiredIndicator />
        </Field.Label>
        <Input
          placeholder={DEFAULT_VALUE}
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          ref={inputRef}
        />
        <Field.HelperText>Enter a valid url.</Field.HelperText>
      </Field.Root>

      <Button onClick={fetchExample} my={2} size="sm">
        Try it now
      </Button>

      {response && <Code variant={"outline"}>{response}</Code>}
    </>
  );
};
