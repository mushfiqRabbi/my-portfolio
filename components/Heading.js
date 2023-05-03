export default function Heading({ children, value, className }) {
  if (value === 1) {
    return (
      <h1 className={"text-3xl font-bold text-center " + className}>
        {children}
      </h1>
    );
  } else if (value === 2) {
    return (
      <h2 className={"text-xl font-bold text-center " + className}>
        {children}
      </h2>
    );
  } else if (value === 3) {
    return <h3 className={"text-lg text-center " + className}>{children}</h3>;
  }
}
