import styled from 'styled-components';

export const Container = styled.div`
    background-color: #333;
    color: #ddd;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;

    input {
        background: #3e3e3e !important;
        border: #adadad 1px solid;
        color: #ddd;
    }
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border-radius: 5px;
    outline: none;
    ::-webkit-calendar-picker-indicator{
        background-color: #ddd;
        padding: 5px;
        cursor: pointer;
        border-radius: 3px;
    }
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    background: #3e3e3e !important;
    border: #adadad 1px solid;
    color: #ddd;
    outline: none;
`;
export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: none;
    border-radius: 5px;
    background-color: #444;
    font-size: .9rem;
    color: #ddd;
    cursor: pointer;
    &:hover {
        background-color: #4e4e4e;
    }
`;