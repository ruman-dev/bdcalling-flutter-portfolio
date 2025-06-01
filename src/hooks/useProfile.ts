
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Profile {
  id: string;
  name: string;
  designation: string;
  company: string;
  bio: string | null;
  location: string | null;
  email: string | null;
  phone: string | null;
  linkedin: string | null;
  github: string | null;
  profile_image: string | null;
  created_at: string;
  updated_at: string;
}

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profile')
        .select('*')
        .single();
      
      if (error) {
        console.error('Error fetching profile:', error);
        throw error;
      }
      
      return data as Profile;
    },
  });
};
