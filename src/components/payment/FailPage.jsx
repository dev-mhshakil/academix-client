const FailPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Payment Failed!
        </h1>
        <p className="text-lg">You have failed the payment process.</p>
      </div>
    </div>
  );
};

export default FailPage;
