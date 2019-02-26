'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://test123:test123@ds141815.mlab.com:41815/react-capstone' || 'mongodb://localhost/react-capstone';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/react-capstone';
exports.API_BASE_URL = process.env.REACT_APP_API_ORIGIN || 'https://react-capstone-jb.herokuapp.com/'
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';