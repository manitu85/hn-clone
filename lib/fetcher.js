import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default fetcher;

// let res, page;
// try {
//   page = Number(query.page) || 1;
//   res = await axios.get(`${process.env.HN_API}/news?page=${page}`);
// } catch (err) {
//   console.error(err);
//   res = null;
// }

// const [data, setData] = useState(null);
// console.log(`data`, data);
// // if (stories.length === 0) return <Error statusCode={503} />;
// useEffect(() => {
//   const fetcher = async () => {
//     let page = Number(page) || 0;
//     const res = await fetch(`https://api.hackerwebapp.com/news?${page}`, {
//       method: "GET",
//       headers: { "content-type": "application/json" },
//     });
//     const data = await res.json();
//     setData(data);
//   };
//   fetcher();
// }, []);
