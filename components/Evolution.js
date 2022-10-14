import React, { useEffect, useState } from "react";

const Evolution = ({ evolution, loading }) => {
  const [evo, setEvo] = useState(evolution);
  // useEffect(() => {
  //   async function getData(urls) {
  //     console.log(urls);
  //     await fetch(urls)
  //       .then((res) => res.json())
  //       .then((data) => setEvo(data));
  //   }

  //   getData(url);
  //   console.log(evo);
  // }, [url]);
  return (
    <div className="grid grid-cols-2 justify-items-center">
      {loading && <p>Loading..</p>}
      {evo && (
        <>
          <img src={evo.sprites.front_default} alt={evo.name} />
          <img src={evo.sprites.front_shiny} alt={evo.name} />
          <img src={evo.sprites.back_default} alt={evo.name} />
          <img src={evo.sprites.back_shiny} alt={evo.name} />
        </>
      )}
    </div>
  );
};

// export async function getStaticProps(context) {
//   console.log(context);
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   // const res = await fetch('https://.../posts')
//   // const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {},
//   };
// }

export default Evolution;
