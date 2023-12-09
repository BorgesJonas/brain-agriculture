import { documentMask, numberFormat } from "./masks";

/** MOVER ARQUIVO */
const states = [
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraima" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" },
];

const crops = [
  { value: "soja", label: "Soja" },
  { value: "milho", label: "Milho" },
  { value: "algodao", label: "Algodão" },
  { value: "cafe", label: "Café" },
  { value: "cana", label: "Cana de Açucar" },
];

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
      message: "min 6 characters",
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
      message: "min 6 characters",
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
  maskFn: numberFormat,
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
  type: "text",
  id: "agricultutalArea",
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
  type: "text",
  id: "vegetationArea",
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
  validation: {
    required: {
      value: true,
      message: "obrigatório",
    },
  },
};
