import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'http://localhost:8080';
const httpClient = fetchUtils.fetchJson;

export default {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const {order, field } = params.sort;
        const nomeCliente = params.filter.cliente
      
       let url = `${apiUrl}/${resource}?linesPerPage=${perPage}&orderBy=${field}&direction=${order}&page=${page-1}`;
       if(typeof nomeCliente != "undefined" ){
         url+= `&cliente=${nomeCliente}`
       }
       const assunto = params.filter.assunto
       if(typeof assunto != "undefined" ){
        url+= `&assunto=${assunto}`
      }
     
      const situacao = params.filter.situacao
      if(typeof situacao != "undefined" ){
        url+= `&situacao=${situacao}`
      }
      const dataInicial = params.filter.dataInicial
      if(typeof dataInicial != "undefined" ){
        url+= `&dataInicial=${dataInicial}`
      }

      const dataFinal = params.filter.dataFinal
      if(typeof dataFinal != "undefined" ){
        url+= `&dataFinal=${dataFinal}`
       
      }
    
        return httpClient(url).then((response) => ({
            data: response.json.content,
            total: response.json.totalPages
        }));
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    getMany: (resource, params) => {
        
        return httpClient(`${apiUrl}/${resource}/many/${params.ids}`, {
            method: 'GET',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    updateMany: (resource, params) => {
        
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
           
        })),

    delete: (resource, params) =>
        
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    deleteMany:(resource, params) => {

        return httpClient(`${apiUrl}/${resource}/many/${params.ids}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },
};