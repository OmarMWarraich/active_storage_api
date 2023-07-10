import { AppContext } from "../App";
import React, { useContext } from "react";

function FileForm() {
  const { latestPost, setLatestPost } = useContext(AppContext);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();

    data.append("book[title]", event.target.title.value);
    data.append("book[image]", event.target.image.files[0]);
    data.append("book[description]", event.target.description.value);
    data.append("book[price]", event.target.price.value);
    data.append("book[discount_rate]", event.target.discount_rate.value);
    submitToAPI(data);
  }
  function submitToAPI(data) {
    fetch("http://localhost:3000/books", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        setLatestPost(data.image_url);
      })
      .catch((error) => console.error(error));
  }
  return (
    <div>
      <h1>File Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <br />
        <label htmlFor="description">description</label>
        <input type="text" name="description" id="description" />
        <br />
        <label htmlFor="price">price</label>
        <input type="number" name="price" id="price" />
        <br />
        <label htmlFor="discount_rate">discount_rate</label>
        <input type="number" name="discount_rate" id="discount_rate" />
        <br />

        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" />
        <br />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default FileForm;