export default function BodyText({ children, value, className }) {
  if (value === 1) {
    return (
      <p className={"text-xl tracking wide text-center mt-6 " + className}>
        {children}
      </p>
    );
  } else if (value === 2) {
    return (
      <p className={"text-[18px] text-center tracking-wide mt-6 " + className}>
        {children}
      </p>
    );
  } else if (value === 3) {
    return (
      <div className={"text-[17px] tracking wide text-center " + className}>
        {children}
      </div>
    );
  }
}
