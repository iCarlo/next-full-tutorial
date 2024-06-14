"use client";

import { useFormStatus } from "react-dom";

const MealsFormSubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default MealsFormSubmitBtn;
