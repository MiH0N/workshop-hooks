const ComponentContainer = ({ title, children }) => {
  return (
    <div className='component-container'>
      {!!title && <h4>{title}</h4>}
      {children}
    </div>
  );
};

export default ComponentContainer;
