"use client";

import { useEffect, useState } from "react";
import { logInfo, logError } from "@/utils/Logger";
import { Category } from "@/interfaces/Category";

export const useGetCategoriesWithServices = (refreshCount: number) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      logInfo("Fetching categories from API...");

      try {
        const response = await fetch('/api/categories/GetCategoriesWithServices', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        await response.json()
            .then(function(result) {
              setCategories(result);
            });
        logInfo("Successfully fetched categories");
      } catch (error) {
        logError("Error fetching categories from API", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [refreshCount]);

  return { categories, loading };
};
