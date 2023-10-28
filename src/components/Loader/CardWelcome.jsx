import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import Typed from "react-typed";
import React, { useState } from "react";
import { useAppContext } from "../../context/store";
import { useNavigate } from "react-router-dom";

const CardWelcome = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useAppContext();
  const [name, setName] = useState("")

  console.log(state);

  const handleInsertPengunjung = () => {
    dispatch({ type: "INSERT_PENGUNJUNG", payload: name});
    navigate("/dashboard")
  }

  return (
    <Stack className="min-w-[300px] text-[#FAF0E6] mt-20 items-center gap-20">
      <Typed
        className="text-[25px] font-mono"
        strings={[
          "Terimakasih Sudah Mengunjungi Website saya, Semoga Temen - Temen Tertarik",
        ]}
        typeSpeed={50}
      />
      <Stack className="items-center">
        <Input
          onChange={(e) => setName(e.target.value)}
          variant="flushed"
          placeholder="Masukan Nama"
          className="w-fit"
        />
        {name !== "" && (
          <Button onClick={handleInsertPengunjung} className="w-fit" colorScheme="gray">
            Lanjut
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default CardWelcome;
