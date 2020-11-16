import http from './http'

const getAll = () => {
    return http.get("/cliente");
  };
  
  const get = id => {
    return http.get(`/cliente/${id}`);
  };
  
  const create = data => {
    return http.post("/cliente", data);
  };
  
  const update = (id, data) => {
    return http.put(`/cliente/${id}`, data);
  };
  
  const remove = id => {
    return http.delete(`/cliente/${id}`);
  };
    
  export default {
    getAll,
    get,
    create,
    update,
    remove
  };