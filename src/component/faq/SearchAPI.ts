// import axios from "axios";
// const baseApi = process.env.NEXT_PUBLIC_BASE_API;

// interface SearchInfo {
//   data : {
//     content : {
//       id : number;
//       title : string;
//       message : string;
//       status : boolean;
//       faq_category : string;
//       create_date : string;
//       update_date : string;
//     }
// }

// // 자주묻는질문 검색
// export const GetSearch = async (word: string) => {
//   try {
//     const token = sessionStorage.getItem("token");
//     const {
//       data: { data }
//     } = await axios.get<SearchInfo>(`${baseApi}faq/search?${word}`, {
//       headers: {
//         TOKEN: `${token}`
//       }
//     });
//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       return false;
//     } else {
//       throw new Error("different error than axios");
//     }
//   }
// };
