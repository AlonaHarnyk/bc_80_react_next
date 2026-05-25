interface ButtonProps {
  title: string;
  clickHandler: () => void;
}

export default function Button({ title, clickHandler }: ButtonProps) {
  return (
    <button type="button" onClick={clickHandler}>
      {title}
    </button>
  );
}
