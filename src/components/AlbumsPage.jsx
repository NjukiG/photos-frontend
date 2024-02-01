import React, { useEffect, useState } from "react";
import { useAuth } from "../utils/AuthContext";

const Albums = () => {
  const { user } = useAuth();
  console.log(user.email);

  const [publishers, setPublishers] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/publishers")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPublishers(data);
      });
  }, []);
  return (
    <div>
      <h3>A list of all your albums.</h3>

      <div>
        <h1>Albums</h1>
        <ul>
          {publishers.map((publisher) => {
            if(publisher.email === user.email){
             return (
                <li key={publisher.id}>
                  <h2>{publisher.name}</h2>
                  <ul>
                    {publisher.albums.map((album) => (
                      <li key={album.id}>{album.title}</li>
                    ))}
                  </ul>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Albums;

// {publishers.map((publisher) => {
//   if (publisher.email === user.email) {
//     return (
//       <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
//         <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
//           <h3 className="mt-0.5 text-lg font-medium text-gray-900">
//             Welcome back {publisher.name}.
//           </h3>
//           <h4>We missed you</h4>

//           <div className="mt-4 flex flex-wrap gap-1">
//             <a href="/albums">
//               <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
//                 View {publisher.username}'s albums.
//               </span>
//             </a>
//           </div>
//         </div>
//       </article>
//     );
//   }
// })}
