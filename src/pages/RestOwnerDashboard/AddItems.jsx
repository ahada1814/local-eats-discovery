import { Field, Formik, Form } from "formik";
import { useState } from "react";

const AddItems = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  
  const initialValues = {
    menuName: "",
    price: "",
    personPerPlatter: "",
    photos: uploadedImageUrl,
  };

  const handleSubmit = async (values) => {

    await handleFileUpload()

    const formData = {
      ...values,
      photos: uploadedImageUrl 
    };

    console.log(formData);
  };

  const handleFileUpload = async (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);


    try {
      const response = await fetch('https://api.imgbb.com/1/upload?key=146609dc8988265238b2191a07bb8e34', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setUploadedImageUrl(data.data.url);
      console.log(data.data.url); // This is the URL of the uploaded image
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };


  return (
    <div className="flex flex-col items-start justify-start gap-3 w-[60%] ps-20 pt-8">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <h5 className="text-3xl font-bold">Add Menu</h5>
          <div className="bg-white w-full flex items-center justify-between p-4 rounded-md">
            <span className="text-xs">Menu name</span>
            <Field
              className="text-xl font-semibold"
              type="text"
              name="menuName"
              placeholder="Enter Menu Name"
            />
          </div>
          <div className="bg-white w-full p-4 rounded-md">
            <span className="text-xs">Price</span>
            <Field
              className="text-xl font-semibold"
              type="text"
              name="price"
              placeholder="Enter Price"
            />
          </div>
          <div className="bg-white w-full p-4 rounded-md">
            <span className="text-xs">Person Per Platter</span>
            <Field
              className="text-xl font-semibold"
              type="text"
              name="personPerPlatter"
              placeholder="Enter Person Per Platter"
            />
          </div>
          <div className="bg-white w-full p-4 rounded-md">
          <input
              type="file"
              accept="image/*"
              name="photos"
              onChange={handleFileUpload}
            />
          </div>
          <button
            type="submit"
            className="bg-[#FFC153] px-6 py-2 text-white font-semibold rounded-md"
          >
            Update
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddItems;
