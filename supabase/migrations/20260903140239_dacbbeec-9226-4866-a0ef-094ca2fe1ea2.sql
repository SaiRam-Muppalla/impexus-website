CREATE TABLE public.enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 6 AND 20),
  program TEXT NOT NULL CHECK (char_length(program) BETWEEN 1 AND 100),
  message TEXT NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  source TEXT NOT NULL DEFAULT 'website-contact-form',
  notified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.enquiries TO anon;
GRANT INSERT, SELECT ON public.enquiries TO authenticated;
GRANT ALL ON public.enquiries TO service_role;

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry"
  ON public.enquiries FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX enquiries_created_at_idx ON public.enquiries (created_at DESC);