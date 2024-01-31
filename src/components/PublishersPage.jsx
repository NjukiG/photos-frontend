import React, { useEffect, useState } from "react";

const PublishersPage = () => {
  let [publishers, setPublishers] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/publishers")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div>PublishersPage</div>;
};

export default PublishersPage;
