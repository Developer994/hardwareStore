// import React from 'react';

// export default function fetchData() {
//   // When the query state changes ([query]), we then run the effect
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(`http://localhost:4000/tools/?q=${query}`);
//         const json = await response.json();
//         // console.log({ json });
//         setResults(
//           json.map((item) => {
//             return item;
//           })
//         );
//       } catch (err) {
//         console.error(err.message);
//       }
//     }

//     if (query !== '') {
//       fetchData();
//     }
//   }, [query]);
// }
