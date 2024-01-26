"use client";

import { useState, useEffect, useCallback } from "react";
import { Service } from "@/interfaces/Service";
import { logInfo, logError } from "@/utils/Logger";

export const useGetServiceById = (serviceId: number) => {
  const [getService, setService] = useState<Service | null>(null);
  const [getServiceLoading, setLoading] = useState(false);

  const fetchService = useCallback(async () => {
    if (!serviceId) return;

    setLoading(true);
    logInfo(`Fetching service with ID ${serviceId} from API...`);

    try {
      const response = await fetch(`/api/services/${serviceId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      await response.json()
          .then(function(result) {
            setService(result);
            logInfo(`Successfully fetched service with ID ${serviceId}`, result);
          });
      logInfo(`Successfully fetched service with ID ${serviceId}`);
    } catch (error) {
      logError(`Error fetching service with ID ${serviceId} from API`, error);
      setService(null);
    } finally {
      setLoading(false);
    }
  }, [serviceId]);

  useEffect(() => {
    fetchService();
  }, [fetchService]);

  return { getService, getServiceLoading, refetchService: fetchService };
};
