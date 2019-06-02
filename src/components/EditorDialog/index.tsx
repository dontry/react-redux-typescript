import React from "react";
import { withFormik, FormikProps } from "formik";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { customerSchema } from "../../utils/validations";
import { addCustomer, updateCustomer, selectCustomer } from "../../actions/customers";
import uuid from "uuid";

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

const BaseEditorForm = ({ values, onClose, onUpdate, onCreate, errors }: any) => {
  const classes = useStyles();

  const _handleSubmit = () => {
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
        <TextField
          className={classes.textField}
          label="First Name"
          InputLabelProps={{ shrink: true }}
          value={values.firstName}
          error={!!errors.firstName}
          helperText={errors.firstName}
        />
        <TextField
          className={classes.textField}
          label="Last Name"
          InputLabelProps={{ shrink: true }}
          value={values.lastName}
          error={!!errors.lastName}
          helperText={errors.lastName}
        />
        <TextField
          className={classes.textField}
          label="Date of Birth"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={values.dob}
          error={!!errors.dob}
          helperText={errors.dob}
        />
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

const enhance = withFormik<Props, FormValues>({
  mapPropsToValues: ({ customer }) => {
    if (customer) {
      return {
        firstName: customer.firstName || "",
        lastName: customer.lastName || "",
        dob: customer.dob || ""
      };
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
    resetForm();
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
      <EditorForm customer={customer} onCreate={onCreate} onUpdate={onUpdate} />
    </Dialog>
  );
};

export default EditorDialog;
