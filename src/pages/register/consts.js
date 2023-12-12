import { states, crops, documentMask, numberMask } from "src/utils";

export const document_validation = {
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

export const productor_name_validation = {
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

export const farm_name_validation = {
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

export const state_validation = {
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

export const city_validation = {
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

export const total_area_validation = {
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

export const agricultutal_area_validation = {
  name: "agricultutalArea",
  label: "Área agricultável",
  id: "agricultutalArea",
  maskFn: numberMask,
  validation: {
    required: {
      value: true,
      message: "obrigatório",
    },
  },
};

export const vegetation_area_validation = {
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

export const planted_crops_validation = {
  name: "plantedCrops",
  label: "Culturas",
  options: crops,
  id: "plantedCrops",
  isMulti: true,
  maskFn: numberMask,
  validation: {
    required: {
      value: true,
      message: "obrigatório",
    },
  },
};
