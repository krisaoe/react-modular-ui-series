import { ThemeWrapMixin } from 'theme-wrap';

export default new ThemeWrapMixin()
  .set('largeBorders', theme => ({
    border: `5px solid ${theme.$primaryColor}`
  }))

  .set('bigFont', theme => ({
    fontSize: '18px'
  }))

  .set('mobileFriendly', theme => ({
    mixins: ['largeBorders', 'bigFont'],
    color: theme.$tertiaryColor,
    border: `10px solid ${theme.$secondaryColor}`
  }));