import { formatDistanceToNow } from "date-fns"
import es from "date-fns/locale/es"

export const getFormatDistanceToNow = (date: number) => {
    return formatDistanceToNow(date, { locale: es })
}