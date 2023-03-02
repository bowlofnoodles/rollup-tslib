var msg = 'hello ts-lib';
if (process.env.NODE_ENV !== 'production') {
  console.log('dev log', msg);
}

export { msg };
