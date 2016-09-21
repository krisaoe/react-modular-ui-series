import theme from '../styles/theme';

export default {
  todosListItem: {
    background: 'white',
    borderRadius: '10px',
    color: 'black',
    cursor: 'pointer',
    fontSize: '18px',
    marginBottom: '10px',
    padding: '40px 0',
    transition: '0.5s ease',

    ':hover': {
      background: theme.$mediumGray,
      color: 'white',
    }
  },

  completed: {
    transition: '0.5s ease',
    background: theme.$darkGray,
    color: 'white',
    fontSize: '12px',
    padding: '10px 0',
  }
};