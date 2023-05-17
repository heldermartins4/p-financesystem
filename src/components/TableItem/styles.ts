import styled from 'styled-components';

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div< { color: string} >`
    display: inline-block;
    padding: 5px 10px;
    background-color: ${props => props.color};
    border-radius: 5px;
`;

export const Value = styled.div< { color: string } >`
    background: ${props => props.color};
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
    padding: 5px 2px;
    border-radius: 4px;
`;
