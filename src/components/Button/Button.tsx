interface ButtonProps {
  textContent: string;
  clickHandler: () => void;
}

export default function Button({ textContent, clickHandler }: ButtonProps) {
    
  return (
    <button type="button" onClick={clickHandler}>
      {textContent}
    </button>
  );
}
/*
У кожному елементі списку потрібно додати кнопку "View profile". 
При натисканні на кнопку має викликатися обробник події onClick,
 а у консолі браузера повинен виводитись ідентифікатор тварини.
*/

