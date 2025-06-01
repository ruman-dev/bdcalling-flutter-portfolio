
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string | null;
  type: string | null;
  created_at: string;
}

export const useEducation = (type?: string) => {
  return useQuery({
    queryKey: ['education', type],
    queryFn: async () => {
      let query = supabase
        .from('education')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (type) {
        query = query.eq('type', type);
      }
      
      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching education:', error);
        throw error;
      }
      
      return data as Education[];
    },
  });
};
