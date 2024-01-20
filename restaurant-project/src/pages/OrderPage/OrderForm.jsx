import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function OrderForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onValid = (data) => console.log("Valide! : ", data);
  const onError = (errors) => {
    console.log("Errors: ", errors);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onValid, onError)}>
        <div className="row">
          <div className="col-5">
            <Form.Label>Prénom*</Form.Label>
            <Form.Control
              {...register("firstName", {
                required: true,
                validate: {
                  longEnough: (value) => value.length > 1,
                },
              })}
              placeholder="Entrez votre prénom"
            />
            {errors.firstName && errors.firstName.type === "longEnough" && (
              <p className="error">votre email n'est pas assez long</p>
            )}
            {errors.firstName && errors.firstName.type === "required" && (
              <p className="error">ce champ est obligatoire</p>
            )}
          </div>
          <div className="col-5">
            <Form.Label>Nom*</Form.Label>
            <Form.Control
              {...register("lastName", {
                required: true,
                validate: {
                  longEnough: (value) => value.length > 1,
                },
              })}
              placeholder="Entrez votre Nom"
            />
            {errors.lastName && errors.lastName.type === "longEnough" && (
              <p className="error">votre email n'est pas assez long</p>
            )}
            {errors.lastName && errors.lastName.type === "required" && (
              <p className="error">ce champ est obligatoire</p>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              {...register("email", {
                required: true,
                validate: {
                  longEnough: (value) => value.length > 1,
                  isEmail: (value) => String(value).includes("@"),
                },
              })}
              placeholder="Entrez votre email"
            />
            {errors.email && errors.email.type === "longEnough" && (
              <p className="error">votre email n'est pas assez long</p>
            )}
            {errors.email && errors.email.type === "isEmail" && (
              <p className="error">votre email ne contient pas d'arobase</p>
            )}
            {errors.email && errors.email.type === "required" && (
              <p className="error">ce champ est obligatoire</p>
            )}
          </div>
          <div className="col-5">
            <Form.Label>Adresse*</Form.Label>
            <Form.Control
              {...register("adress", {
                required: true,
              })}
              placeholder="Entrez votre adresse"
            />
            {errors.adress && errors.adress.type === "required" && (
              <p className="error">ce champ est obligatoire</p>
            )}
          </div>
        </div>

        <Button className="mt-4" variant="primary" type="submit">
          Valider ma commande
        </Button>
      </Form>
    </div>
  );
}

export default OrderForm;
