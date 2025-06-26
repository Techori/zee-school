import axios from "axios";


export interface FormsPopProps {
    parentName: string;
    childName: string;
    email?: string;
    phone: string;
    previousSchoolName?: string;
    class: string;

}
 interface FormProps {
  parentName: string;
//   childName: string;
  email?: string;
  phone: string;
  age: string;
//   previousSchoolName?: string;
  class: string;
  message: string;
}
// const api = axios.create({
//     baseURL: import.meta.env.VITE_BASE_URL,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
const api = axios.create({
  baseURL: "https://api.web3forms.com/submit",
  headers: {
    "Content-Type": "application/json",
  },
});

// const popForm = async (data: FormsPopProps) => {
//     const res = await api.post('', data)
//     return res
// }
const popForm = async (data: FormsPopProps) => {
  const res = await api.post("", data);
  return res.data;
};
// const submitForm = async (data: FormProps) => {
//     const res = await api.post('', data)
//     return res
// }
const submitForm = async (data: FormProps) => {
  const res = await api.post("", data);
  return res.data;
};

export {
    popForm,
    submitForm
}