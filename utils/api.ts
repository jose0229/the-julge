import axios from 'axios';

type Job = {
  id: string;
  description: string;
  startsAt: string;
  hourlyPay: number;
  workhour: number;
  closed: boolean;
  shop: {
    item: {
      id: string; // shop_id
      name: string;
      category: string;
      address1: string;
      address2: string;
      description: string;
      imageUrl: string;
      originalHourlyPay: number;
    };
    href: string;
  };
  currentUserApplication: any | null;
};

export const fetchJobDetails = async (shopId: string, jobId: string): Promise<Job> => {
  try {
    const response = await axios.get(`https://bootcamp-api.codeit.kr/api/5-7/the-julge/shops/${shopId}/notices/${jobId}`);
    return response.data.item;
  } catch (error: any) {
    console.error('Failed to load job details', error);
    throw new Error('Failed to load job details');
  }
};
