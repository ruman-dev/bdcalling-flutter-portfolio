
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Project {
  id: string;
  title: string;
  description: string | null;
  category: string;
  image_url: string | null;
  technologies: string[] | null;
  github_url: string | null;
  demo_url: string | null;
  featured: boolean | null;
  created_at: string;
  updated_at: string;
}

export const useProjects = (category?: string) => {
  return useQuery({
    queryKey: ['projects', category],
    queryFn: async () => {
      let query = supabase
        .from('projects')
        .select('*')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });
      
      if (category && category !== 'all') {
        query = query.eq('category', category);
      }
      
      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching projects:', error);
        throw error;
      }
      
      return data as Project[];
    },
  });
};
