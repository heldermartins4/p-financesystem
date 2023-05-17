import { Category } from "../types/Category";

export const categories : Category = {
    food: { title: 'Alimentação', color: '#C3B311', expense: true },
    clothing: { title: 'Roupas', color: '#5CA2BB', expense: true },
    acessories: { title: 'Acessórios', color: '#BB5C7B', expense: true },
    rent: { title: 'Aluguel', color: '#F53020', expense: true },
    salary: { title: 'Salário', color: '#59B875', expense: false }
}