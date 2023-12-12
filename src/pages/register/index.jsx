import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

import { Input, SelectTest, Button, Modal } from "src/components";
import { useClientsContext } from "src/context";
import { maskedNumberStringToNumber, unmaskDocument } from "src/utils";
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
  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit, setValue, reset } = methods;
  const [isModalVisible, setModalVisible] = useState(false);
  const { clients, onAddClient, onUpdateClient, onDeleteClient } =
    useClientsContext();

  function handleModalVisible() {
    setModalVisible(!isModalVisible);
  }

  function handleDeleteClient() {
    onDeleteClient(id);
    toast.error("Cadastro excluído com sucesso", { theme: "colored" });
    navigate("/dashboard");
  }

  function onSubmit(clientData) {
    if (
      !id &&
      clients.find((client) => client.document === clientData.document)
    ) {
      toast.error("Documento já cadastrado!", { theme: "colored" });
      return;
    }

    const client = {
      ...clientData,
      id: id ? id : uuid(),
      document: unmaskDocument(clientData.document),
      agricultutalArea: maskedNumberStringToNumber(clientData.agricultutalArea),
      vegetationArea: maskedNumberStringToNumber(clientData.vegetationArea),
      totalArea: maskedNumberStringToNumber(clientData.totalArea),
    };

    if (client.agricultutalArea + client.vegetationArea > client.totalArea) {
      toast.error(
        "Área Agricultável e área de vegetação não podem ser maiores que a área total",
        { theme: "colored" }
      );
      return;
    }

    if (id) {
      onUpdateClient(client);
    } else {
      onAddClient(client);
      reset();
    }
    console.log(client);
    toast.success(
      id ? "Cadastro atualizado com sucesso" : "Cadastrado com sucesso!",
      { theme: "colored" }
    );
  }

  useEffect(() => {
    if (id && clients.length) {
      const client = clients.find((client) => client.id === id);
      Object.keys(client).map((field) => {
        setValue(field, client[field]);
      });
    } else {
      reset();
    }
  }, [id, clients]); // eslint-disable-line

  return (
    <FormProvider {...methods}>
      <Styles.Form
        onSubmit={handleSubmit(onSubmit)}
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
          <Button type="submit">{id ? "Editar" : "Cadastrar"}</Button>
          {id && (
            <Button type="button" onClick={handleModalVisible} danger={true}>
              Excluir
            </Button>
          )}
        </Styles.FormInputs>
      </Styles.Form>
      <Modal
        title="Excluir Cadastro"
        message="Você deseja proseguir com a exclusão do cadastro?"
        onConfirm={handleDeleteClient}
        onClose={handleModalVisible}
        isVisible={isModalVisible}
      />
    </FormProvider>
  );
}
