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

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow flex items-center justify-center p-4 pb-20">
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Application Form
          </h2>
          <p className="text-gray-600 mb-6">Please fill in your details</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="John Doe"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.name ? "border-red-300" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                {...register("address", { required: "Address is required" })}
                placeholder="123 Main St, City"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.address ? "border-red-300" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                placeholder="john@example.com"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.email ? "border-red-300" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                id="contact"
                type="tel"
                {...register("contact", { required: "Contact is required" })}
                placeholder="+1 (555) 123-4567"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.contact ? "border-red-300" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
              {errors.contact && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.contact.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profile Photo
              </label>
              <div
                className={`border-2 border-dashed rounded-md p-4 ${
                  errors.photo ? "border-red-300" : "border-gray-300"
                }`}
              >
                {photoPreview ? (
                  <div className="text-center">
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="mx-auto h-24 w-24 object-cover rounded-full"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setPhotoPreview(null);
                        photoRef.current.value = "";
                      }}
                      className="mt-2 text-sm text-blue-600 hover:text-blue-500"
                    >
                      Change Photo
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <label
                      htmlFor="photo"
                      className="cursor-pointer text-[#FFDC1D] hover:text-yellow-600"
                    >
                      Upload Photo
                    </label>
                    <input
                      id="photo"
                      type="file"
                      accept="image/*"
                      ref={photoRef}
                      {...register("photo", {
                        required: "Profile photo is required",
                      })}
                      className="hidden"
                    />
                  </div>
                )}
              </div>
              {errors.photo && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.photo.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CV/Resume
              </label>
              <div
                className={`border-2 border-dashed rounded-md p-4 ${
                  errors.cv ? "border-red-300" : "border-gray-300"
                }`}
              >
                {watchCV?.[0]?.name ? (
                  <div className="text-center">
                    <p className="text-sm">{watchCV[0].name}</p>
                    <button
                      type="button"
                      onClick={() => {
                        cvRef.current.value = "";
                      }}
                      className="mt-2 text-sm text-blue-600 hover:text-blue-500"
                    >
                      Change CV
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <label
                      htmlFor="cv"
                      className="cursor-pointer text-[#FFDC1D] hover:text-yellow-600"
                    >
                      Upload CV
                    </label>
                    <input
                      id="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      ref={cvRef}
                      {...register("cv", { required: "CV is required" })}
                      className="hidden"
                    />
                  </div>
                )}
              </div>
              {errors.cv && (
                <p className="mt-1 text-sm text-red-600">{errors.cv.message}</p>
              )}
            </div>

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
        {" "}
        <Footer />
      </div>
    </div>
  );
}
