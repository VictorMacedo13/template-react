import axios from "axios";

const ExampleService = {
  register: async (params) => {
    var data = null;

    // await axios
    //   .post("http://localhost:8080/create", { params: params })
    //   .then((response) => {
    //     data = response.data;
    //   });

    return data;
  },
  getAll: async (params) => {
    // var data = null;
    // await axios.get("http://localhost:8080/", { params: params }).then((response) => {
    //   data = response.data;
    // });
    // return data;

    return ["Item a", "Item b", "Item c", "Item d"];
  },
  getById: async (id) => {
    var data = null;
    await axios.get(`http://localhost:8080/${id}`).then((response) => {
      data = response.data;
    });
    return data;
  },
  update: async (params, id) => {
    var data = null;
    await axios
      .put(`http://localhost:8080/${id}`, { params: params })
      .then((response) => {
        data = response.data;
      });
    return data;
  },
  delete: async (params) => {
    var data = null;
    await axios.delete(`http://localhost:8080/${params}`).then((response) => {
      data = response.data;
    });
    return data;
  },
};

export default ExampleService;
