import { useState } from "react";
import { useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Input, SelectTest, Button, Modal } from "src/components";
import { useClientsContext } from "src/context";
import { maskedNumberStringToNumber } from "src/utils";
import {
  document_validation,
  productor_name_validation,
  farm_name_validation,
  state_validation,
  city_validation,
  total_area_validation,
  agricultutal_area_validation,
  vegetation_area_validation,
  planted_crops_validation,
} from "./consts";

import * as Styles from "./styles";

export function Register() {
  const { id } = useParams();
  const methods = useForm();
  const [isModalVisible, setModalVisible] = useState(false);
  const { onAddClient, clients } = useClientsContext();

  function handleModalVisible() {
    setModalVisible(!isModalVisible);
  }

  function createId() {
    return clients[clients.length - 1]?.id + 1 || 1;
  }

  function onSubmit(clientData) {
    if (clients.find((client) => client.document === clientData.document)) {
      toast.error("Documento já cadastrado!", { theme: "colored" });
      return;
    }

    const agricultutalArea = maskedNumberStringToNumber(
      clientData.agricultutalArea
    );

    const vegetationArea = maskedNumberStringToNumber(
      clientData.vegetationArea
    );

    const totalArea = maskedNumberStringToNumber(clientData.totalArea);

    if (agricultutalArea + vegetationArea > totalArea) {
      toast.error(
        "Área Agricultável e área de vegetação não podem ser maiores que a área total",
        { theme: "colored" }
      );
      return;
    }

    const client = {
      ...clientData,
      id: createId(),
      agricultutalArea,
      vegetationArea,
      totalArea,
    };
    onAddClient(client);
    methods.reset();
    toast.success("Cadastrado com sucesso!", { theme: "colored" });
  }

  return (
    <FormProvider {...methods}>
      <Styles.Form
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
        autoComplete="off"
      >
        <Styles.FormInputs>
          <Input {...document_validation} />
          <Input {...productor_name_validation} />
          <Input {...farm_name_validation} />
          <SelectTest {...state_validation} />
          <Input {...city_validation} />
          <Input {...total_area_validation} />
          <Input {...agricultutal_area_validation} />
          <Input {...vegetation_area_validation} />
          <SelectTest {...planted_crops_validation} />
          <Button type="submit">Cadastrar</Button>
          {id && (
            <Button type="button" onClick={handleModalVisible} danger>
              Delete
            </Button>
          )}
        </Styles.FormInputs>
      </Styles.Form>
      <Modal
        title="Excluir Cadastro"
        message="Você deseja proseguir com a exclusão do cadastro?"
        onClose={handleModalVisible}
        isVisible={isModalVisible}
      />
    </FormProvider>
  );
}
