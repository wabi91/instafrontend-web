const FormError = ({ message }: { message: string | null }) => {
  return message ? <div className="text-sm text-red-700">{message}</div> : null;
};

export default FormError;
