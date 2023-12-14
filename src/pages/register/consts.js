import { states, crops, documentMask, numberMask } from "src/utils";

export const documentValidation = {
  name: "document",
  label: "Documento",
  id: "document",
  minLength: "14",
  maxLength: "18",
  maskFn: documentMask,
  validation: {
    required: {
      value: true,
      message: "obrigatório",
    },
    pattern: {
      value: /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/,
      message: "formato inválido",
    },
  },
};

export const productorNameValidation = {
  name: "productorName",
  label: "Nome Produtor",
  type: "text",
  id: "productorName",
  validation: {
    required: {
      value: true,
      message: "obrigatório",
    },
    minLength: {
      value: 6,
      message: "minímo 6 caracteres",
    },
  },
};

export const farmNameValidation = {
  name: "farmName",
  label: "Nome Fazenda",
  type: "text",
  id: "farmName",
  validation: {
    required: {
      value: true,
      message: "obrigatório",
    },
    minLength: {
      value: 6,
      message: "minímo 6 caracteres",
    },
  },
};

export const stateValidation = {
  name: "state",
  label: "Estado",
  id: "state",
  options: states,
  validation: {
    required: {
      value: true,
      message: "obrigatório",
    },
  },
};

export const cityValidation = {
  name: "city",
  label: "Cidade",
  type: "text",
  id: "city",
  validation: {
    required: {
      value: true,
      message: "obrigatório",
    },
  },
};

export const totalAreaValidation = {
  name: "totalArea",
  label: "Área total",
  id: "totalArea",
  maskFn: numberMask,
  validation: {
    required: {
      value: true,
      message: "obrigatório",
    },
  },
};

export const agricultutalAreaValidation = {
  name: "agriculturalArea",
  label: "Área agricultável",
  id: "agriculturalArea",
  maskFn: numberMask,
  validation: {
    required: {
      value: true,
      message: "obrigatório",
    },
  },
};

export const vegetationAreaValidation = {
  name: "vegetationArea",
  label: "Área de vegetação",
  id: "vegetationArea",
  maskFn: numberMask,
  validation: {
    required: {
      value: true,
      message: "obrigatório",
    },
  },
};

export const plantedCropsValidation = {
  name: "plantedCrops",
  label: "Culturas",
  options: crops,
  id: "plantedCrops",
  isMulti: true,
  validation: {
    required: {
      value: true,
      message: "obrigatório",
    },
  },
};
