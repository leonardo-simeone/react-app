import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// HERE WE USE 'z' OR ZOD TO DEFINE THE SHAPE OR SCHEMA OF OUR FORM
// AND ALL ITS VALIDATION RULES
// schema IS A COMMON NAME
const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }), //WE CAN CUSTOMIZE MESSAGES THIS WAY, PASSING AN OBJECT
  age: z
    .number({ invalid_type_error: "Age field is required." }) // HERE WE USE INVALID TYPE ERROR TO MESSAGE 'REQUIRED'
    .min(18, { message: "Age must be at least 18." }), // AND MESSAGE FOR MINIMUM
});

// HERE WE USE AN INTERFACE TO DEFINE THE SHAPE OF THIS FORM
// FORMDATA IS A COMMON NAME FOR THIS INTERFACE
// interface FormData {
//   name: string;
//   age: number;
// }
// USING SCHEMA WE DON'T NEED THE INTERFACE ANYMORE, INSTEAD WE USE THE FOLLOWING METHOD TO
// EXTRACT A TYPE FROM A SCHEMA OBJECT  SO WE DON'T HAVE TO TYPE THE INTERFACE BY HAND
type FormData = z.infer<typeof schema>; // IF WE HOVER OVER FORMDATA WE'LL SEE IT REPRESENT AND OBJECT WITH 2 PROPERTIES (NAME, AGE)

const Form = () => {
  //const nameRef = useRef<HTMLInputElement>(null); // WE USE THE <HTMLInputElement> TO TELL TYPESCRIPT THAT WE'RE REFERENCING
  //   AN INPUT ELEMENT BECAUSE useREF CAN BE USED TO REFERENCE ANY TYPE OF ELEMENT
  // const ageRef = useRef<HTMLInputElement>(null);

  // const person = {
  //   name: "",
  //   age: 0,
  // };

  // HERE WE'RE USING REACT HOOK
  // register AND handleSubmit ARE BUILT IN FUNCTIONS FROM REACT HOOKS (useForm())
  // WITH THIS METHOS WE NO LONGER NEED A STATE HOOK TO CREATE A PERSON OBJECT
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // WE USE IS VALID FUNCTION TO DISABLE SUBMIT BUTTON IN THE FORM IS CASE THE USER INPUT IS INVALID
  } = useForm<FormData>({ resolver: zodResolver(schema) }); //HERE WHEN WE CALL THE useForm WE PASS THE FormData INTERFACE THIS WAY WE AVOID TYPE ERRORS
  // BECAUSE WHEN WE TYPE errors.name, THE 'name' ( and all our inputs) FOR INSTANCE WILL COME UP FOR AUTOCOMPLETE
  // ALSO ONCE ZOD AND RESOLVERS PACKAGES ARE INSTALLED AND IMPORTED WE PASS THE FOLLOWING OBJECT WITH SCHEMA AS AN ARGUMENT { resolver: zodResolver(schema) }
  // THIS WILL INTEGRATE useForm WITH ZOD

  // console.log(register("name"));

  // ANOTHER WAY TO GET THE VALUES OF INPUT FIELDS IN A FORM IS TO USE THE STATE HOOK INSTEAD OF THE REF HOOK
  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });

  // const handleSubmit = (event: FormEvent) => {
  // BECAUSE THE FUNCTION IS OUTSIDE OF THE FORM ELEMENT
  // THE EVENT NEEDS TO BE ANNOTATED '(event: FormEvent)'
  // BECAUSE THE TYPESCRIPT COMPILER DOESN'T KNOW HERE WHAT TYPE OF EVENT IT IS
  // EVERY INPUT FIELD IN A FORM HAS A PREDETERMINED EVENT EVERYTIME THE USER STRIKES A KEY
  // event.preventDefault();
  // console.log(person);

  // if (nameRef.current !== null) person.name = nameRef.current.value;

  // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  // console.log(person);

  // WE TAKE THIS FUNCTION OUT OF onSubmit AND LEAVE THE CALL TO handleSubmit WITH onSubmit AS AN ARGUMENT
  // WE ANNOTATE data:FieldValues CAUSE TYPESCRIPT DOESN'T KNOW THE DATA ONCE IT'S OUT OF THE ELEMENT
  // FieldValues IS DEFINED IN THE REACT HOOK FORMS
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)} //handleSubmit((data) => console.log(data))} //(event) => {
      // IF THIS GETS TO COMPLICATED, MOVE TO A SEPARATE FUNCTION
      //     event.preventDefault();
      //     console.log("Submitted");
      //}}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* <input ref={nameRef} id="name" type="text" className="form-control" /> */}
        <input
          // EVERY INPUT FIELD HAS A PREDETERMINED EVENT EVERYTIME THE USER STRIKES A KEY
          // AND TARGET MEANS THE FIELD WE'RE CURRENTLY ON HENCE => event.target.value
          // onChange={(event) =>
          //   setPerson({ ...person, name: event.target.value })
          // }
          // WE SET THIS VALUE TO THE OBJECT'S PROPERTY SO REACT IS THE SOLE HOLDER OF THE VALUE
          // SO THAT IT'S MANAGES AND CONTROLED BY THE COMPONENT STATE (REACT)
          // OTHERWISE IT MIGHT CAUSE ISSUES WITH THE VALUE CONTROLLED BY THE DOM (NOT SYNCHED)
          // THIS WAY THE INPUT FIELD ALWAYS RELIES ON THE VALUE IN OUR STATE VARIABLE
          // value={person.name}
          //{...register("name", { required: true, minLength: 3 })} //required: true, minLength: 3 WE USE FOR DATA VALIDATION MAKING SURE THE USER ENTERS A VALUE AND IT'S MINIMUM 3 CHARACTERS
          // THESE VALIDATION RULES FOR NAME (OR THE OTHER PROPERTIES) WE CAN REMOVED WHEN REGISTERING THE PROPERTY BECAUSE THEY'RE ALL DEFINED
          // IN OUR SCHEMA LIKE SO
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {/* AS OUR FORM GETS MORE COMPLEX WE'LL END UP WITH A BUNCH OF VALIDATION RULES IN THE MIDDLE OF OUR MARK UP */}
        {/* WHICH IS WHY IT'S BETTER TO USE A LIBRARY TO SIMPLIFY THIS PROCESS WITH THE SCHEMA BASED VALIDATION TECHNIQUE */}
        {/* {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )} */}
        {errors.name && <p className="text-danger">{errors.name.message}</p>}{" "}
        {/* THIS WAY ZOD WILL TAKE CARE OF GENERATING THE MESSAGES DINAMICALLY BASED ON THE SCHEMA WE DEFINED*/}
        {/* ALSO WITH THE SCHEMA TECHNIQUE WE DON'T NEED SEPARATE PARAGRAPHS FOR DIFFERENT MESSAGES */}
        {/* {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters.</p>
        )} */}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* <input ref={ageRef} id="age" type="number" className="form-control" /> */}
        <input
          // onChange={(event) =>
          //   setPerson({ ...person, age: parseInt(event.target.value) })
          // }
          // value={person.age}
          {...register("age", { valueAsNumber: true })} //THIS IS TO CONVER THE INPUT VALUE FROM STRING TO NUMBER
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}{" "}
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
