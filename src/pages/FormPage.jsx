import { useForm } from "react-hook-form";
import { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";

export default function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [formData, setFormData] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const photoRef = useRef(null);
  const cvRef = useRef(null);
  const watchPhoto = watch("photo");
  const watchCV = watch("cv");

  useEffect(() => {
    if (watchPhoto?.length > 0) {
      const file = watchPhoto[0];
      const objectUrl = URL.createObjectURL(file);
      setPhotoPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [watchPhoto]);

  const onSubmit = (data) => {
    const formDataWithPreviews = {
      ...data,
      photoFile: data.photo[0],
      cvFile: data.cv[0],
    };
    setFormData(formDataWithPreviews);
    alert("Form submitted successfully!");
  };

  const FormField = ({
    label,
    id,
    type = "text",
    registerOptions,
    placeholder,
  }) => (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register(id, registerOptions)}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-md ${
          errors[id] ? "border-red-300" : "border-gray-300"
        } focus:outline-none focus:ring-1 focus:ring-blue-500`}
      />
      {errors[id] && (
        <p className="mt-1 text-sm text-red-600">{errors[id].message}</p>
      )}
    </div>
  );

  const FileUpload = ({ label, id, accept, preview, onRemove }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div
        className={`border-2 border-dashed rounded-md p-4 ${
          errors[id] ? "border-red-300" : "border-gray-300"
        }`}
      >
        {preview ? (
          <div className="text-center">
            {id === "photo" ? (
              <img
                src={preview}
                alt="Preview"
                className="mx-auto h-24 w-24 object-cover rounded-full"
              />
            ) : (
              <p className="text-sm">{watchCV?.[0]?.name}</p>
            )}
            <button
              type="button"
              onClick={onRemove}
              className="mt-2 text-sm text-blue-600 hover:text-blue-500"
            >
              Change {label}
            </button>
          </div>
        ) : (
          <div className="text-center">
            <label
              htmlFor={id}
              className="cursor-pointer text-[#FFDC1D] hover:text-yellow-600"
            >
              Upload {label}
            </label>
            <input
              id={id}
              type="file"
              accept={accept}
              ref={id === "photo" ? photoRef : cvRef}
              {...register(id, { required: `${label} is required` })}
              className="hidden"
            />
          </div>
        )}
      </div>
      {errors[id] && (
        <p className="mt-1 text-sm text-red-600">{errors[id].message}</p>
      )}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50 flex items-center justify-center p-4 pb-20">
        {" "}
        {/* Added pb-20 for footer space */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mb-8">
          {" "}
          {/* Added mb-8 */}
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Application Form
          </h2>
          <p className="text-gray-600 mb-6">Please fill in your details</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              label="Full Name"
              id="name"
              registerOptions={{ required: "Name is required" }}
              placeholder="John Doe"
            />

            <FormField
              label="Address"
              id="address"
              registerOptions={{ required: "Address is required" }}
              placeholder="123 Main St, City"
            />

            <FormField
              label="Email"
              id="email"
              type="email"
              registerOptions={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              }}
              placeholder="john@example.com"
            />

            <FormField
              label="Phone Number"
              id="contact"
              type="tel"
              registerOptions={{ required: "Contact is required" }}
              placeholder="+1 (555) 123-4567"
            />

            <FileUpload
              label="Profile Photo"
              id="photo"
              accept="image/*"
              preview={photoPreview}
              onRemove={() => {
                setPhotoPreview(null);
                photoRef.current.value = "";
              }}
            />

            <FileUpload
              label="CV/Resume"
              id="cv"
              accept=".pdf,.doc,.docx"
              preview={watchCV?.[0]?.name}
              onRemove={() => {
                cvRef.current.value = "";
              }}
            />

            <button
              type="submit"
              className="w-full bg-[#FFDC1D] py-2 px-4 rounded-md hover:bg-yellow-600 text-[#174ADD] focus:outline-none focus:ring-2 mt-4"
            >
              Submit Application
            </button>
          </form>
          {formData && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Submitted Details:</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Name:</span> {formData.name}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {formData.email}
                </p>
                <p>
                  <span className="font-medium">Contact:</span>{" "}
                  {formData.contact}
                </p>
                <p>
                  <span className="font-medium">Address:</span>{" "}
                  {formData.address}
                </p>
                {photoPreview && (
                  <div className="mt-2">
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="h-20 w-20 object-cover rounded-full"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <div className="mt-30">
        <Footer />
      </div>
    </div>
  );
}
