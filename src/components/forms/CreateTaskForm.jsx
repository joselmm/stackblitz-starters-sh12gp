import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//models
import LEVELS from '../../models/levels.enum.js';
import Task from '../../models/task.class.js';

const CreateTaskForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(40, 'Too long, name must have less than 40 characteres')
      .required('You must provide a name'),
    description: Yup.string().required('You must provive a description'),
    level: Yup.string().oneOf(
      (() => {
        let levelArray = [];
        for (let level in LEVELS) levelArray.push(level);
        return levelArray;
      })(),
      'You must select a level'
    ),
  });

  const initialValues = new Task({});

  async function onSubmit(values) {
    await new Promise((r) => setTimeout(r, 1000));
    //console.log(values);
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <div>
      <h2>Create task</h2>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {function ({ errors, touched, isSubmitting }) {
          return (
            <Form>
              <div>
                <div>
                  <label htmlFor="name">Name</label>
                </div>
                <div>
                  <Field required type="text" name="name" id="name" />
                </div>
                {/* debido a que tiene component="div" no es necesario envolverlo en un div padre */}
                {errors.name && touched.name && (
                  <ErrorMessage name="name" component="div" />
                )}
              </div>
              <div>
                <div>
                  <label htmlFor="description">Description</label>
                </div>
                <div>
                  <Field
                    required
                    type="text"
                    name="description"
                    id="description"
                  />
                </div>
                {/* debido a que tiene component="div" no es necesario envolverlo en un div padre */}
                {errors.description && touched.description && (
                  <ErrorMessage name="description" component="div" />
                )}
              </div>
              <div>
                <div>
                  <label htmlFor="level">Level</label>
                </div>
                <div>
                  <Field required name="level" as="select">
                    <option>Select a level</option>
                    {(() => {
                      let elements = [];
                      for (let level in LEVELS) {
                        elements.push(
                          <option key={level} value={level}>
                            {level.charAt(0).toUpperCase() + level.slice(1)}
                          </option>
                        );
                      }
                      return elements;
                    })()}
                  </Field>
                </div>
                {/* debido a que tiene component="div" no es necesario envolverlo en un div padre */}
                {errors.level && touched.level && (
                  <ErrorMessage name="level" component="div" />
                )}
              </div>
              <div style={{ marginTop: '20px' }}>
                <button disabled={isSubmitting} type="submit">
                  Create task
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateTaskForm;
