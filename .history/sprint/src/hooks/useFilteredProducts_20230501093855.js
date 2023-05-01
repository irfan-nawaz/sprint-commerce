import getProducts from "../query/getProducts";
import { useQuery } from '@tanstack/react-query'

export const useFilteredProducts = ()=>{
    const products = useQuery(['products'], getProducts)
}