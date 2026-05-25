import { useId } from "react";

interface AddFormProps {
  onClose: () => void;
}

const AddForm = ({ onClose }: AddFormProps) => {
  const id = useId();
  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const userInfo = {
      userName: username,
      userEmail: email,
    };
    console.log(userInfo);
    onClose();
  };
  return (
    <form action={handleSubmit}>
      <label htmlFor={`${id}-username`}>Name</label>
      <input id={`${id}-username`} type="text" name="username" />

      <label htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} type="email" name="email" />

      <button type="submit">Save</button>
    </form>
  );
};

export default AddForm;

// !Cтворити форму додавання користувача (форма має містити 2 текстових інпути - для введення імені та пошти).
// !Форма має відкриватись по кнопці Add user, яка має рендеритись під списком юзерів (за уиови, що останній відрендерений).
// !Коли форма відкрита,
// !кнопка Add user має зникнути.
// !При сабміті форми дані мають виводитись
// в консоль, форма зникати, натомість повертатись кнопка Add user.
