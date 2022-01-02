import React from "react";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";

import AddProperty from "../../components/AddProperty";

export default function ProductWizard({
  onFormSubmit,
  initialValues,
  productToEdit,
}) {
  return (
    <React.Fragment>
      <Form
        mutators={{ ...arrayMutators }}
        onSubmit={onFormSubmit}
        initialValues={initialValues}
        render={({ handleSubmit,submitting, values  }) => (
          <form
            onSubmit={handleSubmit}
            className="addProduct"
            mutators={{
              ...arrayMutators,
            }}
          >
            <AddProperty submitting={submitting} values={values}/>
            
          </form>
        )}
      />
    </React.Fragment>
  );
}
