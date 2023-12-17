import { formatInTimeZone, format } from "date-fns-tz";
import { ptBR } from "date-fns/locale";
import pt from "date-fns/locale/pt";

const dateFormat = (date) => {
  //return formatInTimeZone(date, "America/Sao_Paulo", "dd MMM yyyy");
  const data = new Date(date)
  return format(data, "dd MMM yyyy", { locale: ptBR })
};

export default dateFormat;
