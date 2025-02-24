const Card = ({ children, className }) => {
    return (
      <div className={`bg-white rounded-2xl shadow-lg p-4 ${className}`}>
        {children}
      </div>
    );
  };
  
  const CardContent = ({ children }) => {
    return <div className="p-4">{children}</div>;
  };
  
  export { Card, CardContent };
  