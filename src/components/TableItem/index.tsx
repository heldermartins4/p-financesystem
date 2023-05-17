import * as C from "./styles";
import { Item } from "../../types/Items";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";
import formatDecimal from "../../utils/formatDecimalValues";

type Props = {
    item: Item
}

export const TableItem = ({item} : Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? '#E51A4E' : '#59B875'}>
                    R$ {formatDecimal(item.value)}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
}