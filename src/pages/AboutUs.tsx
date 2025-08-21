import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>About Rumani Dhaage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Welcome to Rumani Dhaage, where timeless tradition is woven into every thread. Our passion is to bring you a curated collection of India's finest ethnic wear, celebrating the rich heritage and artistry of our culture.
          </p>
          <p>
            Each piece in our collection, from elegant sarees and vibrant dupattas to exquisite suits, is handpicked to reflect a legacy of craftsmanship. We believe in the beauty of detail and the allure of classic designs that transcend fleeting trends.
          </p>
          <p>
            At Rumani Dhaage, we are more than just a brand; we are storytellers, preserving the intricate narratives of Indian textiles for the modern connoisseur. We invite you to explore our collection and experience the grace and sophistication of authentic ethnic wear.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
