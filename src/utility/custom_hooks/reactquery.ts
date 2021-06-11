
import { useQueryClient } from "react-query";

const queryCli = useQueryClient();


export default function useQueryClient(clientPrefix, data){
    queryCli.setQueryData([`${clientPrefix}`], data);
}