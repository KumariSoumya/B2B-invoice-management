import axios from "axios";
export const GetData = async () => {
  let response = await axios.get(
    "http://localhost:8080/backendHRC/DataLoading?zeroDateTimeBehavior=convertToNull"
  );

  let data = response.data.invoices;
  console.log(response.data.invoices);
  // let data = Array.from(response.data);
 let res = data.map((obj, index) => ({ ...obj, id: index + 1 }));
  console.log(res);
  return res;
};
