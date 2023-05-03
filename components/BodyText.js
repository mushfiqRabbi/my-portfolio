export default function BodyText({ children, value, className }) {
  if (value === 1) {
    return (
      <p className={"text-lg tracking wide text-center " + className}>
        {children}
      </p>
    );
  } else if (value === 2) {
    return (
      <p className={"tracking wide text-center " + className}>{children}</p>
    );
  } else if (value === 3) {
    return (
      <div className={"tracking wide text-center " + className}>{children}</div>
    );
  }
}
