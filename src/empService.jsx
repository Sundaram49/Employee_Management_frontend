import axios from "axios";

const BASE_API_URL= "http://localhost:8085"; 

class empService
{
    saveEmp(emp){
return axios.post(BASE_API_URL+"/save",emp); 
    }
    getAllEmp(){
        return axios.get(BASE_API_URL+"/"); 
    }
    setEmpById(id,emp){
        return axios.put(BASE_API_URL+"/update/"+id,emp); 
    }
    deleteEmp(id){
        return  axios.delete(BASE_API_URL+"/delete/"+id); 
    }

}

export default new empService(); 