import React from "react";
import { Field, FieldArray, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

const NewEventForm: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ title: "", location: "", dates: [] }}
      onSubmit={async (values) => {
        const response = await fetch("http://localhost:4000/api/events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values)
        });
        if (response.ok) {
          navigate("/events");
        }
      }}
    >
      {
        ({ values }) => (
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field id="title" name="title" label="Title" type="text" />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <Field id="location" name="location" label="Location" type="text" />
            </div>
            <div>
              <label>Dates</label>
              <FieldArray name="dates">
                {
                  ({ remove, push }) => (
                    <div>
                      {
                        values.dates.map((_date, index) => (
                          <div key={index}>
                            <Field name={`dates.${index}`} type="number" />
                            <button type="button" onClick={() => remove(index)}>Remove</button>
                          </div>
                        ))
                      }
                      {values.dates.length <= 10 && <button type="button" onClick={() => push(0)}>Add</button>}
                    </div>
                  )
                }
              </FieldArray>
            </div>
            <button type="submit">Submit</button>
          </Form>
        )
      }
    </Formik>
  );
};

export default NewEventForm;
