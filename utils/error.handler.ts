export default function errorHandler<T>(error: T) {
  if (error) {
    console.error(error);
  }
}
