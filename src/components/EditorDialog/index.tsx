import React from "react";
import { withFormik, FormikProps, Field } from "formik";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { customerSchema } from "../../utils/validations";
import { addCustomer, updateCustomer, selectCustomer } from "../../actions/customers";
import uuid from "uuid";
import _ from "lodash";

import { Dialog, DialogActions, DialogTitle, Button, TextField } from "@material-ui/core";
import { DialogBody, DialogFooter } from "./style";
import { Customer } from "models";
import { toggleEditorDialog } from "actions/ui";

interface FormValues {
  id?: string;
  firstName: string;
  lastName: string;
  dob: string;
}

interface FormProps {
  customer?: Customer;
  onCreate: typeof addCustomer;
  onUpdate: typeof updateCustomer;
  onClose(): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(3),
      width: 200
    }
  })
);

const BaseEditorForm = ({
  values,
  errors,
  onClose,
  onUpdate,
  onCreate,
  handleSubmit
}: FormProps & FormikProps<FormValues>) => {
  const classes = useStyles();

  const _handleSubmit = (e: any) => {
    handleSubmit(e);
    if (!_.isEmpty(errors)) {
      console.log("errors:", errors);
      return;
    }
    if (values.id) {
      onUpdate(values.id, values as Customer);
      onClose();
    } else {
      const newCustomer: Customer = {
        id: uuid(),
        ...values
      };
      onCreate(newCustomer);
      onClose();
    }
  };

  return (
    <form onSubmit={_handleSubmit}>
      <DialogBody>
        <Field name="firstName">
          {({ field, form }: any) => (
            <TextField
              {...field}
              className={classes.textField}
              label="First Name"
              InputLabelProps={{ shrink: true }}
              error={!!form.errors.firstName && form.touched.firstName}
              helperText={form.touched.firstName ? form.errors.firstName : ""}
            />
          )}
        </Field>
        <Field name="lastName">
          {({ field, form }: any) => (
            <TextField
              {...field}
              className={classes.textField}
              label="Last Name"
              name="lastName"
              InputLabelProps={{ shrink: true }}
              error={!!form.errors.lastName && form.touched.lastName}
              helperText={form.touched.lastName ? form.errors.lastName : ""}
            />
          )}
        </Field>
        <Field name="dob">
          {({ field, form }: any) => (
            <TextField
              {...field}
              className={classes.textField}
              label="Date of Birth"
              type="date"
              name="dob"
              InputLabelProps={{ shrink: true }}
              error={!!form.errors.dob && form.touched.firstName}
              helperText={form.touched.dob ? form.errors.dob : ""}
            />
          )}
        </Field>
      </DialogBody>
      <DialogFooter>
        <DialogActions>
          <Button color="primary" type="submit">
            Submit
          </Button>
          <Button color="secondary" onClick={() => onClose()}>
            Cancel
          </Button>
        </DialogActions>
      </DialogFooter>
    </form>
  );
};

const enhance = withFormik<FormProps, FormValues>({
  mapPropsToValues: ({ customer }) => {
    if (customer) {
      return customer;
    } else {
      return {
        firstName: "",
        lastName: "",
        dob: ""
      };
    }
  },
  validationSchema: customerSchema,
  handleSubmit: (values, { resetForm }) => {
    console.log("submitting");
  },
  displayName: "Customer Editor"
});

const EditorForm = enhance(BaseEditorForm);

interface Props {
  customer?: Customer;
  isOpen: boolean;
  onCreate: typeof addCustomer;
  onUpdate: typeof updateCustomer;
  toggleEditorDialog: typeof toggleEditorDialog;
  selectCustomer: typeof selectCustomer;
}

const EditorDialog = ({
  customer,
  isOpen,
  onCreate,
  onUpdate,
  toggleEditorDialog,
  selectCustomer
}: Props) => {
  const _handleClose = (): void => {
    toggleEditorDialog(false);
    selectCustomer(null);
  };
  return (
    <Dialog open={isOpen} style={{ padding: 16 }}>
      <DialogTitle>Customer Editor</DialogTitle>
      <EditorForm
        customer={customer}
        onCreate={onCreate}
        onUpdate={onUpdate}
        onClose={_handleClose}
      />
    </Dialog>
  );
};

export default EditorDialog;
