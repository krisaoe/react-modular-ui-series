export default (theme, props, mixins) => ({
  todosListItem: {
    ...mixins.get('largeBorders'),
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
    ...mixins.get('mobileFriendly'),
    transition: '0.5s ease',
    background: theme.$darkGray,
    padding: '10px 0',
  }
});
