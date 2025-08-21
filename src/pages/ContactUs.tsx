import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function ContactUs() {
  const instagramId = import.meta.env.VITE_INSTAGRAM_ID;
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            We would love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to share your feedback, feel free to reach out to us through any of the channels below.
          </p>
          <div className="flex flex-col space-y-2">
            <Button asChild variant="outline">
              <a href={`https://www.instagram.com/${instagramId}`} target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-4 w-4" />
                Instagram
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={`mailto:${emailAddress}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
