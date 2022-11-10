export function hasErrors(data, errors) {
  return errors.reduce(
    (acc, error) => {
      if (!error.check(data)) {
        acc[error.field] = {
          message: error.message,
          error: true,
        };
        acc.errors += 1;
      }
      return acc;
    },
    { errors: 0 }
  );
}