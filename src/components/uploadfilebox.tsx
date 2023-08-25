import { useState, ChangeEvent } from "react";
import { Button, Input } from "@chakra-ui/react";

export function UploadFileBox() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <div>
      <Input
        type="file"
        display="none"
        onChange={handleFileChange}
        id="file-input"
        accept=".csv"
      />
      <label htmlFor="file-input">
        <Button as="span" colorScheme="blue" variant="outline">
          Upload File
        </Button>
      </label>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
}
