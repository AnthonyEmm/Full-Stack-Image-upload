import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Form = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      price: "",
      image: "",
      owner: "",
    },
  });
  const notify = () => {
    toast.success("New Product Added!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("image", data.image[0]);
    formData.append("owner", data.owner);
    axios
      .post("http://localhost:4000/products", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1>Upload Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          {...register("name", { required: true, minLength: 4 })}
          placeholder="Product Name"
        />
        <label htmlFor="price">Price €</label>
        <input
          type="number"
          {...register("price", { required: true, minLength: 0 })}
          placeholder="Price"
        />
        <label htmlFor="image">Product Image</label>
        <input
          type="file"
          {...register("image", { required: true, minLength: 4 })}
        />
        <label htmlFor="owner">Owner Name</label>
        <input
          type="text"
          {...register("owner", { required: true, minLength: 4 })}
          placeholder="Owner Name"
        />

        <button onClick={notify}>Submit</button>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </form>
    </>
  );
};

export default Form;

// const onSubmit = (data) => {
//     console.log(data);
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("price", data.price);
//     formData.append("image", data.image[0]);
//     formData.append("owner", data.owner);
//     axios
//       .post("http://localhost:4000/product", formData)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
