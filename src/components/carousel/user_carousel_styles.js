const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  carousel: {
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '20px',
  },
  arrowButton: {
    background: '#ff6347',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    outline: 'none',
    margin: '0 10px',
    transition: 'background 0.3s',
    '&:hover': {
      background: '#0056b3',
    },
  },
  buttonContainer: {
    marginTop: '20px',
    textAlign: 'center', 
  },
  userContainer: {
    position: 'relative', 
    textAlign: 'center',
    marginBottom: '40px',
  },
  userImage: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    marginBottom: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  userName: {
    fontSize: '24px',
    margin: '10px 0',
    color: '#333333',
  },
  userInfo: {
    fontSize: '16px',
    margin: '5px 0',
    color: '#666666',
  },
  heartIcon: {
    position: 'absolute',
    top: '10px',
    right: '-10px', 
    fontSize: '24px',
    color: '#ff6347',
    cursor: 'pointer',
    zIndex: '1',
  },
};

export default styles;
