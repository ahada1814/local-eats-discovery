import { Field, Formik, Form } from "formik";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AddItems = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const initialValues = {
    menuName: "",
    price: "",
    personPerPlatter: "",
    photos: "",
  };

  const handleFileUpload = async (event) => {
    const formData = new FormData();
    formData.append("image", event.target.files[0]);

    try {
      setIsUploading(true);
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=146609dc8988265238b2191a07bb8e34",
        {
          method: "POST",
          body: formData,
        }
      );
      setIsUploading(true);
      const data = await response.json();
      setUploadedImageUrl(data.data.url);
      console.log(data.data.url); // This is the URL of the uploaded image
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (values) => {
    setIsSubmit(true);

    try {
      const formData = {
        ...values,
        photos: uploadedImageUrl,
      };

      console.log(formData);
    } catch (error) {
      console.error("Error submitting form data:", error);
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col items-start justify-start gap-3 w-[60%] ps-20 pt-8">
        <h5 className="text-3xl font-bold">Add Menu</h5>
        <div className="bg-white w-full flex flex-col justify-between p-4 rounded-md">
          <span className="text-xs">Menu name</span>
          <Field
           className="text-xl font-semibold outline-none"
            type="text"
            name="menuName"
            placeholder="Dish"
          />
        </div>
        <div className="bg-white w-full flex flex-col justify-between p-4 rounded-md">
          <span className="text-xs">Price</span>
          <Field
            className="text-xl font-semibold outline-none"
            type="text"
            name="price"
            placeholder="Enter Price"
          />
        </div>
        <div className="bg-white w-full flex flex-col justify-between p-4 rounded-md">
          <span className="text-xs">Person Per Platter</span>
          <Field
            className="text-xl font-semibold outline-none"
            type="text"
            name="personPerPlatter"
            placeholder="Enter Person Per Platter"
          />
        </div>
        <div className="bg-white w-full flex flex-col justify-between p-4 rounded-md">
          <div className="flex items-center justify-between">
            <input
              type="file"
              accept="image/*"
              name="photos"
              onChange={handleFileUpload}
            />
            {isUploading ? (
              <AiOutlineLoading3Quarters size={24} className="animate-spin text-yellow-400" />
            ) : (
              <></>
            )}
          </div>
        </div>
        <button
          type="submit"
          className={`${!isUploading ? 'bg-[#FFC153] text-white' : 'bg-slate-300  text-slate-50'} px-6 py-2  font-semibold rounded-md`}
          disabled={isUploading ? true : false}
        >
          {isSubmit ? "Uploading..." : "Update"}
        </button>
      </Form>
    </Formik>
  );
};

export default AddItems;
