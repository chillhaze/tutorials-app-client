import { useState } from 'react';
import { Formik } from 'formik';
import IFormValues from '../../interfaces/formValues.interface';
import INewTutorial from '../../interfaces/newTutorial.interface';
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  TextField,
} from '@mui/material';
import { InputWrapper } from './Form.styled';

type Props = {
  handleFormSubmit: (item: IFormValues, page: string) => void;
  item: INewTutorial;
  buttonLabel: string;
};

const EditForm = ({ handleFormSubmit, item, buttonLabel }: Props) => {
  const [isPublished, setIsPublished] = useState(item.published);

  const initialFormValues: IFormValues = {
    title: item.title,
    description: item.description,
    published: item.published,
    id: item.id,
  };

  return (
    <Formik
      initialValues={initialFormValues}
      // validationSchema={tutorialValidation}
      validateOnBlur
      validateOnChange
      onSubmit={(values: IFormValues) => {
        handleFormSubmit(values, 'update');
      }}
    >
      {(formik) => (
        <Box
          id="edit__form"
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ marginTop: 2 }}
        >
          <InputWrapper>
            <TextField
              fullWidth
              required
              autoFocus
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              sx={{ marginBottom: 5 }}
            />
            <TextField
              multiline
              fullWidth
              required
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              sx={{ marginBottom: 5 }}
            />

            <TextField
              fullWidth
              required
              id="id"
              name="id"
              label="ID"
              value={formik.values.id}
              onChange={formik.handleChange}
              error={formik.touched.id && Boolean(formik.errors.id)}
              helperText={formik.touched.id && formik.errors.id}
              sx={{ marginBottom: 5 }}
            />

            <FormControlLabel
              control={
                <Switch value={formik.values.published} checked={isPublished} />
              }
              label="Published"
              onChange={() => {
                setIsPublished((prevState) => (prevState = !prevState));
                formik.values.published = !formik.values.published;
              }}
            />
          </InputWrapper>

          <Button variant="contained" fullWidth type="submit">
            {buttonLabel}
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default EditForm;
