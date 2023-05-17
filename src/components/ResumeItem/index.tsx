import formatDecimal from '../../utils/formatDecimalValues';
import * as C from './style';

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Value color={color}>R$ {formatDecimal(value)}</C.Value>
        </C.Container>
    );
}