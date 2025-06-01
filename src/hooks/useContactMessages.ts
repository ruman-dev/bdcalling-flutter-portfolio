
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const useContactMessages = () => {
  return useMutation({
    mutationFn: async (messageData: ContactMessage) => {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([messageData])
        .select()
        .single();
      
      if (error) {
        console.error('Error saving contact message:', error);
        throw error;
      }

      // Call the edge function to send email
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: messageData,
      });

      if (emailError) {
        console.error('Error sending email:', emailError);
        // Don't throw here - we still want to show success if the message was saved
      }
      
      return data;
    },
  });
};
