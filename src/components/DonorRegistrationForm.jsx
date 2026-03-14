// DonorRegistrationForm.jsx
import React, { useState, useEffect } from "react";

function DonorRegistrationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    province: "",
    postalCode: "",
  });

  // --- Autocomplete state ---
  const [addressQuery, setAddressQuery] = useState("");
  const [addressSuggestions, setAddressSuggestions] = useState([]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // --- Fetch address suggestions from Geoapify ---
  useEffect(() => {
    if (addressQuery.length < 3) {
      setAddressSuggestions([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        // For testing, API key hardcoded
        const GEOAPIFY_KEY = "78e300eb59dd440890d0d0a972e51b29";

        const res = await fetch(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
            addressQuery,
          )}&filter=countrycode:ph&apiKey=${GEOAPIFY_KEY}`,
        );
        const data = await res.json();
        setAddressSuggestions(data.features || []);
      } catch (err) {
        console.error("Autocomplete fetch error:", err);
      }
    }, 300); // debounce 300ms

    return () => clearTimeout(timeout);
  }, [addressQuery]);

  const handleSuggestionClick = (item) => {
    const props = item.properties;
    handleInputChange("address", props.formatted || "");
    handleInputChange("city", props.city || "");
    handleInputChange("province", props.state || "");
    handleInputChange("postalCode", props.postcode || "");
    setAddressSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 relative max-w-md">
      {/* Address input */}
      <div className="space-y-2 relative">
        <label className="block font-semibold" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={(e) => {
            handleInputChange("address", e.target.value);
            setAddressQuery(e.target.value);
          }}
          className="w-full border rounded p-2"
          placeholder="Enter your address"
        />
        {addressSuggestions.length > 0 && (
          <ul className="absolute z-50 w-full bg-white border rounded shadow max-h-60 overflow-y-auto mt-1">
            {addressSuggestions.map((item, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(item)}
              >
                {item.properties.formatted}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Province */}
      <div className="space-y-2">
        <label className="block font-semibold" htmlFor="province">
          Province
        </label>
        <input
          type="text"
          id="province"
          value={formData.province}
          onChange={(e) => handleInputChange("province", e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      {/* City + Postal Code */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block font-semibold" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            value={formData.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <div className="space-y-2">
          <label className="block font-semibold" htmlFor="postalCode">
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            value={formData.postalCode}
            onChange={(e) => handleInputChange("postalCode", e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default DonorRegistrationForm;
