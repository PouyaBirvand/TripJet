"use client";
import { CircleX, Loader2, Search } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';

const SearchBtn = ({ className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleSubmit = async (values, { resetForm }) => {
    const query = values.searchQuery.trim();
    if (!query) return;
    
    setIsLoading(true);
    
    try {
      console.log('Searching for:', query);
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsExpanded(false);
      resetForm();
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Formik
        initialValues={{ searchQuery: '' }}
        onSubmit={handleSubmit}
      >
        {({ values, resetForm }) => (
          <Form>
            <div className={`flex items-center py-1 border-none rounded-xl transition-all duration-300 overflow-hidden ${isExpanded ? 'bg-blue-50' : 'bg-transparent'}`}>
              <button
                type={values.searchQuery.trim() && isExpanded ? 'submit' : 'button'}
                onClick={() => !values.searchQuery.trim() && setIsExpanded(!isExpanded)}
                className={`p-2 text-blue-600 transition-colors ${isLoading ? 'cursor-wait' : 'cursor-pointer'}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
              </button>
              
              <div className={`transition-all duration-300 ${isExpanded ? 'md:w-48  opacity-100 px-2' : 'w-0 opacity-0'}`}>
                <Field
                  innerRef={inputRef}
                  name="searchQuery"
                  type="text"
                  placeholder="جستجو..."
                  className="w-full outline-none bg-transparent text-right text-gray-800 placeholder:text-gray-400"
                />
              </div>
              
              {isExpanded && values.searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setIsExpanded(false);
                  }}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <CircleX className="w-5 h-5" />
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBtn;