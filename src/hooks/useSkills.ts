
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Skill {
  id: string;
  name: string;
  category: string | null;
  level: number | null;
  created_at: string;
}

export const useSkills = () => {
  return useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('level', { ascending: false });
      
      if (error) {
        console.error('Error fetching skills:', error);
        throw error;
      }
      
      return data as Skill[];
    },
  });
};
