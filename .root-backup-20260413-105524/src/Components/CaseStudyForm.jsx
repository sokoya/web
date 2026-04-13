import React, { useState } from 'react';

const CaseStudyForm = () => {
  const [formData, setFormData] = useState({
    bannerLink: '',
    brandLogo: null,
    brandCategory: '',
    brandMoto: '',
    brandName: '',
    brandLocation: '',
    aboutBrand: '',
    howItStartedTitle: '',
    howItStartedContent: '',
    quoteBanner0: '',
    quoteRole0: '',
    quotePerson0: {
      image: null,
      name: ''
    },
    frustrationTitle: '',
    frustrationContent: '',
    quoteBanner1: '',
    quoteRole1: '',
    quotePerson1: {
      image: null,
      name: ''
    },
    partnershipTitle: '',
    partnershipContent: '',
    quoteBanner2: '',
    quoteRole2: '',
    quotePerson2: {
      image: null,
      name: ''
    },
    brandIntegrationTitle: '',
    brandIntegrationContent: [''],
    productTitle: '',
    productContent: ['']
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files[0]) {
      if (name.includes('quotePerson')) {
        const [person, field] = name.split('.');
        setFormData(prev => ({
          ...prev,
          [person]: {
            ...prev[person],
            [field]: files[0]
          }
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: files[0]
        }));
      }
    }
  };

  const handleArrayChange = (index, value, fieldName) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: prev[fieldName].map((item, i) => 
        i === index ? value : item
      )
    }));
  };

  const addArrayItem = (fieldName) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: [...prev[fieldName], '']
    }));
  };

  const removeArrayItem = (index, fieldName) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: prev[fieldName].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Case Study Information Form</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Brand Information Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Brand Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Banner Link
              </label>
              <input
                type="url"
                name="bannerLink"
                value={formData.bannerLink}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter banner link"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Brand Logo
              </label>
              <input
                type="file"
                name="brandLogo"
                onChange={handleFileChange}
                className="w-full p-2 border rounded"
                accept="image/*"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Brand Name
                </label>
                <input
                  type="text"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter brand name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Category
                </label>
                <input
                  type="text"
                  name="brandCategory"
                  value={formData.brandCategory}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Fintech"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Brand Motto/Title
              </label>
              <input
                type="text"
                name="brandMoto"
                value={formData.brandMoto}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter case study title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Location
              </label>
              <input
                type="text"
                name="brandLocation"
                value={formData.brandLocation}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter location"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                About Brand
              </label>
              <textarea
                name="aboutBrand"
                value={formData.aboutBrand}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="Describe the brand"
              />
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Story</h2>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              How It Started Title
            </label>
            <input
              type="text"
              name="howItStartedTitle"
              value={formData.howItStartedTitle}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter story title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              How It Started Content
            </label>
            <textarea
              name="howItStartedContent"
              value={formData.howItStartedContent}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 h-32"
              placeholder="Enter the story"
            />
          </div>
        </div>

        {/* Quotes Section */}
        {[0, 1, 2].map((index) => (
          <div key={index} className="space-y-4 p-4 border rounded">
            <h3 className="text-lg font-medium">Quote {index + 1}</h3>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Quote Content
              </label>
              <textarea
                name={`quoteBanner${index}`}
                value={formData[`quoteBanner${index}`]}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 h-24"
                placeholder="Enter quote"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Quote Role
              </label>
              <input
                type="text"
                name={`quoteRole${index}`}
                value={formData[`quoteRole${index}`]}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter role"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Person Image
              </label>
              <input
                type="file"
                name={`quotePerson${index}.image`}
                onChange={handleFileChange}
                className="w-full p-2 border rounded"
                accept="image/*"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Person Name
              </label>
              <input
                type="text"
                name={`quotePerson${index}.name`}
                value={formData[`quotePerson${index}`].name}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name"
              />
            </div>
          </div>
        ))}

        {/* Integration Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Integrations</h2>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Integration Title
            </label>
            <input
              type="text"
              name="brandIntegrationTitle"
              value={formData.brandIntegrationTitle}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter integration title"
            />
          </div>

          {formData.brandIntegrationContent.map((item, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleArrayChange(index, e.target.value, 'brandIntegrationContent')}
                className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter integration item"
              />
              <button
                type="button"
                onClick={() => removeArrayItem(index, 'brandIntegrationContent')}
                className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('brandIntegrationContent')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Integration
          </button>
        </div>

        {/* Product Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Products</h2>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Title
            </label>
            <input
              type="text"
              name="productTitle"
              value={formData.productTitle}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product title"
            />
          </div>

          {formData.productContent.map((item, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleArrayChange(index, e.target.value, 'productContent')}
                className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product item"
              />
              <button
                type="button"
                onClick={() => removeArrayItem(index, 'productContent')}
                className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('productContent')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 font-medium"
        >
          Submit Case Study
        </button>
      </form>
    </div>
  );
};

export default CaseStudyForm;