const ComponentContainer = ({ title, children, subtitle }) => {
  return (
    <div className='component-container'>
      {!!title && <h4>{title}</h4>}
      {!!subtitle && <p>{subtitle}</p>}
      {children}
    </div>
  );
};

export default ComponentContainer;
