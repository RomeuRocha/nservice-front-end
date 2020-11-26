import http from './http'

const getAll = (resource) => {
    return http.get(resource);
  };
  
  const get = (resource,id) => {
    return http.get(`/${resource}/${id}`);
  };
  
  const create = (resource,data) => {
    return http.post(`/${resource}`, data);
  };
  
  const update = (resource,id, data) => {
    return http.put(`/${resource}/${id}`, data);
  };
  
  const remove = (resource,id) => {
    return http.delete(`/${resource}/${id}`);
  };
    
  export default {
    getAll,
    get,
    create,
    update,
    remove
  };