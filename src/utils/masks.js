export function documentMask(value) {
  return value?.length <= 14 ? maskCpf(value) : maskCnpj(value);
}

export function numberFormat(value) {
  const newValue = parseFloat(value.replace(/[^\d]/g, ""));
  return isNaN(newValue) ? "" : newValue.toLocaleString("pt-BR");
}

function maskCpf(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

function maskCnpj(value) {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}
