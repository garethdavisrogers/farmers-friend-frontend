import React from "react";
import { useForm } from "react-hook-form";

function AddNewCropPage() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    fetch("http://localhost:8080/plant-datasheets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => {
        console.log("Success:", response);
        reset(); // clear the form
      })
      .catch(error => console.error("Error:", error));
  };

  return (
    <div>
      <h2>Add New Vegetable</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input {...register("plantName")} />

        <label>Plant Type:</label>
        <select {...register("plantType")}>
          <option value="VEGETABLE">Vegetable</option>
        </select>

        <label>Vegetable Type:</label>
        <select {...register("type")}>
          <option value="LEAFY">Leafy</option>
          <option value="ROOT">Root</option>
          {/* Add more based on your enum */}
        </select>

        <label>Ideal EC:</label>
        <input type="number" step="0.1" {...register("idealEC")} />

        <label>Ideal pH:</label>
        <input type="number" step="0.1" {...register("idealPH")} />

        <label>Days to Germinate:</label>
        <input type="number" {...register("averageDaysToGerminate")} />

        <label>Days to Morphogenesis:</label>
        <input type="number" {...register("averageDaysToMorphogenesis")} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNewCropPage;
