export default function BodyText({ children, value, className }) {
  if (value === 1) {
    return (
      <p className={"text-xl tracking wide text-center " + className}>
        {children}
      </p>
    );
  } else if (value === 3) {
    return (
      <div className={"text-[18px] text-center tracking-wide " + className}>
        {children}
      </div>
    );
  } else if (value === 2) {
    return (
      <p className={"text-[18px] text-center tracking-wide " + className}>
        {children}
      </p>
    );
  } else if (value === 4) {
    return (
      <div className={"text-[17px] tracking wide text-center " + className}>
        {children}
      </div>
    );
  }
}
