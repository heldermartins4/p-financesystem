import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #333;
    color: #ddd;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    margin-top: 10px;
`;

export const TableHeadColumn = styled.th<{width?: number}>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0;
    text-align: left;
`;