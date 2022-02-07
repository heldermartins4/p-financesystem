import { Category } from "../types/Category";

export const categories : Category = {
    food: { title: 'Alimentação', color: '#FFC445', expense: true },
    clothing: { title: 'Roupas', color: '#6586BB', expense: true },
    acessories: { title: 'Acessórios', color: '#55BD94', expense: true },
    rent: { title: 'Aluguel', color: '#F53020', expense: true },
    salary: { title: 'Salário', color: '#2EFF00', expense: false }
}