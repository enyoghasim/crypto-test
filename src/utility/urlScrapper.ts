import request from "../api.service/axios.factory.td";

const scrapeUrl = () => {
  const data = request("GET", "/openapi.json", "");
  console.log(data);
  //   const schema = data.components.schemas;
  //   const items = {
  //     allowedDates: schema.AllowedDateRanges.enum,
  //     allowedProgrammingLanguages: schema.AllowedProgrammingLanguages.enum,
  //     allowedSpokenLanguages: schema.AllowedSpokenLanguages.enum
  //   };
};

export default scrapeUrl;
