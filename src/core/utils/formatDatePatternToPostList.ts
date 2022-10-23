import format from "date-fns/format";

function formatDatePatternToPostList(date: string) : string {
    return format(new Date(date), 'dd/MM/yyyy')
}

export default formatDatePatternToPostList