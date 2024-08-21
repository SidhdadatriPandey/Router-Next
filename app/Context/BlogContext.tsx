"use client";
import axios from 'axios';
import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the data fetched from the API
interface CourseData {
  [key: string]: Blog[]; // Adjust according to the actual structure of the response
}

// Define the shape of the blog data
export interface Blog {
  image: {
    url: string;
  };
  id: string;
  title: string;
  description: string;
}

// Define the shape of the context data
export interface Data {
  blogs: Blog[];
  fetchData: (query: string) => Promise<void>;
}

// Define the initial value for the context
const initialValue: Data = {
  blogs: [],
  fetchData: async () => {},
};

// Create the context with the initial value
export const UserContext = createContext<Data>(initialValue);

// Define the API URL
export const apiUrl = "https://codehelp-apis.vercel.app/api/get-top-courses";

// Define the UserContext provider component
const BlogContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // Fetch data based on the query
  async function fetchData(query: string) {
    try {
      const res = await axios.get<CourseData>(apiUrl);
      const cardsData = res.data;
      const allCardsData: Blog[] = [];
  
      if (query === "all") {
        // Iterate over the object values and concatenate all arrays into one
        Object.keys(cardsData).forEach((key) => {
          const fieldData = cardsData[key];
          if (Array.isArray(fieldData)) {
            allCardsData.push(...fieldData);
          } else {
            console.warn(`Expected fieldData to be an array, but got: ${fieldData}`);
          }
        });
        setBlogs(allCardsData);
      } else {
        // Handle specific query cases
        const fieldData = cardsData[query];
        setBlogs(Array.isArray(fieldData) ? fieldData : []);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors appropriately (e.g., show a message to the user)
    }
  }
  
  
  

  const value = {
    blogs,
    fetchData,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default BlogContext;
